const es: any = {
  menu: {
    about: "Acerca de",
    projects: "Proyectos",
    contact: "Contacto",
    resume: "CV",
  },
  intro: {
    greeting: "¡Hola!",
    text1:
      "Me llamo <1>Iván Mayoral</1>, soy <3>Senior Software Engineer</3> con más de once años de experiencia profesional en Ciencias de la Computación y especializado en Desarollo Front-End <5>(React + Vue)</5>. Me apasiona crear interfaces de usuario intuitivas que sean fáciles de usar sin sacrificar eficiencia.",
    text2:
      "He participado en diversas industrias, incluyendo <1>educación</1>, <3>publicidad</3> y <5>salud</5>. En los ultimos años he trabajado como contratista para compañias Tech de USA, aprovechando mis habilidades para resolver problemas para producir souciones a la medida del cliente y que hagan felices a los usuarios.",
    text3:
      "Mi experiencia en <1>Back-End</1> me permite trabajar con muchos tipos diferentes de equipos y proveer integraciones entre API y Front-End con soluciones de alto nivel y sin fricción.",
    text4:
      "Disfruto trabajar en ambientes <1>inovadores</1> y <3>colaborativos</3> donde las ideas son compartidas y es valuada la opinion de todos. Me motiva continuar expandiendo mis habilidades y contribuir a hacer un mundo mejor usando código.",
  },
  resume: {
    skills: {
      header: "Habilidades",
      text: "<0>Frontend</0><1>JavaScript, TypeScript, Flow, CSS3, HTML5, React.js (Redux,Hooks), Vue.js (Vuex, Nuxt).</1><2>Backend</2><3>SQL, Node.js, GraphQL, Express, PHP7, Laravel, Ruby on Rails, Solidity.</3><4>Tooling</4><5>Git, Git Flow, Vim, Docker, Docker Compose, Drone CI, Jenkins, Ansible, Puppet, Vagrant, VirtualBox, Bash, Linux (Ubuntu, Debian, Arch), AWS. </5><6>Otros</6><7>Agile, MVC, REST, Object-oriented programming, Functional Programming, Microservices, Internationalization, Continuous Integration, Smart Contracts on Blockchain.</7>",
    },
    education: {
      header: "Educación",
      text: "<0>IPN Escuela Superior de Computo</0><1>Ingeniería en Sistemas Computacionales</1>",
      dates: "2003 - 2007",
    },
    experience: {
      header: "Experiencia",
      sirona: {
        dates: "Marzo 2022 - Noviembre 2022",
        headers: "<0>Sirona Medical</0><1>Software Engineer</1>",
        items:
          "<0>Desarollo de componentes UI en JavaScript para aplicaciones de radiología. (ReactJS/GraphQL)</0><1>Desarollo de software de reconocimiento de voz y herramientas para procesar datos de usuarios mediante comandos. (ReactJS/Slate)</1><2>Diseño de arquitectura y endopints para aplicaciones REST (Python/Django/Postgres/Docker)</2><3>Escritura de especificaciones tecnicas para documentos regulatorios de FDA.</3>",
      },
      pearl: {
        dates: "Julio 2020 - Junio 2021",
        headers: "<0>Pearl</0><1>Senior Software Engineer</1>",
        items:
          "<0>Desarollo de Interfaces de Usuario para marcadores de IA en imágenes dentales.</0><1>Desarollo de componentes para Dashboards para productos de Machine Learning.</1><2>Desarollo de herramientas internas y prototipos (TypeScript, React, Redux, Vue, Vue).</2><3>Desarollo e implemantación de APIs para productos dentales (AWS, Node, Postgres).</3>",
      },
      gumgum: {
        dates: "Abril 2013 - Abril 2020",
        headers: "<0>GumGum</0><1>Senior Software Engineer</1>",
        items:
          "<0>Frontend: Desarollo de aplicaciones internas en React (Ad Manager, Publisher Manager) e integración con APIs REST (React/Redux, ES6, Ramda, JAMStack).</0><1>Backend/Frontend: Mantenimiento de Dashboard internos (PHP, Codeigniter, React, Vue).</1><2>Backend/Frontend: Desarollo de aplicación en React (Publisher Center) para administrar ads (React, Redux, PHP, Codeigniter).</2><3>Diseño y programación de Enpoints API REST con Laravel y autentificación JWT.</3><4>Orquestación en Docker para productos nuevos y legacy (Docker, Docker Compose, Drone CI).</4><5>Mantenimiento y configuración de servidores LAMP.</5><6>Implementación y configuración de maquinas virtuales en Vagrant para proveer configuración común para todos los miembros del equipo (VirtualBox, Ansible, Puppet).</6><7>Diseño de Bases de Datos para productos internos con MySQL, PostgreSQL.</7>",
      },
    },
  },
  projects: {
    text1:
      "Estos son algunos de los proyectos <1>Open Source</1> en los que he trabajado en mi tiempo libre:",
    coinlog: {
      label: "Coinlog [beta]",
      description: "Tracker configurable de criptomonedas.",
    },
    nftExplorer: {
      label: "NFT Explorer",
      description: "Visualizador de colleciones NFT. Alternativa a OpenSea.",
    },
    nftAutoTool: {
      label: "NFT Autotool",
      description:
        "Script generador de NFT usando capas de diferentes rarezas.",
    },
    vaanDev: {
      label: "vaan.dev",
      description: "Esta página. Mi portafolio personal.",
    },
  },

  contact: {
    text1: "Puedes encontrarme en:",
  },
};
export default es;
