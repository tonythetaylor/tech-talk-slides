import { useEffect, useState } from "react";
import type { SlideTypes } from "../data/slides";
import GameSlide from "./GameSlide"; 
import FormalVsSelfTaughtSlide from "./FormalVsSelfTaughtSlide";
import TitleSlide from "./TitleSlide"; // ✅ Add import at top
import FreeResourcesSlide from "./FreeResourcesSlide";

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

if (slide.isTitleSlide) {
  return (
    <TitleSlide />
  );
}

if (slide.type === "game") {
  return (
    <div className="h-screen w-screen bg-black/60 relative text-white overflow-hidden px-4">
      <GameSlide
        slide={slide}
        isTitleMoved={isTitleMoved}
        showContent={showContent}
      />
    </div>
  );
}

if (slide.title === "Formal vs Self-Taught Paths") {
  return (
    <FormalVsSelfTaughtSlide
      slide={slide}
      isTitleMoved={isTitleMoved}
      showContent={showContent}
    />
  );
}

if (slide.title === "Free Resources to Start") {
  return (
    <FreeResourcesSlide
      slide={slide}
      isTitleMoved={isTitleMoved}
      showContent={showContent}
    />
  );
}

  return (
    <div className="h-screen w-screen bg-black/60 relative text-white overflow-hidden px-4">
      {/* Title */}
      <h1
        className={`
          absolute font-bold transition-all duration-[1200ms] ease-in-out
          ${isTitleMoved
            ? 'top-6 md:top-8 left-4 md:left-8 text-left text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl'
            : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl'
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
            max-w-[90vw] md:max-w-4xl whitespace-pre-wrap text-center md:text-left
            text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
            ${showContent ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {slide.content}
        </pre>
      </div>
    </div>
  );
}