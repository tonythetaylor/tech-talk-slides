import React from "react";

interface Props {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function SlideNav({ onPrev, onNext, isFirst, isLast }: Props) {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="bg-white text-black px-4 py-2 rounded-lg disabled:opacity-40"
      >
        ◀ Prev
      </button>
      <button
        onClick={onNext}
        disabled={isLast}
        className="bg-white text-black px-4 py-2 rounded-lg disabled:opacity-40"
      >
        Next ▶
      </button>
    </div>
  );
}