"use client";

import { useState } from "react";

import type { PortfolioProject } from "@/types/portfolio";

import PortfolioItem from "./PortfolioItem";
import ProjectModal from "./ProjectModal";

interface PortfolioTimelineProps {
  projects: readonly PortfolioProject[];
  actionLabel: string;
  modalLabels: {
    close: string;
    year: string;
    description: string;
    projectType: string;
    technologies: string;
    status: string;
    visitProject: string;
  };
}

export default function PortfolioTimeline({
  projects,
  actionLabel,
  modalLabels,
}: PortfolioTimelineProps) {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  return (
    <>
      <div className="relative">
        <div
          className="absolute left-4 top-0 h-full w-px bg-[var(--color-primary)]/30 lg:left-1/2 lg:-translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-8 lg:space-y-10">
          {projects.map((project, index) => (
            <div key={project.id} className="relative flex items-center">
              <span
                className="absolute left-4 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[var(--color-background)] bg-[var(--color-primary)] lg:left-1/2"
                aria-hidden="true"
              />

              <PortfolioItem
                project={project}
                side={index % 2 === 0 ? "left" : "right"}
                actionLabel={actionLabel}
                onOpen={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          labels={modalLabels}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
