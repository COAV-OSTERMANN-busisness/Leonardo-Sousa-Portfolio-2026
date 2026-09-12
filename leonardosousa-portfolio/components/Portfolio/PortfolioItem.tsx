import type { PortfolioProject } from "@/types/portfolio";
import PortfolioCard from "./PortfolioCard";

interface PortfolioItemProps {
  project: PortfolioProject;
  side: "left" | "right";
  actionLabel: string;
  onOpen: (project: PortfolioProject) => void;
}

export default function PortfolioItem({
  project,
  side,
  actionLabel,
  onOpen,
}: PortfolioItemProps) {
  return (
    <div
      className={`relative flex w-full lg:w-1/2 ${
        side === "left"
          ? "lg:justify-start lg:pr-10"
          : "lg:ml-auto lg:justify-end lg:pl-10"
      }`}
      data-aos={side === "left" ? "fade-right" : "fade-left"}
    >
      <PortfolioCard
        year={project.year}
        title={project.title}
        actionLabel={actionLabel}
        onOpen={() => onOpen(project)}
      />
    </div>
  );
}
