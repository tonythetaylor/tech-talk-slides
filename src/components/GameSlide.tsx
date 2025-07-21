import { useState } from "react";
import { FaDollarSign, FaInfoCircle } from "react-icons/fa";
import type { SlideTypes } from "../data/slides";

interface Props {
  slide: SlideTypes;
  isTitleMoved: boolean;
  showContent: boolean;
}

// Fixed color mappings for roles
const roleColors = [
  { text: "text-blue-400", bg: "bg-blue-800/90" },
  { text: "text-green-400", bg: "bg-green-800/90" },
  { text: "text-red-400", bg: "bg-red-800/90" },
  { text: "text-yellow-400", bg: "bg-yellow-700/90" },
  { text: "text-purple-400", bg: "bg-purple-800/90" },
];

export default function GameSlide({ slide, isTitleMoved, showContent }: Props) {
  const { title, content, roles = [] } = slide;
  const [revealedRoles, setRevealedRoles] = useState<{ [key: string]: boolean }>({});
  const [showDescription, setShowDescription] = useState<string | null>(null);

  return (
    <div className="h-screen w-screen bg-black/60 relative text-white overflow-hidden px-4">
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
        {title}
      </h1>

      {/* Scrollable Content */}
      <div className="absolute inset-0 top-40 bottom-32 overflow-y-auto px-4 pb-10 z-50">
        <div
          className={`
            transition-opacity duration-1000 ease-in-out
            max-w-[90vw] md:max-w-4xl mx-auto
            ${showContent ? "opacity-100" : "opacity-0"}
          `}
        >
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-6 text-center">
            {content}
          </p>

          <div className="space-y-4">
            {roles.map((role, index) => {
              const color = roleColors[index % roleColors.length];
              const isActive = showDescription === role.title;

              return (
                <div
                  key={role.title}
                  className="bg-white/10 p-4 rounded-xl flex justify-between items-center"
                >
                  <span className="text-white text-lg">{role.title}</span>
                  <div className="flex space-x-3 items-center">
                    {/* Info Button */}
                    <button
                      onClick={() =>
                        setShowDescription(isActive ? null : role.title)
                      }
                      className={`transition duration-200 ease-in-out ${
                        isActive ? "scale-110" : ""
                      }`}
                    >
                      <FaInfoCircle
                        className={`transition ${
                          isActive ? color.text : "text-white hover:text-blue-300"
                        }`}
                      />
                    </button>

                    {/* Reveal Salary Button */}
                    <button
                      onClick={() =>
                        setRevealedRoles((prev) => ({
                          ...prev,
                          [role.title]: !prev[role.title],
                        }))
                      }
                    >
                      <FaDollarSign className="text-white hover:text-green-300" />
                    </button>

                    {revealedRoles[role.title] && (
                      <span className="text-green-400 text-sm">{role.salary}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Description Block */}
          {showDescription &&
            (() => {
              const index = roles.findIndex((r) => r.title === showDescription);
              const color = roleColors[index % roleColors.length];
              return (
                <div
                  className={`mt-4 ${color.bg} p-4 rounded-lg text-sm text-white max-w-lg mx-auto`}
                >
                  <strong>{showDescription}</strong>:{" "}
                  {roles.find((r) => r.title === showDescription)?.description}
                </div>
              );
            })()}
        </div>
      </div>
    </div>
  );
}