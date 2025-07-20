import { useState } from "react";
import { slides } from "./data/slides";
import Slide from "./components/Slide";
import SlideNav from "./components/SlideNav";

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative h-screen w-screen bg-black text-white">
      <Slide slide={slides[current]} index={current} total={slides.length} />
      <SlideNav
        onPrev={() => setCurrent((prev) => Math.max(prev - 1, 0))}
        onNext={() =>
          setCurrent((prev) => Math.min(prev + 1, slides.length - 1))
        }
        isFirst={current === 0}
        isLast={current === slides.length - 1}
        currentIndex={current}
        totalSlides={slides.length}
      />
    </div>
  );
}

export default App;
