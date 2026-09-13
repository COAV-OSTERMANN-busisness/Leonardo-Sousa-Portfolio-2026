"use client";

import { useState, type FormEvent } from "react";

import { getMessages } from "@/i18n";
import { sendContactEmail } from "@/lib/emailjs";

import { LegalModal } from "@/components/Legal";

type ContactFormMessages = ReturnType<typeof getMessages>["contact"]["form"];

type ContactTermsMessages = ReturnType<typeof getMessages>["legal"]["terms"];

interface ContactFormProps {
  messages: ContactFormMessages;
  terms: ContactTermsMessages;
}

export default function ContactForm({ messages, terms }: ContactFormProps) {
  const [nameOrCompany, setNameOrCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");

  const [termsOpen, setTermsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading || website.trim()) {
      return;
    }

    setStatus("idle");
    setTermsOpen(true);
  };

  const handleConsent = async () => {
    if (loading) {
      return;
    }

    setTermsOpen(false);
    setLoading(true);
    setStatus("idle");

    try {
      await sendContactEmail({
        nameOrCompany,
        email,
        message,
      });

      setStatus("success");

      setNameOrCompany("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleTermsClose = () => {
    if (loading) {
      return;
    }

    setTermsOpen(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-white/10 bg-[var(--color-surface)] p-6 sm:p-8"
        data-aos="fade-left"
      >
        <div className="space-y-5">
          <input
            type="text"
            name="website"
            value={website}
            onChange={(event) => {
              setWebsite(event.target.value);
            }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px overflow-hidden"
          />

          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
            >
              {messages.name}
            </label>

            <input
              id="contact-name"
              type="text"
              value={nameOrCompany}
              onChange={(event) => {
                setNameOrCompany(event.target.value);
                setStatus("idle");
              }}
              placeholder={messages.namePlaceholder}
              maxLength={120}
              required
              autoComplete="name"
              className="w-full rounded-lg border border-white/10 bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary)]"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
            >
              {messages.email}
            </label>

            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setStatus("idle");
              }}
              placeholder={messages.emailPlaceholder}
              maxLength={254}
              required
              autoComplete="email"
              inputMode="email"
              className="w-full rounded-lg border border-white/10 bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary)]"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
            >
              {messages.message}
            </label>

            <textarea
              id="contact-message"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                setStatus("idle");
              }}
              placeholder={messages.messagePlaceholder}
              maxLength={5000}
              required
              rows={6}
              className="w-full resize-y rounded-lg border border-white/10 bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary)]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--color-secondary)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? messages.sending : messages.send}
          </button>

          {status === "success" && (
            <p
              role="status"
              className="rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300"
            >
              {messages.success}
            </p>
          )}

          {status === "error" && (
            <p
              role="alert"
              className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {messages.error}
            </p>
          )}
        </div>
      </form>

      <LegalModal
        open={termsOpen}
        mode="consent"
        legalDocument={terms}
        onClose={handleTermsClose}
        onAccept={handleConsent}
      />
    </>
  );
}
