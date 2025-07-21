import { motion } from "framer-motion";

interface Props {
  isTitleMoved: boolean;
  showContent: boolean;
  slide: {
    title?: string;
    content: string;
  };
}

export default function ResourceSlide({
  isTitleMoved,
  showContent,
  slide,
}: Props) {
  const { title } = slide;

  return (
    <div className="h-screen w-full text-white bg-gradient-to-br from-zinc-950 via-black/60 to-neutral-900 px-4 relative overflow-hidden">
      {/* Title */}
      <motion.h1
        className={`
          absolute font-extrabold transition-all duration-[1200ms] ease-in-out tracking-tight z-10
          ${
            isTitleMoved
              ? "top-6 md:top-8 left-4 md:left-8 text-left text-4xl md:text-5xl lg:text-6xl"
              : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-5xl md:text-6xl lg:text-7xl"
          }
        `}
        style={{ lineHeight: "1.2" }}
      >
        {title}
      </motion.h1>

      {/* Main Content */}
      {showContent && (
        <div className="flex items-center justify-center h-screen w-full">
          <div className="w-full max-w-5xl px-4 text-center space-y-16">
            {/* GitHub Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-3"
            >
              <p className="text-xl md:text-2xl text-white/70">
                Full resource list + tools:
              </p>
  <motion.a
  href="https://github.com/tonythetaylor"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="inline-block text-2xl md:text-3xl font-bold text-amber-400 underline underline-offset-8 hover:text-white hover:scale-105 transition-transform duration-300 ease-in-out"
>
  github.com/tonythetaylor
</motion.a>
            </motion.div>

            {/* Photo Comparison */}
            <motion.div
              className="flex flex-col md:flex-row justify-center items-center gap-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-center space-y-4">
                <img
                  src="pics/the_dreamer.png"
                  alt="Teen Anthony"
                  className="w-44 h-44 md:w-64 md:h-64 object-cover rounded-3xl shadow-xl border border-white/10"
                />
                <p className="text-lg font-semibold text-white/80">Young Me</p>
                <p className="text-sm text-white/50 italic">
                  High School Coder
                </p>
              </div>

              <div className="text-center space-y-4">
                <img
                  src="pics/the_dream.png"
                  alt="Current Anthony"
                  className="w-44 h-44 md:w-64 md:h-64 object-cover rounded-3xl shadow-xl border border-white/10"
                />
                <p className="text-lg font-semibold text-white/80">
                  Current Me
                </p>
                <p className="text-sm text-white/50 italic">
                  Still building the dream.
                </p>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-3xl md:text-4xl font-black text-amber-400 drop-shadow-lg italic"
            >
              "Keep moving forward!"
            </motion.p>
          </div>
        </div>
      )}
    </div>
  );
}
