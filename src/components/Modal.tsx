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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Frosted Stained Glass Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[100px] backdrop-saturate-[250%] backdrop-brightness-[40%] backdrop-contrast-[180%]" />

      {/* Curved Glass Modal Panel */}
      <div className="relative z-10 w-full max-w-md rounded-[2rem] bg-white/10 border border-white/20 shadow-2xl backdrop-blur-[30px] p-6 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/80 hover:text-red-400 text-xl"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Modal Content */}
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}