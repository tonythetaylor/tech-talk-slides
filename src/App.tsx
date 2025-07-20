import { useState } from "react";
import { slides } from "./data/slides";
import Slide from "./components/Slide";
import SlideNav from "./components/SlideNav";
import BackgroundMap from "./components/BackgroundMap";

function App() {
  const [current, setCurrent] = useState(0);
  const isTitleSlide = slides[current].isTitleSlide;

  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden">
      <BackgroundMap />

      <div className="relative z-10">
        <Slide slide={slides[current]} index={current} total={slides.length} />

        {isTitleSlide ? (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => setCurrent(1)}
              className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
            >
              Start
            </button>
          </div>
        ) : (
          <SlideNav
            onPrev={() => setCurrent((prev) => Math.max(prev - 1, 0))}
            onNext={() => setCurrent((prev) => Math.min(prev + 1, slides.length - 1))}
            isFirst={current === 0}
            isLast={current === slides.length - 1}
            currentIndex={current}
            totalSlides={slides.length}
          />
        )}
      </div>
    </div>
  );
}

export default App;