import { useState } from "react";
import { slides } from "./data/slides";
import Slide from "./components/Slide";
import SlideNav from "./components/SlideNav";
import BackgroundMap from "./components/BackgroundMap";

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden">
      {/* Interactive, dimmed map background */}
      <BackgroundMap />

      {/* Slide content over the map */}
      <div className="relative z-10">
        <Slide slide={slides[current]} index={current} total={slides.length} />
        <SlideNav
          onPrev={() => setCurrent((prev) => Math.max(prev - 1, 0))}
          onNext={() => setCurrent((prev) => Math.min(prev + 1, slides.length - 1))}
          isFirst={current === 0}
          isLast={current === slides.length - 1}
          currentIndex={current}
          totalSlides={slides.length}
        />
      </div>
    </div>
  );
}

export default App;