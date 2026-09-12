export interface PortfolioProject {
  id: string;
  year: string;
  title: string;
  description: string;
  type: string;
  url: string;
}

export interface PortfolioProjectContent {
  title: string;
  description: string;
  type: string;
  technologies: string;
  status: string;
}

export interface ProjectModalLabels {
  close: string;
  year: string;
  description: string;
  projectType: string;
  technologies: string;
  status: string;
  visitProject: string;
}

export interface PortfolioMessages {
  eyebrow: string;
  title: string;
  viewProject: string;
  projects: Record<string, PortfolioProjectContent>;
  modal: ProjectModalLabels;
}