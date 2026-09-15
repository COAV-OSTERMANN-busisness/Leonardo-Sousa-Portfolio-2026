import {
  faAws,
  faBootstrap,
  faCss3Alt,
  faDocker,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faJenkins,
  faJs,
  faLinux,
  faNodeJs,
  faReact,
  faSass,
  faWindows,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

import { faVial } from "@fortawesome/free-solid-svg-icons";

import type { SkillCategory } from "@/types/skills";

const skillIconUrls = {
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",

  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",

  tailwind: "https://www.svgrepo.com/show/374118/tailwind.svg",

  spring:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",

  reactNative: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",

  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  mongodb: "https://www.svgrepo.com/show/369432/mongodb.svg",

  redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",

  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",

  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",

  netlify: "https://www.svgrepo.com/show/373874/netlify.svg",

  heroku:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",

  jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",

  cypress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",

  postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",

  swagger: "https://www.svgrepo.com/show/374111/swagger.svg",

  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",

  eclipse:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",

  canva:
    "data:image/jpeg;base64,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",
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
    skills: [{ name: "React Native", icon: skillIconUrls.reactNative }],
  },

  {
    key: "database",
    titleKey: "database",
    skills: [
      { name: "PostgreSQL", icon: skillIconUrls.postgresql },
      { name: "MySQL", icon: skillIconUrls.mysql },
      { name: "MongoDB", icon: skillIconUrls.mongodb },
      { name: "Redis", icon: skillIconUrls.redis },
    ],
  },

  {
    key: "cloud",
    titleKey: "cloud",
    skills: [
      { name: "AWS", icon: faAws },
      { name: "Firebase", icon: skillIconUrls.firebase },
      { name: "Netlify", icon: skillIconUrls.netlify },
      { name: "Heroku", icon: skillIconUrls.heroku },
    ],
  },

  {
    key: "devops",
    titleKey: "devops",
    skills: [
      { name: "Docker", icon: faDocker },
      { name: "Kubernetes", icon: skillIconUrls.kubernetes },
      { name: "Git", icon: faGitAlt },
      { name: "GitHub", icon: faGithub },
      { name: "Jenkins", icon: faJenkins },
    ],
  },

  {
    key: "testing",
    titleKey: "testing",
    skills: [
      { name: "Jest", icon: skillIconUrls.jest },
      { name: "Cypress", icon: skillIconUrls.cypress },
      { name: "Cucumber", icon: faVial },
      { name: "Postman", icon: skillIconUrls.postman },
    ],
  },

  {
    key: "documentation",
    titleKey: "documentation",
    skills: [{ name: "Swagger", icon: skillIconUrls.swagger }],
  },

  {
    key: "tools",
    titleKey: "tools",
    skills: [
      { name: "VS Code", icon: skillIconUrls.vscode },
      { name: "Eclipse", icon: skillIconUrls.eclipse },
    ],
  },

  {
    key: "design",
    titleKey: "design",
    skills: [
      { name: "Figma", icon: faFigma },
      { name: "Canva", icon: skillIconUrls.canva },
    ],
  },

  {
    key: "cms",
    titleKey: "cms",
    skills: [{ name: "WordPress", icon: faWordpress }],
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
