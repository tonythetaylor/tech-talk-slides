import { motion } from "framer-motion";
import type { SlideTypes } from "../data/slides";
import Slide from "../components/Slide";
import { useSlideTransition } from "../context/SlideTransitionProvider";

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
  const { direction, slideDirection, setSlideDirection } = useSlideTransition();

  const handleSwipe = (swipe: number) => {
    if (swipe < -100) {
      setSlideDirection(1); // Next
      triggerHaptic();
    } else if (swipe > 100) {
      setSlideDirection(-1); // Prev
      triggerHaptic();
    }
  };

  const triggerHaptic = () => {
    if ("vibrate" in navigator) navigator.vibrate(30);
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
    <motion.div
      key={slide.title}
      custom={slideDirection}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      drag={direction === "horizontal" ? "x" : "y"}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
      onDragEnd={(_, { offset }) => {
        if (direction === "horizontal") handleSwipe(offset.x);
        else handleSwipe(offset.y);
      }}
      className="h-full w-full"
      onAnimationComplete={onTransitionDone}
    >
      <Slide slide={slide} index={index} total={total} />
    </motion.div>
  );
}
