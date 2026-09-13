export interface ContactFormData {
  nameOrCompany: string;
  email: string;
  message: string;
}

export interface EmailJSParams extends Record<string, string> {
  nameOrCompany: string;
  email: string;
  message: string;
  timestamp: string;
}

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}
