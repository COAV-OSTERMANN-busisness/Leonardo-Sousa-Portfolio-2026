interface FooterNavigationMessages {
    label: string;
    home: string;
    about: string;
    skills: string;
    portfolio: string;
    contact: string;
  }
  
  interface FooterNavigationProps {
    messages: FooterNavigationMessages;
  }
  
  const navigationItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "portfolio", href: "#portfolio" },
    { key: "contact", href: "#contact" },
  ] as const;
  
  export default function FooterNavigation({
    messages,
  }: FooterNavigationProps) {
    return (
      <nav aria-label={messages.label}>
        <ul className="flex flex-col gap-3">
          {navigationItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="text-sm text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                {messages[item.key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }