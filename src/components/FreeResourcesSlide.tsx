import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FastAverageColor } from "fast-average-color";
import type { SlideTypes } from "../data/slides";

interface Props {
  slide: SlideTypes;
  isTitleMoved: boolean;
  showContent: boolean;
}

export default function FreeResourcesSlide({
  slide,
  isTitleMoved,
  showContent,
}: Props) {
  const resources = slide.resources ?? [];

  return (
    <div className="h-screen w-screen bg-black/80 relative text-white px-4 overflow-hidden flex flex-col items-center">
      {/* Title */}
      <h1
        className={`
          absolute font-bold transition-all duration-[1200ms] ease-in-out z-20
          ${
            isTitleMoved
              ? "top-6 md:top-8 left-4 md:left-8 text-left text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl"
              : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl"
          }
        `}
        style={{ lineHeight: "1.2" }}
      >
        {slide.title}
      </h1>

      {/* Grid */}
      <motion.div
        className={`
          mt-40 md:mt-48 flex-1 flex items-start justify-center w-full
          transition-opacity duration-1000 ease-in-out
          ${showContent ? "opacity-100" : "opacity-0"}
        `}
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 w-full max-w-7xl px-2">
          {resources.map((resource) => (
            <ResourceTile key={resource.name} resource={resource} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

interface Resource {
  name: string;
  logo?: string;
  url: string;
}

function ResourceTile({ resource }: { resource: Resource }) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [bgColor, setBgColor] = useState("rgba(255,255,255,0.3)");

  useEffect(() => {
    const fac = new FastAverageColor();
    if (imgRef.current) {
      fac.getColorAsync(imgRef.current)
        .then((color) => {
          setBgColor(`${color.rgba}`);
        })
        .catch(() => {
          setBgColor("rgba(255,255,255,0.2)");
        });
    }
  }, []);

  return (
    <div className="flex flex-col items-center space-y-1 text-xs md:text-sm text-center">
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex z-50 justify-center items-center w-20 h-20 md:w-24 md:h-24 rounded-xl
                   hover:scale-105 transition-all duration-300
                   backdrop-blur-xl border border-white/20 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2),_0_4px_30px_rgba(0,0,0,0.3)]"
        style={{ backgroundColor: bgColor }}
      >
        {resource.logo && (
          <img
            ref={imgRef}
            src={resource.logo}
            alt={resource.name}
            crossOrigin="anonymous"
            className="max-w-10 max-h-10 md:max-w-16 md:max-h-16 object-contain"
          />
        )}
      </a>
      <span className="w-full truncate px-1">{resource.name}</span>
    </div>
  );
}