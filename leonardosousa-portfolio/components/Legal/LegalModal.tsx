"use client";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import LegalSection from "./LegalSection";

interface LegalSectionMessage {
  id: string;
  title: string;
  content: string;
}

interface LegalDocument {
  title: string;
  sections: readonly LegalSectionMessage[];
  consent: string;
  accept: string;
  cancel: string;
  close: string;
}

type LegalModalMode = "consent" | "informational";

interface LegalModalProps {
  open: boolean;
  mode: LegalModalMode;
  legalDocument: LegalDocument;
  onClose: () => void;
  onAccept?: () => void;
}

export default function LegalModal({
  open,
  mode,
  legalDocument,
  onClose,
  onAccept,
}: LegalModalProps) {
  const [accepted, setAccepted] = useState(false);

  const isConsentMode = mode === "consent";

  useEffect(() => {
    if (!open) {
      setAccepted(false);
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleAccept = () => {
    if (!accepted || !onAccept) {
      return;
    }

    onAccept();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--color-surface)] shadow-2xl">
        <header className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
          <h2
            id="legal-modal-title"
            className="pr-6 text-xl font-bold text-[var(--color-text-primary)]"
          >
            {legalDocument.title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-light)] hover:text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            aria-label={legalDocument.close}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </header>

        <div className="overflow-y-auto px-6 py-6 sm:px-8">
          <div className="space-y-7">
            {legalDocument.sections.map((section) => (
              <LegalSection
                key={section.id}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>

          {isConsentMode && (
            <label className="mt-8 flex cursor-pointer items-start gap-3 rounded-lg border border-white/10 bg-[var(--color-background)] p-4">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(event) =>
                  setAccepted(event.target.checked)
                }
                className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
              />

              <span className="text-sm leading-6 text-[var(--color-text-secondary)]">
                {legalDocument.consent}
              </span>
            </label>
          )}
        </div>

        <footer className="flex shrink-0 flex-col-reverse gap-3 border-t border-white/10 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">
          {isConsentMode ? (
            <>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                {legalDocument.cancel}
              </button>

              <button
                type="button"
                disabled={!accepted}
                onClick={handleAccept}
                className="rounded-lg bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {legalDocument.accept}
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              {legalDocument.close}
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}