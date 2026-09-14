export interface AboutHighlightMessage {
  title: string;
  description: string;
}

export interface AboutMessages {
  eyebrow: string;
  title: string;
  description: string;
  specialization: string;
  linkedin: string;
  highlights: {
    results: AboutHighlightMessage;
    architecture: AboutHighlightMessage;
    experience: AboutHighlightMessage;
    learning: AboutHighlightMessage;
  };
}