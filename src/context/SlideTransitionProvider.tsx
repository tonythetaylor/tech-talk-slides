// src/context/SlideTransitionProvider.tsx

import { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "../components/Slide";
import type { SlideTypes as SlideType } from "../data/slides";

// Unified context type
interface SlideTransitionContextValue {
  goToNext: () => void;
  goToPrev: () => void;
  currentSlide: SlideType;
  currentIndex: number;
  isFirst: boolean;
  isLast: boolean;
  direction: "horizontal" | "vertical";
  slideDirection: number;
  setDirection: (dir: "horizontal" | "vertical") => void;
  setSlideDirection: (dir: number) => void;
}

// ✅ Create one context
export const SlideTransitionContext = createContext<SlideTransitionContextValue | null>(null);

export function useSlideTransition() {
  const ctx = useContext(SlideTransitionContext);
  if (!ctx) throw new Error("Must be used within SlideTransitionProvider");
  return ctx;
}

interface Props {
  slides: SlideType[];
  children?: React.ReactNode;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  direction?: "horizontal" | "vertical";
}

export function SlideTransitionProvider({
  slides,
  children,
  autoplay = false,
  autoplayDelay = 6000,
  loop = false,
  direction: initialDirection = "horizontal",
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [direction, setDirection] = useState<"horizontal" | "vertical">(initialDirection);

  const goTo = (targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= slides.length) return;
    setSlideDirection(targetIndex > currentIndex ? 1 : -1);
    setCurrentIndex(targetIndex);
  };

  const goToNext = () => {
    if (currentIndex < slides.length - 1) {
      goTo(currentIndex + 1);
    } else if (loop) {
      goTo(0);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1);
    } else if (loop) {
      goTo(slides.length - 1);
    }
  };

  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(goToNext, autoplayDelay);
    return () => clearTimeout(timer);
  }, [currentIndex, autoplay, autoplayDelay]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const slideVariants = {
    enter: (dir: number) => ({
      x: direction === "horizontal" ? `${dir * (isMobile ? 80 : 100)}vw` : 0,
      y: direction === "vertical" ? `${dir * (isMobile ? 80 : 100)}vh` : 0,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir: number) => ({
      x: direction === "horizontal" ? `${-dir * (isMobile ? 80 : 100)}vw` : 0,
      y: direction === "vertical" ? `${-dir * (isMobile ? 80 : 100)}vh` : 0,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <SlideTransitionContext.Provider
      value={{
        goToNext,
        goToPrev,
        currentSlide: slides[currentIndex],
        currentIndex,
        isFirst: currentIndex === 0,
        isLast: currentIndex === slides.length - 1,
        direction,
        slideDirection,
        setDirection,
        setSlideDirection,
      }}
    >
      <div className="relative h-full w-full overflow-hidden z-0">
        <AnimatePresence initial={false} custom={slideDirection} mode="wait">
          <motion.div
            key={currentIndex}
            custom={slideDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Slide
              slide={slides[currentIndex]}
              index={currentIndex}
              total={slides.length}
            />
          </motion.div>
        </AnimatePresence>

        {/* UI Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="relative w-full h-full pointer-events-auto">
            {children}
          </div>
        </div>
      </div>
    </SlideTransitionContext.Provider>
  );
}