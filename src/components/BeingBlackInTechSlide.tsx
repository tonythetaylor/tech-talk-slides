import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  isTitleMoved: boolean;
  showContent: boolean;
  slide: {
    title?: string;
    content: string;
  };
}

export default function BeingBlackInTechSlide({
  isTitleMoved,
  showContent,
  slide,
}: Props) {
  const { content } = slide;
  const [showStory, setShowStory] = useState(false);

  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const question = lines[0];
  const bulletPoints = lines.slice(1);

  return (
    <div className="h-screen w-screen bg-black/60 relative text-white px-4 overflow-hidden">
      {/* Title */}
      <motion.h1
        className={`
          absolute font-bold transition-all duration-[1200ms] ease-in-out tracking-tight
          ${isTitleMoved
            ? 'top-6 md:top-8 left-4 md:left-8 text-left text-3xl md:text-5xl lg:text-6xl'
            : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl md:text-6xl lg:text-7xl'
          }
        `}
        style={{ lineHeight: "1.2" }}
      >
        Being Black in Tech
      </motion.h1>

      {/* Button or Story */}
      <div className="flex items-center justify-center h-full pt-28 md:pt-0 px-4">
        {!showStory && showContent && (
  <motion.button
    onClick={() => setShowStory(true)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="z-50 relative px-10 py-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/30 shadow-2xl backdrop-blur-lg text-white text-2xl md:text-3xl font-semibold tracking-tight text-center hover:bg-white/20 transition-all"
  >
    <span className="block leading-snug">{question}</span>
  </motion.button>
)}

        {showStory && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`
              transition-opacity duration-1000 ease-in-out
              max-w-[90vw] md:max-w-4xl whitespace-pre-wrap text-center md:text-left
              text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl space-y-6
              ${showContent ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {bulletPoints.map((point, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                className="text-white/90 font-light"
              >
                {point}
              </motion.p>
            ))}
            <p className="mt-6 font-bold text-amber-400 text-xl md:text-2xl">
              You belong in this field.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}