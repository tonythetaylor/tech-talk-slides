import { useEffect, useState } from "react";

interface Props {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  currentIndex: number;
  totalSlides: number;
}

export default function SlideNav({
  onPrev,
  onNext,
  isFirst,
  isLast,
  currentIndex,
  totalSlides,
}: Props) {
  const [showCount, setShowCount] = useState(true);

  useEffect(() => {
    setShowCount(true);
    const timer = setTimeout(() => setShowCount(false), 3000); // Hide after 3s
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-50 pointer-events-none">
      <div
        className={`text-sm text-gray-400 mb-2 transition-opacity duration-500 ${
          showCount ? "opacity-100" : "opacity-0"
        }`}
      >
        Slide {currentIndex + 1} of {totalSlides}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="pointer-events-auto bg-white text-black px-4 py-2 rounded-lg disabled:opacity-40"
        >
          ◀ Prev
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          className="pointer-events-auto bg-white text-black px-4 py-2 rounded-lg disabled:opacity-40"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
