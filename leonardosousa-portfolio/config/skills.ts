import type { SkillCategory } from "@/types/skills";

/**
 * Temporary Font Awesome replacement test.
 *
 * The variable names are intentionally preserved so the
 * skills array below does not need to be changed.
 *
 * These values now point to SVG icons hosted through Devicon CDN.
 */
const faAws =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aws_logo.svg";

const faBootstrap =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg";

const faCss3Alt =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg";

const faDocker =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg";

const faFigma =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg";

const faGitAlt =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg";

// const faGithub =
//   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";

const faGithub = "https://www.svgrepo.com/show/475654/github-color.svg";

const faHtml5 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg";

const faJenkins =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg";

const faJs =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";

const faLinux =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg";

const faNodeJs =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg";

const faReact =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";

const faSass =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg";

const faWindows =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg";

// const faWordpress =
//   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg";

const faWordpress = "https://www.svgrepo.com/show/475696/wordpress-color.svg";

const faVial =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg";

const skillIconUrls = {
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",

  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",

  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",

  spring:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",

  reactNative:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",

  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",

  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",

  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",

  redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",

  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",

  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",

  netlify:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",

  heroku:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg",

  jest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",

  cypress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",

  postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",

  swagger:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",

  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",

  eclipse:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",

  canva:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
} as const;

export const skills: SkillCategory[] = [
  {
    key: "frontend",
    titleKey: "frontend",
    skills: [
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
      { name: "JavaScript", icon: faJs },
      { name: "TypeScript", icon: skillIconUrls.typescript },
      { name: "React", icon: faReact },
      { name: "Next.js", icon: skillIconUrls.nextjs },
      { name: "Tailwind", icon: skillIconUrls.tailwind },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "Sass", icon: faSass },
    ],
  },

  {
    key: "backend",
    titleKey: "backend",
    skills: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Spring", icon: skillIconUrls.spring },
    ],
  },

  {
    key: "mobile",
    titleKey: "mobile",
    skills: [
      {
        name: "React Native",
        icon: skillIconUrls.reactNative,
      },
    ],
  },

  {
    key: "database",
    titleKey: "database",
    skills: [
      {
        name: "PostgreSQL",
        icon: skillIconUrls.postgresql,
      },
      {
        name: "MySQL",
        icon: skillIconUrls.mysql,
      },
      {
        name: "MongoDB",
        icon: skillIconUrls.mongodb,
      },
      {
        name: "Redis",
        icon: skillIconUrls.redis,
      },
    ],
  },

  {
    key: "cloud",
    titleKey: "cloud",
    skills: [
      { name: "AWS", icon: faAws },
      {
        name: "Firebase",
        icon: skillIconUrls.firebase,
      },
      {
        name: "Netlify",
        icon: skillIconUrls.netlify,
      },
      {
        name: "Heroku",
        icon: skillIconUrls.heroku,
      },
    ],
  },

  {
    key: "devops",
    titleKey: "devops",
    skills: [
      { name: "Docker", icon: faDocker },
      {
        name: "Kubernetes",
        icon: skillIconUrls.kubernetes,
      },
      { name: "Git", icon: faGitAlt },
      { name: "GitHub", icon: faGithub },
      { name: "Jenkins", icon: faJenkins },
    ],
  },

  {
    key: "testing",
    titleKey: "testing",
    skills: [
      {
        name: "Jest",
        icon: skillIconUrls.jest,
      },
      {
        name: "Cypress",
        icon: skillIconUrls.cypress,
      },
      {
        name: "Cucumber",
        icon: faVial,
      },
      {
        name: "Postman",
        icon: skillIconUrls.postman,
      },
    ],
  },

  {
    key: "documentation",
    titleKey: "documentation",
    skills: [
      {
        name: "Swagger",
        icon: skillIconUrls.swagger,
      },
    ],
  },

  {
    key: "tools",
    titleKey: "tools",
    skills: [
      {
        name: "VS Code",
        icon: skillIconUrls.vscode,
      },
      {
        name: "Eclipse",
        icon: skillIconUrls.eclipse,
      },
    ],
  },

  {
    key: "design",
    titleKey: "design",
    skills: [
      { name: "Figma", icon: faFigma },
      {
        name: "Canva",
        icon: skillIconUrls.canva,
      },
    ],
  },

  {
    key: "cms",
    titleKey: "cms",
    skills: [
      {
        name: "WordPress",
        icon: faWordpress,
      },
    ],
  },

  {
    key: "operatingSystems",
    titleKey: "operatingSystems",
    skills: [
      { name: "Linux", icon: faLinux },
      { name: "Windows", icon: faWindows },
    ],
  },
];
