import { beforeEach, describe, expect, it, vi } from "vitest";

const { emailjsSendMock } = vi.hoisted(() => ({
  emailjsSendMock: vi.fn(),
}));

vi.mock("@emailjs/browser", () => ({
  default: {
    send: emailjsSendMock,
  },
}));

import { sendContactEmail } from "@/lib/emailjs";

describe("sendContactEmail", () => {
  const validContactData = {
    nameOrCompany: "Leonardo Sousa",
    email: "leonardo@example.com",
    message: "Mensagem de teste.",
  };

  beforeEach(() => {
    vi.clearAllMocks();

    vi.stubEnv("NEXT_PUBLIC_EMAILJS_SERVICE_ID", "service_test");

    vi.stubEnv("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", "template_test");

    vi.stubEnv("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", "public_key_test");

    emailjsSendMock.mockResolvedValue({
      status: 200,
      text: "OK",
    });
  });

  describe("successful submission", () => {
    it("should send a valid contact message", async () => {
      await sendContactEmail(validContactData);

      expect(emailjsSendMock).toHaveBeenCalledTimes(1);

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          nameOrCompany: "Leonardo Sousa",
          email: "leonardo@example.com",
          message: "Mensagem de teste.",
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });

    it("should include a timestamp", async () => {
      await sendContactEmail(validContactData);

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          timestamp: expect.any(String),
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });

    it("should preserve message line breaks", async () => {
      await sendContactEmail({
        ...validContactData,
        message: "Linha 1\nLinha 2\nLinha 3",
      });

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          message: "Linha 1\nLinha 2\nLinha 3",
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });
  });

  describe("sanitization", () => {
    it("should trim leading and trailing whitespace", async () => {
      await sendContactEmail({
        nameOrCompany: "  Leonardo Sousa  ",
        email: "  leonardo@example.com  ",
        message: "  Mensagem de teste.  ",
      });

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          nameOrCompany: "Leonardo Sousa",
          email: "leonardo@example.com",
          message: "Mensagem de teste.",
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });

    it("should normalize repeated whitespace in name and email", async () => {
      await sendContactEmail({
        nameOrCompany: "Leonardo    Sousa",
        email: "leonardo@example.com",
        message: "Mensagem de teste.",
      });

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          nameOrCompany: "Leonardo Sousa",
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });

    it("should remove HTML tags from contact data", async () => {
      await sendContactEmail({
        nameOrCompany: "<strong>Leonardo</strong> Sousa",
        email: "leonardo@example.com",
        message: "Olá <strong>mundo</strong>",
      });

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          nameOrCompany: "Leonardo Sousa",
          message: "Olá mundo",
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });

    it("should remove control characters from contact data", async () => {
      await sendContactEmail({
        nameOrCompany: "Leonardo\u0000 Sousa",
        email: "leonardo@example.com",
        message: "Mensagem\u0001 de teste.",
      });

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          nameOrCompany: "Leonardo Sousa",
          message: "Mensagem de teste.",
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });

    it("should normalize Unicode characters", async () => {
      await sendContactEmail({
        nameOrCompany: "Leonardo \uFF33ousa",
        email: "leonardo@example.com",
        message: "Mensagem de teste.",
      });

      expect(emailjsSendMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("required data validation", () => {
    it("should reject empty contact data", async () => {
      await expect(
        sendContactEmail({
          nameOrCompany: "",
          email: "",
          message: "",
        })
      ).rejects.toThrow("Invalid contact form data.");

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });

    it("should reject a name that becomes empty after sanitization", async () => {
      await expect(
        sendContactEmail({
          nameOrCompany: "<strong></strong>",
          email: "leonardo@example.com",
          message: "Mensagem válida.",
        })
      ).rejects.toThrow("Invalid contact form data.");

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });

    it("should reject an email that becomes empty after sanitization", async () => {
      await expect(
        sendContactEmail({
          nameOrCompany: "Leonardo Sousa",
          email: "<strong></strong>",
          message: "Mensagem válida.",
        })
      ).rejects.toThrow("Invalid contact form data.");

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });

    it("should reject a message that becomes empty after sanitization", async () => {
      await expect(
        sendContactEmail({
          nameOrCompany: "Leonardo Sousa",
          email: "leonardo@example.com",
          message: "<strong></strong>",
        })
      ).rejects.toThrow("Invalid contact form data.");

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });

    it("should reject a whitespace-only message", async () => {
      await expect(
        sendContactEmail({
          nameOrCompany: "Leonardo Sousa",
          email: "leonardo@example.com",
          message: "     ",
        })
      ).rejects.toThrow("Invalid contact form data.");

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });
  });

  describe("email validation", () => {
    it("should accept a valid email address", async () => {
      await sendContactEmail({
        ...validContactData,
        email: "leonardo.sousa+portfolio@example.com",
      });

      expect(emailjsSendMock).toHaveBeenCalledTimes(1);
    });

    it("should reject an email without @", async () => {
      await expect(
        sendContactEmail({
          ...validContactData,
          email: "leonardo.example.com",
        })
      ).rejects.toThrow("Invalid email address.");

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });

    it("should reject an email without domain", async () => {
      await expect(
        sendContactEmail({
          ...validContactData,
          email: "leonardo@",
        })
      ).rejects.toThrow("Invalid email address.");

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });

    it("should reject an email without domain extension", async () => {
      await expect(
        sendContactEmail({
          ...validContactData,
          email: "leonardo@example",
        })
      ).rejects.toThrow("Invalid email address.");

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });

    it("should reject an email containing whitespace", async () => {
      await expect(
        sendContactEmail({
          ...validContactData,
          email: "leonardo @example.com",
        })
      ).rejects.toThrow("Invalid email address.");

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });
  });

  describe("length limits", () => {
    it("should preserve a name at the maximum length", async () => {
      const name = "A".repeat(120);

      await sendContactEmail({
        ...validContactData,
        nameOrCompany: name,
      });

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          nameOrCompany: name,
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });

    it("should truncate a name above the maximum length", async () => {
      const name = "A".repeat(200);

      await sendContactEmail({
        ...validContactData,
        nameOrCompany: name,
      });

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          nameOrCompany: "A".repeat(120),
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });

    it("should preserve a message at the maximum length", async () => {
      const message = "A".repeat(5000);

      await sendContactEmail({
        ...validContactData,
        message,
      });

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          message,
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });

    it("should truncate a message above the maximum length", async () => {
      const message = "A".repeat(6000);

      await sendContactEmail({
        ...validContactData,
        message,
      });

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.objectContaining({
          message: "A".repeat(5000),
        }),
        {
          publicKey: "public_key_test",
        }
      );
    });

    it("should reject an email longer than the maximum length", async () => {
      const email = `${"a".repeat(250)}@example.com`;

      await expect(
        sendContactEmail({
          ...validContactData,
          email,
        })
      ).rejects.toThrow("Invalid email address.");

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });
  });

  describe("EmailJS configuration", () => {
    it("should reject missing service ID", async () => {
      vi.stubEnv("NEXT_PUBLIC_EMAILJS_SERVICE_ID", "");

      await expect(sendContactEmail(validContactData)).rejects.toThrow(
        "EmailJS configuration is incomplete."
      );

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });

    it("should reject missing template ID", async () => {
      vi.stubEnv("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", "");

      await expect(sendContactEmail(validContactData)).rejects.toThrow(
        "EmailJS configuration is incomplete."
      );

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });

    it("should reject missing public key", async () => {
      vi.stubEnv("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", "");

      await expect(sendContactEmail(validContactData)).rejects.toThrow(
        "EmailJS configuration is incomplete."
      );

      expect(emailjsSendMock).not.toHaveBeenCalled();
    });
  });

  describe("EmailJS provider failure", () => {
    it("should propagate EmailJS errors", async () => {
      const emailjsError = new Error("EmailJS request failed");

      emailjsSendMock.mockRejectedValueOnce(emailjsError);

      await expect(sendContactEmail(validContactData)).rejects.toThrow(
        "EmailJS request failed"
      );

      expect(emailjsSendMock).toHaveBeenCalledTimes(1);
    });

    it("should not retry automatically after EmailJS failure", async () => {
      emailjsSendMock.mockRejectedValueOnce(
        new Error("EmailJS request failed")
      );

      await expect(sendContactEmail(validContactData)).rejects.toThrow(
        "EmailJS request failed"
      );

      expect(emailjsSendMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("EmailJS payload", () => {
    it("should send only sanitized values and timestamp", async () => {
      await sendContactEmail({
        nameOrCompany: "  Leonardo   Sousa  ",
        email: "  leonardo@example.com  ",
        message: "  Olá <strong>mundo</strong>  ",
      });

      const [, , params] = emailjsSendMock.mock.calls[0];

      expect(params).toEqual({
        nameOrCompany: "Leonardo Sousa",
        email: "leonardo@example.com",
        message: "Olá mundo",
        timestamp: expect.any(String),
      });
    });

    it("should use the configured EmailJS credentials", async () => {
      await sendContactEmail(validContactData);

      expect(emailjsSendMock).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        expect.any(Object),
        {
          publicKey: "public_key_test",
        }
      );
    });
  });
});
