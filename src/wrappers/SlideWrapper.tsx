import { useRef } from "react";
import { motion } from "framer-motion";
import type { SlideTypes } from "../data/slides";
import Slide from "../components/Slide";
import { useSlideTransition } from "../context/SlideTransitionProvider";
import { useSwipe } from "../hooks/useSwipe";

interface Props {
  slide: SlideTypes;
  index: number;
  total: number;
  onTransitionDone?: () => void;
}

export default function SlideWrapper({
  slide,
  index,
  total,
  onTransitionDone,
}: Props) {
  const { direction, slideDirection, goToNext, goToPrev } = useSlideTransition();
  const motionRef = useRef<HTMLDivElement>(null);

  const triggerHaptic = () => {
    if ("vibrate" in navigator) navigator.vibrate(30);
  };

  // Bind swipe detection to the motion div
  useSwipe(motionRef, (dir) => {
    if (dir === "left") {
      goToNext();
      triggerHaptic();
    } else if (dir === "right") {
      goToPrev();
      triggerHaptic();
    }
  });

  const handleSwipeOffset = (offset: number) => {
    if (offset < -100) {
      goToNext();
      triggerHaptic();
    } else if (offset > 100) {
      goToPrev();
      triggerHaptic();
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: direction === "horizontal" ? `${dir * 100}vw` : 0,
      y: direction === "vertical" ? `${dir * 100}vh` : 0,
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
      x: direction === "horizontal" ? `${-dir * 100}vw` : 0,
      y: direction === "vertical" ? `${-dir * 100}vh` : 0,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <div className="h-full w-full z-10 touch-auto overflow-hidden swipe-container">
      <motion.div
        ref={motionRef}
        key={slide.title}
        custom={slideDirection}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        drag={direction === "horizontal" ? "x" : "y"}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.4}
        onDragEnd={(_, { offset }) => {
          if (direction === "horizontal") handleSwipeOffset(offset.x);
          else handleSwipeOffset(offset.y);
        }}
        className="h-full w-full overflow-hidden"
        style={{ touchAction: direction === "horizontal" ? "pan-y" : "pan-x" }}
        onAnimationComplete={onTransitionDone}
      >
        <Slide slide={slide} index={index} total={total} />
      </motion.div>
    </div>
  );
}