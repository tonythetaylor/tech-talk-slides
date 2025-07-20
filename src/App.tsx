import { slides } from "./data/slides";
import { SlideTransitionProvider, useSlideTransition } from "./context/SlideTransitionProvider";
import SlideNav from "./components/SlideNav";
import BackgroundMap from "./components/BackgroundMap";

function AppContent() {
  const {
    goToNext,
    goToPrev,
    currentIndex,
    isFirst,
    isLast,
  } = useSlideTransition();

  return (
    <>
      <SlideNav
        onPrev={goToPrev}
        onNext={goToNext}
        isFirst={isFirst}
        isLast={isLast}
        currentIndex={currentIndex}
        totalSlides={slides.length}
      />
    </>
  );
}

export default function App() {
  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden">
      <BackgroundMap />
      <SlideTransitionProvider slides={slides}>
        <AppContent />
      </SlideTransitionProvider>
    </div>
  );
}