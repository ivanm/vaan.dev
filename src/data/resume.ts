// Résumé data for /resume and /es/resume. The single source for every role, date and skill.
// Facts come from the previous vaan.dev résumé (src/locales/*.ts before 2026-10) plus owner updates
// from 2026-10-14: SoundHound AI ended Feb 2026; DummyForge founded Feb 2026; no roles before 2013
// are listed; "15+ years" is the stated experience.
import type { Lang } from "../lib/lang";

type Text = Record<Lang, string>;

export interface Role {
  id: string;
  company: string;
  /** Optional note under the company name, e.g. the parent studio. */
  org?: Text;
  url?: string;
  role: Text;
  dates: Text;
  items: Text[];
}

export interface SkillGroup {
  name: Text;
  items: Text;
}

export interface Study {
  school: Text;
  degree: Text;
  dates: Text;
}

export const person = {
  name: "Ivan Mayoral",
  title: { en: "Software engineer", es: "Ingeniero de software" } as Text,
  place: { en: "Mexico City", es: "Ciudad de México" } as Text,
  // Shown once hello@vaan.dev is set up on Proton Mail.
  email: null as string | null,
  linkedin: "https://www.linkedin.com/in/imayoral/",
  x: "https://x.com/vaan",
  site: "https://vaan.dev",
  summary: {
    en: "Software engineer in Mexico City with 15+ years of experience across frontend (React, Vue, TypeScript) and backend (Node.js).",
    es: "Ingeniero de software en la Ciudad de México con más de 15 años de experiencia en frontend (React, Vue, TypeScript) y backend (Node.js).",
  } as Text,
};

export const experience: Role[] = [
  {
    id: "dummyforge",
    company: "DummyForge",
    org: { en: "vaan.dev", es: "vaan.dev" },
    url: "https://dummyforge.com",
    role: { en: "Founder", es: "Fundador" },
    dates: { en: "Feb 2026 – present", es: "feb 2026 – actualidad" },
    items: [
      {
        en: "Design, build and run DummyForge (dummyforge.com), a browser app to design your own action figure and print it at home. Public beta, free, in English and Spanish.",
        es: "Diseño, construyo y opero DummyForge (dummyforge.com), una app en el navegador para diseñar tu propia figura de acción e imprimirla en casa. Beta abierta, gratuita, en español e inglés.",
      },
    ],
  },
  {
    id: "soundhound",
    company: "SoundHound AI",
    role: { en: "Senior Software Engineer", es: "Ingeniero de software sénior" },
    dates: { en: "Aug 2023 – Feb 2026", es: "ago 2023 – feb 2026" },
    items: [
      {
        en: "Designed and implemented full-stack apps with Next.js and TypeScript for AI-powered restaurant systems, integrated with real-time WebSocket streams. The improvements led to better usability, faster customer throughput and features customizable per client.",
        es: "Diseñé e implementé aplicaciones full-stack con Next.js y TypeScript para sistemas de restaurantes impulsados por IA, integradas con flujos WebSocket en tiempo real. Las mejoras dieron mejor usabilidad, una atención más rápida y funciones personalizables por cliente.",
      },
      {
        en: "Built internal tools, including a Minikube-based local testbed, a web UI for simulating calls with AI systems, and debugging utilities, which boosted team efficiency.",
        es: "Construí herramientas internas, entre ellas un entorno de pruebas local basado en Minikube, una interfaz web para simular llamadas con sistemas de IA y utilidades de depuración, que mejoraron la eficiencia del equipo.",
      },
      {
        en: "Rewrote a legacy real-time messaging system and deployed it on Kubernetes (Redis, Kafka, WebSockets) with a custom stress-testing suite that simulates varied load profiles.",
        es: "Reescribí un sistema heredado de mensajería en tiempo real y lo desplegué en Kubernetes (Redis, Kafka, WebSockets) con una suite de pruebas de estrés propia que simula distintos perfiles de carga.",
      },
    ],
  },
  {
    id: "sirona",
    company: "Sirona Medical",
    role: { en: "Software Engineer", es: "Ingeniero de software" },
    dates: { en: "Mar 2022 – Nov 2022", es: "mar 2022 – nov 2022" },
    items: [
      {
        en: "Created React UI components with Recoil and GraphQL for radiology interfaces, enabling precise visualization of AI-driven diagnoses.",
        es: "Creé componentes de UI en React con Recoil y GraphQL para interfaces de radiología, que permiten visualizar con precisión diagnósticos generados por IA.",
      },
      {
        en: "Optimized speech-to-text workflows through custom macros and command chaining, reducing lag and improving clinical data capture.",
        es: "Optimicé flujos de voz a texto con macros personalizadas y encadenamiento de comandos, lo que redujo la latencia y mejoró la captura de datos clínicos.",
      },
      {
        en: "Developed scalable Django REST APIs (Docker, Postgres) with optimized endpoints for high-volume patient data ingestion.",
        es: "Desarrollé APIs REST escalables en Django (Docker, Postgres) con endpoints optimizados para la ingesta de grandes volúmenes de datos de pacientes.",
      },
    ],
  },
  {
    id: "pearl",
    company: "Pearl",
    role: { en: "Senior Software Engineer", es: "Ingeniero de software sénior" },
    dates: { en: "Jul 2020 – Jun 2021", es: "jul 2020 – jun 2021" },
    items: [
      {
        en: "Built AI-enhanced UI components for dental imaging with TypeScript, React and Vue, enabling real-time X-ray analysis and treatment planning.",
        es: "Construí componentes de UI con IA para imágenes dentales con TypeScript, React y Vue, que permiten analizar radiografías en tiempo real y planear tratamientos.",
      },
      {
        en: "Developed secure, scalable APIs (Node.js, AWS, Postgres) for processing imaging data and patient records, with strong performance under load.",
        es: "Desarrollé APIs seguras y escalables (Node.js, AWS, Postgres) para procesar datos de imágenes y expedientes de pacientes, con alto rendimiento bajo carga.",
      },
    ],
  },
  {
    id: "gumgum",
    company: "GumGum",
    role: { en: "Senior Software Engineer", es: "Ingeniero de software sénior" },
    dates: { en: "Apr 2013 – Apr 2020", es: "abr 2013 – abr 2020" },
    items: [
      {
        en: "Developed and integrated internal web applications with REST APIs using React and Vue, moving legacy applications to modern stacks and improving overall system efficiency.",
        es: "Desarrollé e integré aplicaciones web internas con APIs REST usando React y Vue, migrando aplicaciones heredadas a stacks modernos y mejorando la eficiencia general del sistema.",
      },
      {
        en: "Built React and Vue applications for managing ads on company websites, with integrations into internal systems in PHP and CodeIgniter, serving thousands of websites a day.",
        es: "Construí aplicaciones en React y Vue para administrar anuncios en los sitios de la empresa, con integraciones a sistemas internos en PHP y CodeIgniter, que atendían miles de sitios web al día.",
      },
      {
        en: "Designed and implemented REST API endpoints with JWT, focused on security and seamless integration.",
        es: "Diseñé e implementé endpoints de APIs REST con JWT, con foco en la seguridad y en una integración sin fricción.",
      },
      {
        en: "Set up Vagrant virtual machines and Docker containers as a standardized, shared environment for development and testing, which greatly improved team collaboration.",
        es: "Configuré máquinas virtuales con Vagrant y contenedores Docker como un entorno compartido y estandarizado de desarrollo y pruebas, lo que mejoró mucho la colaboración del equipo.",
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    name: { en: "Frontend", es: "Frontend" },
    items: {
      en: "TypeScript, JavaScript, React (Hooks, Redux), Vue.js (Vuex, Nuxt), HTML5, CSS3",
      es: "TypeScript, JavaScript, React (Hooks, Redux), Vue.js (Vuex, Nuxt), HTML5, CSS3",
    },
  },
  {
    name: { en: "Backend", es: "Backend" },
    items: {
      en: "Node.js, Clojure, GraphQL, Express, SQL (Postgres, MySQL), MongoDB",
      es: "Node.js, Clojure, GraphQL, Express, SQL (Postgres, MySQL), MongoDB",
    },
  },
  {
    name: { en: "Infrastructure & tooling", es: "Infraestructura y herramientas" },
    items: {
      en: "Docker, Docker Compose, Kubernetes, Git, AWS, Jenkins, Drone CI, Ansible, Linux, Vim",
      es: "Docker, Docker Compose, Kubernetes, Git, AWS, Jenkins, Drone CI, Ansible, Linux, Vim",
    },
  },
  {
    name: { en: "Architecture & methods", es: "Arquitectura y metodologías" },
    items: {
      en: "Functional programming, object-oriented programming, microservices, REST, MVC",
      es: "Programación funcional, programación orientada a objetos, microservicios, REST, MVC",
    },
  },
];

export const education: Study[] = [
  {
    school: {
      en: "Instituto Politécnico Nacional, Escuela Superior de Cómputo (ESCOM)",
      es: "Instituto Politécnico Nacional, Escuela Superior de Cómputo (ESCOM)",
    },
    degree: {
      en: "Computer Systems Engineering",
      es: "Ingeniería en Sistemas Computacionales",
    },
    dates: { en: "2003 – 2007", es: "2003 – 2007" },
  },
];
