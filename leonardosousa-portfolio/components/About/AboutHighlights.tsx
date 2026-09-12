import type { AboutMessages } from "@/types/about";

import AboutHighlight from "./AboutHighlight";

interface AboutHighlightsProps {
  highlights: AboutMessages["highlights"];
}

export default function AboutHighlights({
  highlights,
}: AboutHighlightsProps) {
  return (
    <div
      className="grid gap-4 sm:grid-cols-2"
      data-aos="fade-left"
    >
      {Object.entries(highlights).map(([key, highlight]) => (
        <AboutHighlight
          key={key}
          highlight={highlight}
        />
      ))}
    </div>
  );
}