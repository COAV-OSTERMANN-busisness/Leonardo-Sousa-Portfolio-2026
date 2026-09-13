import { loadEnvConfig } from "@next/env";
import { beforeEach, describe, expect, it, vi } from "vitest";

loadEnvConfig(process.cwd());

const emailjsSendMock = vi.hoisted(() =>
  vi.fn().mockResolvedValue({
    status: 200,
    text: "OK",
  })
);

vi.mock("@emailjs/browser", () => ({
  default: {
    send: emailjsSendMock,
  },
}));

describe("EmailJS integration", () => {
  beforeEach(() => {
    emailjsSendMock.mockClear();
  });

  it("should send a valid contact email through EmailJS", async () => {
    const { sendContactEmail } = await import("@/lib/emailjs");

    await expect(
      sendContactEmail({
        nameOrCompany: "QA Integration Test",
        email: "qa.integration@example.com",
        message: "EMAILJS INTEGRATION TEST - DO NOT SEND A REAL EMAIL.",
      })
    ).resolves.toBeUndefined();

    expect(emailjsSendMock).toHaveBeenCalledTimes(1);

    expect(emailjsSendMock).toHaveBeenCalledWith(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      expect.objectContaining({
        nameOrCompany: "QA Integration Test",
        email: "qa.integration@example.com",
        message: "EMAILJS INTEGRATION TEST - DO NOT SEND A REAL EMAIL.",
        timestamp: expect.any(String),
      }),
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }
    );
  });
});
