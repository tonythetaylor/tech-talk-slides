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

    const titleMoveTimer = setTimeout(() => {
      setPhase("titleMoved");
    }, 4000); // show title centered for 4s

    const contentTimer = setTimeout(() => {
      setPhase("content");
    }, 5000); // fade in content at 5s

    return () => {
      clearTimeout(titleMoveTimer);
      clearTimeout(contentTimer);
    };
  }, [slide]);

  const isTitleMoved = phase === "titleMoved" || phase === "content";
  const showContent = phase === "content";

  return (
    <div className="h-screen w-screen bg-black/60 relative text-white px-4 overflow-hidden">
      {/* Title */}
      <h1
        className={`
          absolute transition-all duration-[1200ms] ease-in-out
          text-4xl md:text-5xl font-bold
          ${isTitleMoved
            ? 'top-8 left-8 text-left text-2xl md:text-3xl'
            : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'
          }
        `}
      >
        {slide.title}
      </h1>

      {/* Content */}
      <div className="flex items-center justify-center h-full">
        <pre
          className={`
            transition-opacity duration-1000 max-w-xl text-lg whitespace-pre-wrap text-center
            ${showContent ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {slide.content}
        </pre>
      </div>
    </div>
  );
}