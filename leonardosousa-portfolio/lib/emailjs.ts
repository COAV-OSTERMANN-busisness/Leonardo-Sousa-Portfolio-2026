import emailjs from "@emailjs/browser";

import type {
  ContactFormData,
  EmailJSConfig,
  EmailJSParams,
} from "@/types/emailjs";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

function sanitizeText(value: string, maxLength: number): string {
  return value
    .normalize("NFKC")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function sanitizeMessage(value: string): string {
  return value
    .normalize("NFKC")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, MAX_MESSAGE_LENGTH);
}

function validateEmail(email: string): boolean {
  return (
    email.length <= MAX_EMAIL_LENGTH && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

function getEmailJSConfig(): EmailJSConfig {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS configuration is incomplete.");
  }

  return {
    serviceId,
    templateId,
    publicKey,
  };
}

function prepareContactData(data: ContactFormData): EmailJSParams {
  const nameOrCompany = sanitizeText(data.nameOrCompany, MAX_NAME_LENGTH);

  const email = sanitizeText(data.email, MAX_EMAIL_LENGTH);

  const message = sanitizeMessage(data.message);

  if (!nameOrCompany || !email || !message) {
    throw new Error("Invalid contact form data.");
  }

  if (!validateEmail(email)) {
    throw new Error("Invalid email address.");
  }

  return {
    nameOrCompany,
    email,
    message,
    timestamp: new Date().toLocaleString("pt-BR"),
  };
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const config = getEmailJSConfig();
  const templateParams = prepareContactData(data);

  await emailjs.send(config.serviceId, config.templateId, templateParams, {
    publicKey: config.publicKey,
  });
}
