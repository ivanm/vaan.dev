const en: any = {
  menu: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
  },
  intro: {
    greeting: "Howdy!",
    text1:
      "I'm <1>Ivan Mayoral</1>, a <3>Senior Software Engineer</3> with more than ten years of professional experience in Computer Science, specializing in Front-End development <5>(React/Vue + TypeScript)</5> and Backend <7>(Node.js)</7>. I am passionate about creating intuitive UI interfaces that are easy to use without sacrificing efficiency.",
    text2:
      "I have participated in diverse industries, including <1>education</1>, <3>advertising</3>, and <5>healthcare</5>. I am based in Mexico City 🇲🇽, and in recent years I have worked as a remote contractor for US Tech Companies, leveraging problem-solving skills to deliver solutions that meet client needs and make users happy.",
    text3:
      "My experience in <1>Back-End</1> development enables me to work with many types of teams and provide seamless integrations between API and Front-End with frictionless high-level solutions.",
    text4:
      "I enjoy working in <1>innovative</1> and <3>collaborative</3> environments where ideas are shared and everyone's input is valued. I am motivated to continue expanding my skills and contribute to making a better world with code.",
  },
  resume: {
    skills: {
      header: "Skills",
      text: "<0>Frontend</0><1> TypeScript, JavaScript, React.js (Hooks, Redux), Vue.js (Vuex, Nuxt), HTML5, CSS3.</1><2>Backend</2><3>Node.js, Clojure, GraphQL, Express, SQL (Postgres, MySQL), MongoDB</3><4>Infrastructrure & Tooling</4><5>Docker, Docker Compose, K8s, Git, AWS, Jenkins, Drone CI, Ansible, Linux, Vim</5><6>Architectures & Methodologies</6><7>Functional Programming, Object-Oriented Programming, Microservices, REST, MVC</7>",
    },
    education: {
      header: "Education",
      text: "<0>IPN Escuela Superior de Computo</0><1>Computer Systems Engineering</1>",
      dates: "2003 - 2007",
    },
    experience: {
      header: "Experience",
      soundhound: {
        dates: "August 2023 - Current",
        headers: "<0>Soundhound</0><1>Senior Software Engineer</1>",
        items:
          "<0>Designed and implemented full-stack apps with Next.js and TypeScript for AI-powered restaurant systems, integrated with real-time WebSocket streams. Improvements led to better usability, faster customer throughput, and customizable features per client.</0><1>Built internal tools including a Minikube-based local testbed, a Web UI for simulating calls with AI systems, and debugging utilities, boosting team efficiency.</1><2>Rewrote a legacy real-time system handling 8,000+ AI-generated customer messages/day. Deployed via Kubernetes (Redis, Kafka, WebSockets) with a custom stress-testing suite simulating varied load profiles.</2>",
      },
      sirona: {
        dates: "March 2022 - November 2022",
        headers: "<0>Sirona Medical</0><1>Software Engineer</1>",
        items:
          "<0>Created React.js UI components using Recoil and GraphQL for radiology interfaces, enabling precise visualization of AI-driven diagnoses.</0><1>Optimized speech-to-text workflows through custom macros and command chaining, reducing lag and improving clinical data capture.</1><2>Developed scalable Django REST APIs (Docker, Postgres) for high-volume patient data ingestion with optimized endpoints.</2><3>Co-authored FDA-compliant documentation detailing system architecture and data flows for regulatory approval.</3>",
      },
      pearl: {
        dates: "July 2020 - June 2021",
        headers: "<0>Pearl</0><1>Senior Software Engineer</1>",
        items:
          "<0>Built AI-enhanced UI components for dental imaging using TypeScript, React, and Vue, enabling real-time X-ray analysis and treatment planning.</0><1>Developed secure, scalable APIs (Node.js, AWS, Postgres) for processing imaging data and patient records with strong performance under load.</1>",
      },
      gumgum: {
        dates: "April 2013 - April 2020",
        headers: "<0>GumGum</0><1>Senior Software Engineer</1>",
        items:
          "<0>Developed and integrated a range of internal web applications with REST APIs using React and Vue, improving overall system efficiency, revamping old legacy applications to modern stacks.</0><1>Built React and Vue applications for managing ads on company websites, implementing integrations with internal systems using PHP and Codeigniter, that served thousands of websites per day.</1><2>Designed and implemented REST API endpoints with JWT, focusing on security and seamless integration.</2><3>Configured Vagrant virtual machines and Docker containers, establishing a standardized, shared environment for development and testing, that drastically improved team collaboration.</3>",
      },
    },
  },
  projects: {
    text1:
      "This are some of the <1>Open Source</1> projects that I'm currently working on my free time:",
    coinlog: {
      label: "Coinlog [beta]",
      description: "Configurable cryptocurrency price tracker.",
    },
    nftExplorer: {
      label: "NFT Explorer",
      description:
        "Visualizer for full NFT Collections. An alternative to OpenSea.",
    },
    nftAutoTool: {
      label: "NFT Autotool",
      description: "NFT Generator script using layers with different rarities.",
    },
    vaanDev: {
      label: "vaan.dev",
      description: "This page. My personal portfolio.",
    },
  },
  contact: {
    text1: "You can find me on:",
  },
};
export default en;
