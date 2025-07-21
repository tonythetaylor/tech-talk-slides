import { useState } from "react";
import {
  FaChevronDown,
  FaCheckCircle,
  FaExclamationTriangle,
  FaGraduationCap,
  FaBrain,
} from "react-icons/fa";
import Modal from "../components/Modal"; // 👈 create this if not already there
import type { SlideTypes } from "../data/slides";
import React from "react";

interface Props {
  slide: SlideTypes;
  isTitleMoved: boolean;
  showContent: boolean;
}

export default function FormalVsSelfTaughtSlide({
  slide,
  isTitleMoved,
  showContent,
}: Props) {
  const { title } = slide;
  const rows = slide.tableData ?? [];

  const [expandedCells, setExpandedCells] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCell = (key: string) =>
    setExpandedCells((prev) => ({ ...prev, [key]: !prev[key] }));

  const [selected, setSelected] = useState<null | {
    type: string;
    label: string;
    main: string;
    pros: string;
    cons: string;
  }>(null);

  const openModal = (data: {
    type: string;
    label: string;
    main: string;
    pros: string;
    cons: string;
  }) => setSelected(data);

  const closeModal = () => setSelected(null);

  return (
    <div className="h-screen w-screen bg-black/80 text-white relative px-4 overflow-hidden">
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

      {/* Table */}
      <div className="absolute inset-0 top-40 bottom-32 overflow-y-auto px-4 pb-10 z-50 flex items-center justify-center">
        <div
          className={`w-full max-w-6xl transition-opacity duration-1000 ease-in-out ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block w-full overflow-x-auto">
              <table className="min-w-[640px] w-full text-left text-white border-collapse">
                <thead className="bg-white/10 backdrop-blur-lg">
                  <tr>
                    <th className="p-4 border-b border-white/10 text-lg">
                      Path
                    </th>
                    <th className="p-4 border-b border-white/10 text-lg">
                      Formal Education
                    </th>
                    <th className="p-4 border-b border-white/10 text-lg">
                      Self-Taught
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(({ label, formal, self }, idx) => {
                    const formalKey = `formal-${idx}`;
                    const selfKey = `self-${idx}`;
                    const isFormalOpen = expandedCells[formalKey];
                    const isSelfOpen = expandedCells[selfKey];

                    return (
                      <tr
                        key={idx}
                        className={`transition-colors duration-300 ${
                          idx % 2 === 0 ? "bg-white/5" : "bg-white/0"
                        } hover:bg-white/10`}
                      >
                        <td className="p-4 border-t border-white/10 align-top font-semibold text-base">
                          {label}
                        </td>

                        <td
                          onClick={() => toggleCell(formalKey)}
                          className="p-4 border-t border-white/10 text-sm align-top cursor-pointer group"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-white">
                              {formal.main}
                            </span>
                            <FaChevronDown
                              className={`ml-2 transition-transform duration-300 ${
                                isFormalOpen
                                  ? "rotate-180 text-green-400"
                                  : "rotate-0 text-white/70"
                              }`}
                            />
                          </div>
                          {isFormalOpen && (
                            <div className="space-y-1 mt-2 transition-all duration-500 ease-in-out">
                              <div className="flex items-center text-green-400">
                                <FaCheckCircle className="mr-2" />
                                <span>{formal.pros}</span>
                              </div>
                              <div className="flex items-center text-red-400">
                                <FaExclamationTriangle className="mr-2" />
                                <span>{formal.cons}</span>
                              </div>
                            </div>
                          )}
                        </td>

                        <td
                          onClick={() => toggleCell(selfKey)}
                          className="p-4 border-t border-white/10 text-sm align-top cursor-pointer group"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-white">
                              {self.main}
                            </span>
                            <FaChevronDown
                              className={`ml-2 transition-transform duration-300 ${
                                isSelfOpen
                                  ? "rotate-180 text-green-400"
                                  : "rotate-0 text-white/70"
                              }`}
                            />
                          </div>
                          {isSelfOpen && (
                            <div className="space-y-1 mt-2 transition-all duration-500 ease-in-out">
                              <div className="flex items-center text-green-400">
                                <FaCheckCircle className="mr-2" />
                                <span>{self.pros}</span>
                              </div>
                              <div className="flex items-center text-red-400">
                                <FaExclamationTriangle className="mr-2" />
                                <span>{self.cons}</span>
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Grid View */}
            <div className="md:hidden grid grid-cols-2 gap-4 p-2">
              {rows.map(({ label, formal, self }, idx) => {
                return (
                  <React.Fragment key={idx}>
                    {/* Formal Tile */}
                    <div
                      onClick={() =>
                        openModal({
                          type: "Formal",
                          label,
                          main: formal.main,
                          pros: formal.pros,
                          cons: formal.cons,
                        })
                      }
                      className="bg-white/5 border border-white/20 rounded-xl p-4 flex flex-col items-center justify-center text-white cursor-pointer"
                    >
                      <FaGraduationCap className="text-3xl mb-2 text-green-400" />
                      <div className="text-sm font-bold text-center">
                        {formal.main}
                      </div>
                    </div>

                    {/* Self-Taught Tile */}
                    <div
                      onClick={() =>
                        openModal({
                          type: "Self-Taught",
                          label,
                          main: self.main,
                          pros: self.pros,
                          cons: self.cons,
                        })
                      }
                      className="bg-white/5 border border-white/20 rounded-xl p-4 flex flex-col items-center justify-center text-white cursor-pointer"
                    >
                      <FaBrain className="text-3xl mb-2 text-yellow-400" />
                      <div className="text-sm font-bold text-center">
                        {self.main}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}

              {/* Modal Component */}
              {selected && (
                <Modal onClose={closeModal}>
                  <div className="space-y-3">
                    <div className="text-lg font-bold text-white">
                      {selected.label} – {selected.type}
                    </div>
                    <div className="text-sm text-white">
                      <span className="font-medium">Main:</span> {selected.main}
                    </div>
                    <div className="flex items-start gap-2 text-green-400">
                      <FaCheckCircle className="mt-1" />
                      <span>{selected.pros}</span>
                    </div>
                    <div className="flex items-start gap-2 text-red-400">
                      <FaExclamationTriangle className="mt-1" />
                      <span>{selected.cons}</span>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
