const es: any = {
  menu: {
    about: "Acerca de",
    projects: "Proyectos",
    contact: "Contacto",
    resume: "CV"
  },
  intro: {
    greeting: "¡Hola!",
    text1:
      "Me llamo <1>Iván Mayoral</1>; soy <3>Senior Software Engineer</3> con más de <5>diez</5> años de carrera profesional en Ciencias de la Computación.",
    text2:
      "Vivo en <1>Ciudad de México</1> 🇲🇽. Hace nueve años que trabajo de forma remota como contractor para empresas tecnológicas de USA: <3>GumGum</3> y <5>Pearl</5>.",
    text3:
      "Me apasiona el Software Libre, Linux, UI/UX, Accesibilidad y React.",
    text4:
      "Mis principales lenguajes de programación son JavaScript (TypeScript ❤️), PHP7, Ruby y Solidity. También he programado con C, C++ y Java en mis primeros trabajos."
  },
  resume: {
    skills: {
      header: "Habilidades",
      text:
        "<0>Frontend</0><1>JavaScript, TypeScript, CSS3, HTML5, JAMstack, React.js (Redux,Hooks), Vue.js (Vuex, Nuxt).</1><2>Backend</2><3>SQL, Node.js, Express, PHP7, Laravel, Ruby on Rails, Solidity.</3><4>Tooling</4><5>Git, Git Flow, Vim, Docker, Docker Compose, Drone CI, Jenkins, Ansible, Puppet, Vagrant, VirtualBox, Bash, Linux (Ubuntu, Debian, Arch), AWS. </5><6>Otros</6><7>Agile, MVC, REST, Programación Orientada a Objetos, Programación Funcional, Microservicios, Internacionalización, Integración Contuinua, Smart Contracts en Blockchain.</7>"
    },
    education: {
      header: "Educación",
      text:
        "<0>IPN Escuela Superior de Computo</0><1>Ingeniería en Sistemas Computacionales</1>",
      dates: "2003 - 2007"
    },
    experience: {
      header: "Experiencia",
      pearl: {
        dates: "Julio 2020 - Junio 2021",
        headers: "<0>Pearl</0><1>Senior Software Engineer</1>",
        items:
          "<0>Desarollo de Interfaces de Usuario para marcadores de IA en imágenes dentales.</0><1>Desarollo de componentes para Dashboards para productos de Machine Learning.</1><2>Desarollo de herramientas internas y prototipos (TypeScript, React, Redux, Vue, Vue).</2><3>Desarollo e implemantación de APIs para productos dentales (AWS, Node, Postgres).</3>"
      },
      gumgum: {
        dates: "Abril 2013 - Abril 2020",
        headers: "<0>GumGum</0><1>Senior Software Engineer</1>",
        items:
          "<0>Frontend: Desarollo de aplicaciones internas en React (Ad Manager, Publisher Manager) e integración con APIs REST (React/Redux, ES6, Ramda, JAMStack).</0><1>Backend/Frontend: Mantenimiento de Dashboard internos (PHP, Codeigniter, React, Vue).</1><2>Backend/Frontend: Desarollo de aplicación en React (Publisher Center) para administrar ads (React, Redux, PHP, Codeigniter).</2><3>Diseño y programación de Enpoints API REST con Laravel y autentificación JWT.</3><4>Orquestación en Docker para productos nuevos y legacy (Docker, Docker Compose, Drone CI).</4><5>Mantenimiento y configuración de servidores LAMP.</5><6>Implementación y configuración de maquinas virtuales en Vagrant para proveer configuración común para todos los miembros del equipo (VirtualBox, Ansible, Puppet).</6><7>Diseño de Bases de Datos para productos internos con MySQL, PostgreSQL.</7>"
      }
    }
  },
  projects: {
    text1:
      "Estos son algunos de los proyectos <1>Open Source</1> en los que he trabajado en mi tiempo libre:",
    coinlog: {
      label: "Coinlog",
      description: "Tracker configurable de criptomonedas."
    },
    nftExplorer: {
      label: "NFT Explorer",
      description:
        "Visualizador de colleciones NFT. Alternativa a OpenSea."
    },
    nftAutoTool: {
      label: "NFT Autotool",
      description: "Script generador de NFT usando capas de diferentes rarezas."
    },
    vaanDev: {
      label: "vaan.dev",
      description: "Esta página, mi portafolio personal, también es Open Source."
    }
  },

  contact: {
    text1: "Puedes encontrarme en:"
  }
};
export default es;
