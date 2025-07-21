import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSwipe } from "../hooks/useSwipe";

export default function SwipeDebug() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [dir, setDir] = useState<string | null>(null);

  useSwipe(boxRef, (direction) => {
    console.log("👉 Swipe detected:", direction);
    setDir(direction);
  });

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <motion.div
        ref={boxRef}
        className="swipe-container w-[80vw] h-[80vh] bg-gray-800 rounded-xl flex flex-col items-center justify-center border-4 border-dashed border-white"
        style={{ touchAction: "pan-x" }}
      >
        <h1 className="text-3xl font-bold">Swipe Me</h1>
        {dir && <p className="text-xl mt-4">Direction: {dir}</p>}
      </motion.div>
    </div>
  );
}