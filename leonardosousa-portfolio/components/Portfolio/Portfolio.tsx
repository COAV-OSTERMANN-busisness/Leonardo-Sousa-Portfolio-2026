import { getMessages, type Locale } from "@/i18n";
import { portfolioProjects } from "@/config";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioTimeline from "./PortfolioTimeline";

interface PortfolioProps {
  locale: Locale;
}

export default function Portfolio({ locale }: PortfolioProps) {
  const messages = getMessages(locale);
  const portfolioMessages = messages.portfolio;

  const projects = portfolioProjects.map((project) => {
    const content = portfolioMessages.projects[project.id];

    return {
      ...project,
      title: content.title,
      description: content.description,
      type: content.type,
    };
  });

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 sm:py-28"
      aria-labelledby="portfolio-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(27,101,166,0.08),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <PortfolioHeader
          eyebrow={portfolioMessages.eyebrow}
          title={portfolioMessages.title}
        />

        <PortfolioTimeline
          projects={projects}
          actionLabel={portfolioMessages.viewProject}
          modalLabels={{
            ...portfolioMessages.modal,
            description: "",
            projectType: portfolioMessages.modal.type,
          }}
        />
      </div>
    </section>
  );
}
