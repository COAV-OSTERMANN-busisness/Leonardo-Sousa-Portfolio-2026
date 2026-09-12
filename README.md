![Leonardo Sousa Logo](https://firebasestorage.googleapis.com/v0/b/leonardosousa-ls.firebasestorage.app/o/logo%2FLogo%20for%20zap.png?alt=media&token=3bb37b24-8b42-4469-8bb0-cd068ce2b4d7)

# Professional Portfolio

> Personal professional portfolio focused on software development,
> architecture, web/mobile solutions and selected delivered projects.

**Domain:** `leonardosousa.dev.br`\
**Owner:** Leonardo Sousa\
**Status:** In development\
**Estimated effort:** 72 hours of effective development work\
**Languages:** Portuguese, English, Spanish and Japanese

------------------------------------------------------------------------

## 1. Project Overview

This project is a single-page professional portfolio designed to present
Leonardo Sousa's professional profile, technical skills, selected
projects and contact channels.

The visual direction is inspired by modern technology/SaaS websites,
with emphasis on:

-   dark visual identity;
-   strong Hero section;
-   minimal fixed header;
-   responsive navigation triggered by a menu button on every screen
    size;
-   large professional profile image;
-   structured technical skills;
-   vertical zig-zag portfolio timeline;
-   project details displayed in modal windows;
-   subtle scroll animations;
-   multilingual content;
-   direct WhatsApp CTA;
-   EmailJS contact form;
-   Microsoft Clarity monitoring.

The reference used for visual direction is PM2/Keymetrics. The project
will not copy its visual identity or UI.

------------------------------------------------------------------------

# 2. Main Objectives

The portfolio must:

1.  Present Leonardo Sousa as a professional software developer.
2.  Highlight software engineering specialization.
3.  Demonstrate practical experience through real projects.
4.  Present technical skills in an organized and readable way.
5.  Provide direct contact through WhatsApp and email.
6.  Support four languages.
7.  Be responsive from mobile to desktop.
8.  Maintain clean, maintainable and scalable code.
9.  Load quickly and avoid unnecessary architectural complexity.
10. Serve as both a professional portfolio and a technical showcase.

------------------------------------------------------------------------

# 3. Scope

## Sections

The page will contain:

``` text
HEADER
   ↓
HERO
   ↓
ABOUT
   ↓
SKILLS
   ↓
PORTFOLIO
   ↓
CONTACT
   ↓
FOOTER
```

There will be no multiple-page navigation for the main portfolio
experience.

Navigation buttons scroll to sections of the same page.

------------------------------------------------------------------------

# 4. Header

The Header is intentionally minimal.

It will contain only:

``` text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [ LOGO ]                                  [ PT ▼ ]   [ ☰ ] │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

The navigation menu is hidden by default on:

-   mobile;
-   tablet;
-   desktop;
-   large desktop screens.

The menu is always opened through the navigation button.

## Open menu

``` text
┌────────────────────────────────┐
│                                │
│          NAVEGAÇÃO             │
│                                │
│          Início                │
│          Sobre                 │
│          Skills                │
│          Projetos              │
│          Contato               │
│                                │
│  ────────────────────────────  │
│                                │
│          PT ▼                  │
│                                │
│     [ FALAR COMIGO ]           │
│                                │
└────────────────────────────────┘
```

The menu must close after selecting a section.

------------------------------------------------------------------------

# 5. Hero Wireframe

The Hero is the visual centerpiece of the portfolio and should occupy
approximately the first viewport.

The previous small Hero concept was intentionally replaced with a much
larger composition.

``` text
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                                  HERO                                       │
│                                                                              │
│                                                                              │
│                                                                              │
│   SOFTWARE DEVELOPER                                      ┌───────────────┐ │
│                                                           │               │ │
│   Leonardo Sousa                                          │               │ │
│                                                           │               │ │
│   Construindo soluções                                    │               │ │
│   digitais com código,                                   │     FOTO      │ │
│   arquitetura e propósito.                                │               │ │
│                                                           │               │ │
│   [ VER PROJETOS ]                                        │               │ │
│                                                           │               │ │
│   [ FALAR COMIGO ]                                        │               │ │
│                                                           │               │ │
│                                                           └───────────────┘ │
│                                                                              │
│                                                                              │
│      < Full Stack >   < Web >   < Mobile >   < Cloud >   < Logistics >      │
│                                                                              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Hero principles

-   The profile image must be prominent.
-   The image must remain authentic and recognizable.
-   No text is embedded inside the image.
-   The background may use a subtle dark/blue gradient.
-   No cyberpunk or excessive futuristic effects.
-   CTA buttons should be visually clear.
-   AOS animation should remain subtle.
-   The Hero must not feel like a small card.

------------------------------------------------------------------------

# 6. About Wireframe

``` text
┌──────────────────────────────────────────────────────────────────────────────┐
│                                  SOBRE                                       │
│                                                                              │
│  SOBRE MIM                                                                  │
│                                                                              │
│  ┌────────────────────────────────────┐   ┌───────────────────────────────┐ │
│  │                                    │   │                               │ │
│  │ Desenvolvimento com visão          │   │  FOCO EM RESULTADOS           │ │
│  │ de negócio                         │   │                               │ │
│  │                                    │   ├───────────────────────────────┤ │
│  │ Desenvolvedor de software          │   │                               │ │
│  │ com experiência em soluções        │   │  ARQUITETURA LIMPA             │ │
│  │ web e mobile.                      │   │                               │ │
│  │                                    │   ├───────────────────────────────┤ │
│  │ Pós-graduado em Engenharia         │   │                               │ │
│  │ de Software para Dispositivos     │   │  EXPERIÊNCIA MULTISSETOR       │ │
│  │ Móveis.                            │   │                               │ │
│  │                                    │   ├───────────────────────────────┤ │
│  │ [ VER LINKEDIN ]                   │   │                               │ │
│  └────────────────────────────────────┘   │  APRENDIZADO CONTÍNUO          │ │
│                                           │                               │ │
│                                           └───────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

Only the postgraduate specialization will be highlighted from the
academic background.

The portfolio will not reproduce the complete professional history from
LinkedIn.

------------------------------------------------------------------------

# 7. Skills

Skills will be **100% visible on the page**.

There will be:

-   no search;
-   no filter;
-   no accordion;
-   no tabs;
-   no carousel;
-   no "show more" interaction.

Skills are divided into subsections.

``` text
SKILLS
│
├── FRONTEND
├── BACKEND
├── MOBILE
├── DATABASE
├── CLOUD / BaaS
├── DEVOPS
├── TESTING
├── IDE / TOOLS
├── DESIGN
├── CMS
└── OPERATING SYSTEMS
```

## 7.1 Frontend

``` text
HTML5
CSS3
JavaScript
TypeScript
React
Next.js
Tailwind
Bootstrap
Sass
```

## 7.2 Backend

``` text
Node.js
Spring
```

## 7.3 Mobile

``` text
React Native
```

## 7.4 Database

``` text
PostgreSQL
MySQL
MongoDB
Redis
```

## 7.5 Cloud / BaaS

``` text
AWS
Firebase
```

## 7.6 DevOps

``` text
Docker
Kubernetes
Git
GitHub
Jenkins
Netlify
Heroku
```

## 7.7 Testing / API

``` text
Jest
Cypress
Cucumber
Postman
Swagger
```

Cypress is used for end-to-end testing.

Cucumber will be included for BDD/Gherkin-oriented automated scenarios.

## 7.8 IDE / Tools

``` text
VS Code
Eclipse
```

## 7.9 Design

``` text
Figma
Canva
```

## 7.10 CMS

``` text
WordPress
```

## 7.11 Operating Systems

``` text
Linux
Windows
```

------------------------------------------------------------------------

# 8. Skills Wireframe

``` text
┌──────────────────────────────────────────────────────────────────────────────┐
│                                  SKILLS                                      │
│                                                                              │
│                     TECNOLOGIAS & FERRAMENTAS                               │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  FRONTEND                                                                    │
│                                                                              │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐                   │
│  │  HTML5    │ │   CSS3    │ │JavaScript │ │TypeScript │                   │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘                   │
│                                                                              │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐                   │
│  │   React   │ │  Next.js  │ │ Tailwind  │ │ Bootstrap │                   │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘                   │
│                                                                              │
│  ┌───────────┐                                                              │
│  │    Sass   │                                                              │
│  └───────────┘                                                              │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  BACKEND                                                                     │
│  ┌───────────┐ ┌───────────┐                                               │
│  │  Node.js  │ │   Spring  │                                               │
│  └───────────┘ └───────────┘                                               │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  MOBILE                                                                      │
│  ┌────────────────┐                                                         │
│  │  React Native  │                                                         │
│  └────────────────┘                                                         │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  BANCO DE DADOS                                                              │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│  │ PostgreSQL │ │   MySQL    │ │  MongoDB   │ │   Redis    │                │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘                │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  CLOUD / BaaS                                                                │
│  ┌────────────┐ ┌────────────┐                                               │
│  │    AWS     │ │  Firebase  │                                               │
│  └────────────┘ └────────────┘                                               │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  DEVOPS                                                                      │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│  │   Docker   │ │ Kubernetes │ │    Git     │ │   GitHub   │                │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘                │
│                                                                              │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                              │
│  │   Jenkins  │ │  Netlify   │ │   Heroku   │                              │
│  └────────────┘ └────────────┘ └────────────┘                              │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  TESTES                                                                      │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│  │    Jest    │ │  Cypress   │ │  Cucumber  │ │  Postman   │                │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘                │
│                                                                              │
│  ┌────────────┐                                                             │
│  │  Swagger   │                                                             │
│  └────────────┘                                                             │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  IDE / FERRAMENTAS                                                           │
│  ┌────────────┐ ┌────────────┐                                               │
│  │  VS Code   │ │  Eclipse   │                                               │
│  └────────────┘ └────────────┘                                               │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  DESIGN                                                                      │
│  ┌────────────┐ ┌────────────┐                                               │
│  │   Figma    │ │   Canva    │                                               │
│  └────────────┘ └────────────┘                                               │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  CMS                                                                         │
│  ┌────────────┐                                                             │
│  │ WordPress  │                                                             │
│  └────────────┘                                                             │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  SISTEMAS OPERACIONAIS                                                       │
│  ┌────────────┐ ┌────────────┐                                               │
│  │   Linux    │ │  Windows   │                                               │
│  └────────────┘ └────────────┘                                               │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 9. Portfolio

The portfolio uses an interactive vertical zig-zag timeline.

Projects alternate between left and right sides.

``` text
┌──────────────────────────────────────────────────────────────────────────────┐
│                             PORTFÓLIO                                        │
│                                                                              │
│                         TRABALHOS QUE DESENVOLVI                             │
│                                                                              │
│                                      │                                       │
│                                      ●                                       │
│                                      │                                       │
│          ┌───────────────────────────┘                                       │
│          │                                                                   │
│          ▼                                                                   │
│  ┌─────────────────────┐                       ┌─────────────────────┐       │
│  │       2023          │                       │       2024          │       │
│  │                     │                       │                     │       │
│  │ Simple Redis        │───────────────────────│ JC Cargas           │       │
│  │ Caching             │                       │ Aéreas e Rodoviárias│       │
│  │                     │                       │                     │       │
│  │ [ VER PROJETO → ]   │                       │ [ VER PROJETO → ]   │       │
│  └─────────────────────┘                       └─────────────────────┘       │
│          │                                             │                     │
│          ●─────────────────────────────────────────────●                     │
│          │                                                                   │
│          ▼                                                                   │
│  ┌─────────────────────┐                       ┌─────────────────────┐       │
│  │       2024          │                       │       2025          │       │
│  │                     │                       │                     │       │
│  │ Pra Lá Logística    │───────────────────────│ Leonardo Sousa      │       │
│  │                     │                       │                     │       │
│  │ [ VER PROJETO → ]   │                       │ [ VER PROJETO → ]   │       │
│  └─────────────────────┘                       └─────────────────────┘       │
│          │                                             │                     │
│          ●─────────────────────────────────────────────●                     │
│          │                                                                   │
│          ▼                                                                   │
│  ┌─────────────────────┐                       ┌─────────────────────┐       │
│  │     2025 / 2026     │                       │       2026          │       │
│  │                     │                       │                     │       │
│  │ Exata SL            │───────────────────────│ Gama Transportes    │       │
│  │                     │                       │ Log                 │       │
│  │ [ VER PROJETO → ]   │                       │ [ VER PROJETO → ]   │       │
│  └─────────────────────┘                       └─────────────────────┘       │
│          │                                             │                     │
│          ●─────────────────────────────────────────────●                     │
│          │                                                                   │
│          ▼                                                                   │
│  ┌─────────────────────┐                       ┌─────────────────────┐       │
│  │       2026          │                       │       2026          │       │
│  │                     │                       │                     │       │
│  │ Gama FSA            │───────────────────────│ AUTONOMMOS          │       │
│  │                     │                       │                     │       │
│  │ [ VER PROJETO → ]   │                       │ EM DESENVOLVIMENTO  │       │
│  └─────────────────────┘                       │ [ VER PROJETO → ]   │       │
│                                                └─────────────────────┘       │
│                                                                              │
│                         CLIQUE → MODAL                                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Projects

### 2023 --- Simple Redis Caching

NPM package focused on simplifying Redis caching operations.

https://www.npmjs.com/package/simple-redis-caching

### 2024 --- JC Cargas Aéreas e Rodoviárias

Institutional website for a logistics company.

https://jccargasaereaserodoviarias.netlify.app/

### 2024 --- Pra Lá Logística

Institutional website for a logistics company.

https://pralalogistica.com.br/

### 2025 --- Leonardo Sousa

Professional website.

https://leonardosousa.dev.br

### 2025/2026 --- Exata SL

Institutional website for a logistics company.

https://exatasl.com.br/

### 2026 --- Gama Transportes Log

Commercial landing page developed to promote the client's new road
transportation network.

https://gamatransporteslog.com.br/

### 2026 --- Gama FSA

Frontend wireframe and frontend architecture developed for the project.

http://gamafsalog.com.br/

### 2026 --- AUTONOMMOS

Professional-services platform currently under development.

https://autonommos.com.br/

------------------------------------------------------------------------

# 10. Project Modal

Clicking a portfolio project opens a reusable modal.

``` text
┌───────────────────────────────────────────────────────┐
│                                                       │
│  [ X ]                                                │
│                                                       │
│  PROJECT NAME                                         │
│  YEAR                                                 │
│                                                       │
│  ───────────────────────────────────────────────────  │
│                                                       │
│  DESCRIPTION                                          │
│                                                       │
│  PROJECT TYPE                                         │
│                                                       │
│  TECHNOLOGIES                                        │
│                                                       │
│  STATUS                                               │
│                                                       │
│              [ VISIT PROJECT ↗ ]                     │
│                                                       │
└───────────────────────────────────────────────────────┘
```

Requirements:

-   keyboard accessible;
-   close button;
-   Escape key support;
-   responsive;
-   external links;
-   no duplicated modal implementations.

------------------------------------------------------------------------

# 11. Contact

``` text
┌──────────────────────────────────────────────────────────────────────────────┐
│                               CONTATO                                        │
│                                                                              │
│   VAMOS CONVERSAR?                                                           │
│                                                                              │
│   Estou aberto a novas oportunidades,                 ┌────────────────────┐ │
│   projetos e desafios.                                │ Nome               │ │
│                                                       ├────────────────────┤ │
│   ┌─────────────────────────────┐                     │ E-mail             │ │
│   │                             │                     ├────────────────────┤ │
│   │  WHATSAPP                   │                     │                    │ │
│   │  Falar comigo               │                     │ Mensagem           │ │
│   │                             │                     │                    │ │
│   └─────────────────────────────┘                     ├────────────────────┤ │
│                                                       │ [ ENVIAR ]         │ │
│                                                       └────────────────────┘ │
│                                                                              │
│                            EMAILJS                                           │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## WhatsApp

CTA:

``` text
https://api.whatsapp.com/message/N767K3D4E7TAG1
```

## Email

The contact form will use EmailJS.

No backend API will be created for the contact form.

------------------------------------------------------------------------

# 12. Footer

``` text
┌──────────────────────────────────────────────────────────────────────────────┐
│                                FOOTER                                        │
│                                                                              │
│  [ LS ]  Leonardo Sousa                                                     │
│          Software Developer                                                 │
│                                                                              │
│          Início   Sobre   Skills   Projetos   Contato                       │
│                                                                              │
│          LinkedIn   GitHub   WhatsApp                                       │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  © 2026 Leonardo Sousa                                  PT | EN | ES | JA   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 13. Internationalization

Supported locales:

``` text
pt
en
es
ja
```

All user-facing text must pass through the i18n layer.

Example:

``` text
i18n/
├── pt.ts
├── en.ts
├── es.ts
└── ja.ts
```

Components must not contain hardcoded user-facing strings.

Bad:

``` tsx
<h1>Leonardo Sousa</h1>
```

for dynamic/localized UI text.

Preferred:

``` tsx
<h1>{t.hero.title}</h1>
```

The person's name itself may remain a constant identity value.

------------------------------------------------------------------------

# 14. Color System

The original color scale is preserved as the foundation:

``` scss
$primary-color: #1b65a6;
$secondary-color: #1d4b73;
$accent-color: #9cbcd9;

$bg-color: #417fa6;
$text-color: #083040;

$dark: #545454;
$light: #ffffff;
```

For the dark portfolio interface, the implementation will use darker
derived surfaces while preserving the supplied palette as the brand
foundation.

Suggested semantic tokens:

``` scss
$background: #07131c;
$surface: #0c1d29;
$surface-light: #102a3b;

$primary: #1b65a6;
$secondary: #1d4b73;
$accent: #9cbcd9;

$text-primary: #ffffff;
$text-secondary: #9cbcd9;

$dark: #545454;
$light: #ffffff;
```

The goal is a dark, professional, restrained technology aesthetic.

------------------------------------------------------------------------

# 15. Typography

The portfolio typography will use a combination of **Inter** and
**JetBrains Mono**.

## Primary Font — Inter

Inter will be used as the main interface typeface.

Usage:

-   headings;
-   subtitles;
-   body text;
-   navigation;
-   buttons;
-   labels;
-   project descriptions;
-   forms.

Font weights:

``` text
400 — Regular
500 — Medium
600 — Semi Bold
700 — Bold
800 — Extra Bold

# 15. Technology Stack

## Core

``` text
Next.js
React
TypeScript
```

Next.js provides built-in TypeScript support and supports Sass and CSS
Modules for component-level styling.

## Styling

``` text
tailwind
CSS Modules
```

Next.js supports `.scss` and `.module.scss` files when Sass is
installed.

## Icons

``` text
Forteawesome
```

## Animations

``` text
AOS.js
```

AOS will be used only for simple scroll-based entrance animations.

Typical animations:

``` text
fade-up
fade-right
fade-left
fade-in
```

Animation principles:

-   subtle;
-   short duration;
-   no continuous animations;
-   no excessive parallax;
-   no distracting effects;
-   respect reduced-motion preferences.

## Forms

``` text
EmailJS
```

## Analytics / Behavior

``` text
Microsoft Clarity
```

## Communication

``` text
WhatsApp CTA
```

## Testing

``` text
Jest
Cypress
Cucumber
```

Cucumber is included for BDD/Gherkin scenarios.

------------------------------------------------------------------------

# 16. Architecture

The project intentionally avoids overengineering.

The Next.js `app/` directory is reserved for routing, layouts, page
composition and global application styles.

Application components, configuration, internationalization,
infrastructure utilities and TypeScript contracts are kept outside
the `app/` directory.

```text
leonardosousa-portfolio/
│
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── components/
│   ├── Header/
│   │   └── Header.tsx
│   │
│   ├── Hero/
│   │   └── Hero.tsx
│   │
│   ├── About/
│   │   └── About.tsx
│   │
│   ├── Skills/
│   │   └── Skills.tsx
│   │
│   ├── Portfolio/
│   │   └── Portfolio.tsx
│   │
│   ├── Contact/
│   │   └── Contact.tsx
│   │
│   ├── Footer/
│   │   └── Footer.tsx
│   │
│   └── providers/
│       ├── AOSProvider.tsx
│       └── GrafanaProvider.tsx
│
├── config/
│   ├── portfolio.ts
│   ├── site.ts
│   └── skills.ts
│
├── i18n/
│   ├── index.ts
│   └── messages.ts
│
├── lib/
│   ├── aos.ts
│   ├── emailjs.ts
│   └── faro.ts
│
├── types/
│   ├── portfolio.ts
│   └── skills.ts
│
└── public/
```

### E a representação textual complementar

```text
Next.js
   │
   ▼
 app/
   │
   ├──────────────────────┐
   │                      │
[locale]/             globals.css
   │
   ├── page.tsx
   └── layout.tsx
   │
   └──────────────────────────────┐
                                  │
                                  ▼
                         Application
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
    components/           config/              i18n/
          │                   │                   │
          │                   │                   ├── messages.ts
          │                   │                   └── index.ts
          │                   │
          │                   ├── portfolio.ts
          │                   ├── site.ts
          │                   └── skills.ts
          │
          ├── Header/
          ├── Hero/
          ├── About/
          ├── Skills/
          ├── Portfolio/
          ├── Contact/
          ├── Footer/
          └── providers/
                  │
                  ├── AOSProvider.tsx
                  └── GrafanaProvider.tsx

          ┌───────────────────┴───────────────────┐
          │                                       │
          ▼                                       ▼
       lib/                                     types/
          │                                       │
          ├── aos.ts                              ├── portfolio.ts
          ├── emailjs.ts                          └── skills.ts
          └── faro.ts
```
------------------------------------------------------------------------

# 17. Architecture Principles

The project follows:

``` text
Clean Code
SOLID
DRY
Separation of Concerns
Single Responsibility
Component-driven architecture
Reusable components
Accessibility
Responsive Design
Performance
SEO
i18n-first
```

## Important rule

Content should not be unnecessarily embedded directly into components.

For example, projects belong in:

``` text
config/portfolio.ts
```

Skills belong in:

``` text
config/skills.ts
```

Localized UI text belongs in:

``` text
i18n/
```

This makes the application easier to maintain and extend.

------------------------------------------------------------------------

# 18. AOS Animation Strategy

AOS is intentionally limited to simple visual transitions.

Example:

``` tsx
<div data-aos="fade-up">
```

Portfolio timeline:

``` tsx
<div data-aos="fade-right">
```

and:

``` tsx
<div data-aos="fade-left">
```

depending on the side of the timeline.

The modal itself should use CSS/React state rather than AOS.

------------------------------------------------------------------------

# 19. Responsive Strategy

The project is mobile-first.

Breakpoints will be defined according to actual layout needs rather than
arbitrary device names.

Expected targets:

``` text
Mobile
Tablet
Desktop
Large Desktop
```

The Header remains minimal at every breakpoint.

The navigation remains hidden until the menu button is activated.

The Hero changes composition responsively while retaining its large
visual importance.

The portfolio timeline may change from two-sided zig-zag to a single
vertical timeline on narrow screens.

------------------------------------------------------------------------

# 20. SEO

The project will include:

``` text
Title
Meta description
Open Graph
Canonical URL
robots.txt
sitemap
Favicon
JSON-LD
```

Primary domain:

``` text
https://leonardosousa.dev.br
```

The portfolio should expose Leonardo Sousa as a professional software
developer.

------------------------------------------------------------------------

# 21. Performance

Performance priorities:

-   optimized profile image;
-   `next/image`;
-   optimized fonts;
-   minimal JavaScript;
-   no unnecessary dependencies;
-   lazy loading where appropriate;
-   avoid heavy animation;
-   avoid unnecessary API calls;
-   static-first rendering whenever possible.

------------------------------------------------------------------------

# 22. Accessibility

The project must support:

-   semantic HTML;
-   keyboard navigation;
-   visible focus states;
-   accessible menu;
-   accessible modal;
-   Escape-to-close;
-   appropriate ARIA attributes;
-   sufficient color contrast;
-   descriptive labels;
-   reduced-motion preference.

------------------------------------------------------------------------

# 23. Security / Environment Variables

External service credentials must never be hardcoded into components.

Example:

``` text
NEXT_PUBLIC_CLARITY_PROJECT_ID
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

Only values intended to be public may use `NEXT_PUBLIC_`.

------------------------------------------------------------------------

# 24. Development Workflow

Suggested workflow:

``` text
BACKLOG
   ↓
TODO
   ↓
IN PROGRESS
   ↓
REVIEW
   ↓
DONE
```

Each feature should be implemented in small, reversible increments.

------------------------------------------------------------------------

# 25. Trello Cards

## Project Setup

-   initialize Next.js;
-   configure TypeScript;
-   configure SCSS;
-   configure ESLint;
-   configure project structure;
-   configure environment variables.

## Design System

-   color tokens;
-   typography;
-   spacing;
-   responsive rules;
-   buttons;
-   modal;
-   global styles.

## Internationalization

-   locale types;
-   PT;
-   EN;
-   ES;
-   JA;
-   language selector;
-   translation layer.

## Header

-   fixed header;
-   logo;
-   language selector;
-   menu button;
-   responsive menu;
-   section navigation.

## Hero

-   large Hero;
-   profile image;
-   professional headline;
-   CTAs;
-   AOS;
-   responsive composition.

## About

-   professional summary;
-   specialization;
-   highlights;
-   LinkedIn CTA.

## Skills

-   categories;
-   skill model;
-   skill cards;
-   all skills visible;
-   responsive grid.

## Portfolio

-   project model;
-   timeline;
-   zig-zag layout;
-   project cards;
-   AOS.

## Project Modal

-   modal;
-   accessibility;
-   project details;
-   external links.

## Contact

-   EmailJS;
-   validation;
-   loading;
-   success;
-   error;
-   WhatsApp CTA.

## Clarity

-   Microsoft Clarity;
-   production tracking;
-   environment configuration.

## Footer

-   navigation;
-   social links;
-   copyright;
-   language links.

## SEO

-   metadata;
-   Open Graph;
-   canonical;
-   sitemap;
-   robots;
-   JSON-LD.

## QA

-   responsive tests;
-   accessibility;
-   broken links;
-   translations;
-   forms;
-   modal;
-   navigation;
-   animations.

## Deployment

-   production build;
-   environment variables;
-   domain;
-   HTTPS;
-   final validation.

------------------------------------------------------------------------

# 26. Estimated Development Effort

Target:

## 72 hours of effective development work

This is an effort estimate, not a promise of calendar duration.

Suggested allocation:

  Phase                                       Hours
  --------------------------------------- ---------
  Architecture & project setup                   6h
  Design system & responsive foundation          8h
  Header & navigation                            5h
  Hero                                           8h
  About                                          4h
  Skills                                         8h
  Portfolio timeline & modal                    10h
  Internationalization                           6h
  Contact / EmailJS / WhatsApp                   5h
  Clarity / SEO                                  3h
  Testing & accessibility                        5h
  Production deployment & final QA               4h
  **Total**                                 **72h**

------------------------------------------------------------------------

# 27. Delivery Definition

The project is considered complete when:

-   [ ] all sections are implemented;
-   [ ] Header is fixed;
-   [ ] navigation is menu-driven on all resolutions;
-   [ ] Hero has prominent profile image;
-   [ ] About is translated;
-   [ ] all Skills are visible;
-   [ ] Frontend section implemented;
-   [ ] Backend section implemented;
-   [ ] Mobile section implemented;
-   [ ] Database section implemented;
-   [ ] Cloud/BaaS section implemented;
-   [ ] DevOps section implemented;
-   [ ] Testing section implemented;
-   [ ] Cucumber included;
-   [ ] Cypress included;
-   [ ] IDE/Tools implemented;
-   [ ] Design implemented;
-   [ ] WordPress implemented;
-   [ ] Operating Systems implemented;
-   [ ] portfolio zig-zag timeline implemented;
-   [ ] all eight projects configured;
-   [ ] project modal implemented;
-   [ ] contact form implemented;
-   [ ] EmailJS integrated;
-   [ ] WhatsApp CTA implemented;
-   [ ] Microsoft Clarity integrated;
-   [ ] PT implemented;
-   [ ] EN implemented;
-   [ ] ES implemented;
-   [ ] JA implemented;
-   [ ] SEO configured;
-   [ ] accessibility reviewed;
-   [ ] responsive QA completed;
-   [ ] production build validated;
-   [ ] `leonardosousa.dev.br` configured.

------------------------------------------------------------------------

# 28. Final Page Architecture

``` text
                         ┌───────────────┐
                         │    HEADER     │
                         │ Logo | PT | ☰ │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │     HERO      │
                         │               │
                         │  Large Photo  │
                         │  + Developer  │
                         │  Introduction │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │     ABOUT     │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │    SKILLS     │
                         │               │
                         │ Frontend      │
                         │ Backend       │
                         │ Mobile        │
                         │ Database      │
                         │ Cloud         │
                         │ DevOps        │
                         │ Testing       │
                         │ Tools         │
                         │ Design        │
                         │ CMS           │
                         │ OS            │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │  PORTFOLIO    │
                         │               │
                         │  Zig-Zag      │
                         │  Timeline     │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │ PROJECT MODAL │
                         └───────────────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │    CONTACT    │
                         │               │
                         │ EmailJS       │
                         │ WhatsApp      │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │    FOOTER     │
                         └───────────────┘
```

------------------------------------------------------------------------

# 29. Project Philosophy

This portfolio should communicate two things simultaneously:

``` text
                    PROFESSIONAL
                         +
                  TECHNICAL DEPTH
```

The interface should therefore remain:

``` text
Minimal
Dark
Modern
Technical
Professional
Responsive
Accessible
Fast
```

The architecture should remain:

``` text
Simple
Clean
Typed
Reusable
Maintainable
Testable
```

The project deliberately avoids unnecessary backend infrastructure,
excessive dependencies and over-engineering for a single-page portfolio.

------------------------------------------------------------------------

# 30. Status

``` text
Project: Leonardo Sousa Portfolio
Domain: leonardosousa.dev.br
Status: Architecture / Planning
Estimated effort: 72h
Target: Production-ready professional portfolio
```

