import { loadEnvConfig } from "@next/env";

import axios from "axios";

import { beforeAll, describe, expect, it } from "vitest";

loadEnvConfig(process.cwd());

describe("EmailJS integration", () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  const emailJsEndpoint = "https://api.emailjs.com/api/v1.0/email/send";

  beforeAll(() => {
    expect(serviceId).toBeTruthy();
    expect(templateId).toBeTruthy();
    expect(publicKey).toBeTruthy();
    expect(privateKey).toBeTruthy();
  });

  it("should send a real contact email through EmailJS", async () => {
    const response = await axios.post(
      emailJsEndpoint,
      {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          nameOrCompany: "QA Integration Test",
          email: "qa.integration@example.com",
          message:
            "EMAILJS REAL INTEGRATION TEST - DO NOT REPLY. " +
            "This message validates the real EmailJS server integration.",
          timestamp: new Date().toLocaleString("pt-BR"),
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 15_000,
        validateStatus: () => true,
      }
    );

    expect(
      response.status,
      `EmailJS rejected the request: ${JSON.stringify(response.data)}`
    ).toBe(200);

    expect(response.data).toBe("OK");
  }, 20_000);
});
