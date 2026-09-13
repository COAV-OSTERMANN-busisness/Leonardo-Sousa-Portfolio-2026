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

  tailwind:
    "https://www.svgrepo.com/show/374118/tailwind.svg",

  spring:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",

  reactNative:
    "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",

  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  mongodb:
    "https://www.svgrepo.com/show/369432/mongodb.svg",

  redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",

  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",

  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",

  netlify:
    "https://www.svgrepo.com/show/373874/netlify.svg",

  heroku:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",

  jest:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",

  cypress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",

  postman:
    "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",

  swagger:
    "https://www.svgrepo.com/show/374111/swagger.svg",

  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",

  eclipse:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",

  canva:
    "https://www.svgrepo.com/show/341669/canva.svg",
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
      { name: "React Native", icon: skillIconUrls.reactNative },
    ],
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
    skills: [
      { name: "Swagger", icon: skillIconUrls.swagger },
    ],
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
    skills: [
      { name: "WordPress", icon: faWordpress },
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