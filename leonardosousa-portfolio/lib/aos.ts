import AOS from "aos";

import "aos/dist/aos.css";

export function initializeAOS() {
  AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
    once: true,
    offset: 80,
    disable: () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  });
}
