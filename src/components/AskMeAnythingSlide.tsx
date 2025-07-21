import { motion } from "framer-motion";

interface Props {
  isTitleMoved: boolean;
  showContent: boolean;
  slide: {
    title?: string;
    content: string;
  };
}

export default function AskMeAnythingSlide({
  isTitleMoved,
  showContent,
  slide,
}: Props) {
  const { title, content } = slide;

  return (
    <div className="min-h-screen w-full text-white relative overflow-y-auto px-6 py-10 bg-black/60">
      {/* Title */}
      <motion.h1
        className={`
          absolute font-bold transition-all duration-[1200ms] ease-in-out tracking-tight z-10
          ${isTitleMoved
            ? "top-6 md:top-8 left-4 md:left-8 text-left text-3xl md:text-5xl lg:text-6xl"
            : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl md:text-6xl lg:text-7xl"
          }
        `}
        style={{ lineHeight: "1.2" }}
      >
        {title}
      </motion.h1>

      {/* Centered Bold Content */}
      {showContent && (
        <div className="flex items-center justify-center h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="z-20 w-full max-w-5xl px-4 md:px-8"
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight text-amber-300 drop-shadow-xl">
              {content}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}