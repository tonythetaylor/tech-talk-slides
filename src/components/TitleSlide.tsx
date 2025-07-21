import { QRCodeCanvas } from "qrcode.react";
import bitLogo from "/logo.png";

export default function TitleSlide() {
  return (
    <div className="h-screen w-screen bg-black/90 text-white flex flex-col items-center justify-center px-4 relative">
      {/* Flicker Keyframes */}
      <style>
        {`
          @keyframes flicker {
            0%, 18%, 22%, 25%, 53%, 57%, 100% {
              opacity: 1;
              text-shadow: 0 0 10px rgba(255, 255, 0, 0.8);
            }
            20%, 23%, 55% {
              opacity: 0.4;
              text-shadow: none;
            }
          }
        `}
      </style>

      {/* Static Centered Logo */}
      <img
        src={bitLogo}
        alt="BIT Talk Logo"
        className="w-48 md:w-64 h-auto mb-8 drop-shadow-2xl"
      />

      {/* Main Title with Flickering P */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center">
        Your Path, Your{" "}
        <span className="inline-block animate-[flicker_2.5s_infinite] text-yellow-400">
          P
        </span>
        ower
      </h1>

      {/* Author */}
      <p className="mt-8 text-sm md:text-lg font-medium text-center text-white/50">
        Anthony Taylor @TaylorTheory
      </p>

      {/* QR Code in Bottom Right */}
      <div className="absolute bottom-6 right-16 text-center">
        <QRCodeCanvas
          value="https://tonythetaylor.github.io/tech-talk-slides/"
          size={96}
          bgColor="#000000"
          fgColor="#ffffff"
        />
        <p className="text-xs text-white/70 mt-2">Scan to view slides</p>
      </div>
    </div>
  );
}
