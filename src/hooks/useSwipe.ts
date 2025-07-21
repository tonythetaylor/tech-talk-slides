import { useEffect } from "react";

const DEBUG_SWIPE = true; // Toggle this to enable/disable debug

export function useSwipe(
  ref: React.RefObject<HTMLDivElement | null>,
  onSwipe: (dir: "left" | "right" | "up" | "down") => void
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) {
      console.warn("Swipe hook failed: no element found");
      return;
    }

    if (!(el instanceof HTMLElement)) return;

    if (DEBUG_SWIPE) {
      console.log("📱 Swipe hook bound to", el);
    }

    let startX = 0;
    let startY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;

      if (DEBUG_SWIPE) {
        console.log("👆 touchStart", { startX, startY });
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length !== 1) return;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;

      const dx = endX - startX;
      const dy = endY - startY;

      let direction: "left" | "right" | "up" | "down" | null = null;

      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 50) direction = "right";
        else if (dx < -50) direction = "left";
      } else {
        if (dy > 50) direction = "down";
        else if (dy < -50) direction = "up";
      }

      if (direction) {
        if (DEBUG_SWIPE) {
          console.log(`➡️ Swipe detected: ${direction} (dx: ${dx}, dy: ${dy})`);
          window.dispatchEvent(
            new CustomEvent("swipe-debug", { detail: direction })
          );
        }
        onSwipe(direction);
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [ref, onSwipe]);
}