"use client";

import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import type { PortfolioProject, ProjectModalLabels } from "@/types/portfolio";

interface ProjectModalProps {
  project: PortfolioProject;
  labels: ProjectModalLabels;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  labels,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[var(--color-surface)] p-6 shadow-2xl sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-white/5 hover:text-[var(--color-text-primary)]"
          aria-label={labels.close}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="h-5 w-5"
            aria-hidden="true"
          />
        </button>

        <div className="pr-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
            {project.year}
          </p>

          <h2
            id="project-modal-title"
            className="mt-3 text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl"
          >
            {project.title}
          </h2>
        </div>

        <div className="my-6 h-px bg-white/10" />

        <div className="space-y-6">
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              {labels.description}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              {labels.projectType}
            </h3>

            <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
              {project.type}
            </p>
          </div>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-secondary)]"
        >
          {labels.visitProject}

          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="h-4 w-4"
            aria-hidden="true"
          />
        </a>
      </section>
    </div>
  );
}
