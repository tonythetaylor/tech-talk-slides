import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-[8px] backdrop-saturate-100 backdrop-contrast-125 p-4">
      <div className="relative w-full max-w-md rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-[20px] shadow-2xl p-6 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/80 hover:text-red-400 text-xl"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Content */}
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}