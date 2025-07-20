import { useEffect, useState } from "react";
import type { SlideTypes } from "../data/slides";

interface Props {
  slide: SlideTypes;
  index?: number;
  total?: number;
}

export default function Slide({ slide }: Props) {
  const [phase, setPhase] = useState<"initial" | "titleMoved" | "content">("initial");

  useEffect(() => {
    setPhase("initial");

    const titleMoveTimer = setTimeout(() => setPhase("titleMoved"), 4000);
    const contentTimer = setTimeout(() => setPhase("content"), 5000);

    return () => {
      clearTimeout(titleMoveTimer);
      clearTimeout(contentTimer);
    };
  }, [slide]);

  const isTitleMoved = phase === "titleMoved" || phase === "content";
  const showContent = phase === "content";

  return (
    <div className="h-screen w-screen bg-black/60 relative text-white overflow-hidden px-4">
      {/* Title */}
      <h1
        className={`
          absolute font-bold transition-all duration-[1200ms] ease-in-out
          ${isTitleMoved
            ? 'top-6 md:top-8 left-4 md:left-8 text-left text-2xl md:text-4xl'
            : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl md:text-5xl'
          }
        `}
        style={{
          lineHeight: '1.2',
        }}
      >
        {slide.title}
      </h1>

      {/* Content */}
      <div className="flex items-center justify-center h-full pt-28 md:pt-0 px-4">
        <pre
          className={`
            transition-opacity duration-1000 ease-in-out
            max-w-[90vw] md:max-w-xl text-base md:text-lg whitespace-pre-wrap text-center md:text-left
            ${showContent ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {slide.content}
        </pre>
      </div>
    </div>
  );
}