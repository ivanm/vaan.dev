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
      "Me llamo <1>Iván Mayoral</1>, soy <3>Senior Software Engineer</3> con 15 años de experiencia profesional en Ciencias de la Computación y especializado en Desarollo Front-End <5>(React/Vue + TypeScript)</5> y Backend <7>(Node.js)</7>. Me apasiona crear interfaces de usuario intuitivas que sean fáciles de usar sin sacrificar eficiencia.",
    text2:
      "He participado en diversas industrias, incluyendo <1>educación</1>, <3>publicidad</3> y <5>salud</5>. Viviendo en Ciudad de México 🇲🇽 he trabajado como contratista remoto para compañias Tech de USA, aprovechando mis habilidades para resolver problemas para producir souciones a la medida del cliente y que hagan felices a los usuarios.",
    text3:
      "Mi experiencia en <1>Back-End</1> me permite trabajar con muchos tipos diferentes de equipos y proveer integraciones entre API y Front-End con soluciones de alto nivel y sin fricción.",
    text4:
      "Disfruto trabajar en ambientes <1>inovadores</1> y <3>colaborativos</3> donde las ideas son compartidas y es valuada la opinion de todos. Me motiva continuar expandiendo mis habilidades y contribuir a hacer un mundo mejor usando código.",
  },
  resume: {
    skills: {
      header: "Habilidades",
      text: "<0>Frontend</0><1> TypeScript, JavaScript, React.js (Hooks, Redux), Vue.js (Vuex, Nuxt), HTML5, CSS3.</1><2>Backend</2><3>Node.js, Clojure, GraphQL, Express, SQL (Postgres, MySQL), MongoDB.</3><4>Infraestructura y Herramientas</4><5>Docker, Docker Compose, Kubernetes (K8s), Git, AWS, Jenkins, Drone CI, Ansible, Linux, Vim.</5><6>Arquitecturas y Metodologías</6><7>Programación Funcional, Programación Orientada a Objetos, Microservicios, REST, MVC.</7>",
    },
    education: {
      header: "Educación",
      text: "<0>IPN Escuela Superior de Computo</0><1>Ingeniería en Sistemas Computacionales</1>",
      dates: "2003 - 2007",
    },
    experience: {
      header: "Experiencia",
      soundhound: {
        dates: "Agosto 2023 - Actualidad",
        headers: "<0>SoundHound AI</0><1>Ingeniero de Software Senior</1>",
        items:
          "<0>Diseñé e implementé aplicaciones full-stack con Next.js y TypeScript para sistemas de restaurantes impulsados por IA, integrados con flujos de WebSocket en tiempo real. Las mejoras resultaron en mejor usabilidad, mayor velocidad de atención al cliente y funcionalidades personalizables por cliente.</0><1>Construí herramientas internas, incluyendo un entorno de pruebas local basado en Minikube, una interfaz web para simular llamadas con sistemas de IA y utilidades de depuración, mejorando la eficiencia del equipo.</1><2>Reescribí un sistema heredado en tiempo real que manejaba más de 8,000 mensajes diarios generados por IA. Desplegado con Kubernetes (Redis, Kafka, WebSockets) y una suite de pruebas de estrés personalizada que simula perfiles de carga variados.</2>",
      },
      sirona: {
        dates: "Marzo 2022 - Noviembre 2022",
        headers: "<0>Sirona Medical</0><1>Ingeniero de Software</1>",
        items:
          "<0>Creé componentes de UI en React.js usando Recoil y GraphQL para interfaces de radiología, permitiendo la visualización precisa de diagnósticos generados por IA.</0><1>Optimizé flujos de trabajo de reconocimiento de voz mediante macros personalizadas y encadenamiento de comandos, reduciendo la latencia y mejorando la captura de datos clínicos.</1><2>Desarrollé APIs REST escalables en Django (Docker, Postgres) para la ingesta de datos de pacientes a gran escala con endpoints optimizados.</2><3>Co-redacté documentación compatible con la FDA detallando la arquitectura del sistema y los flujos de datos para aprobación regulatoria.</3>",
      },
      pearl: {
        dates: "Julio 2020 - Junio 2021",
        headers: "<0>Pearl</0><1>Ingeniero de Software Senior</1>",
        items:
          "<0>Construí componentes de UI mejorados con IA para imágenes dentales usando TypeScript, React y Vue, permitiendo análisis de rayos X en tiempo real y planificación de tratamientos.</0><1>Desarrollé APIs seguras y escalables (Node.js, AWS, Postgres) para el procesamiento de datos de imágenes y registros de pacientes con alto rendimiento bajo carga.</1>",
      },
      gumgum: {
        dates: "Abril 2013 - Abril 2020",
        headers: "<0>GumGum</0><1>Senior Software Engineer</1>",
        items:
          "<0>Desarollo de aplicaciones web internas en React e integración con APIs REST.</0><1>Desarollo de aplicaciones en React y Vue para manejo de anuncios en sitios administrados por la compañia e implementacion de integraciones con sistemas internos usando tecnologias como PHP y CodeIgniter.</1><2>Diseño y programación de APIs REST con Laravel y JWT.</2><3>Implementacion y configuración de maquinas virtuales en Vagrant y contenedores Docker para proveer ambientes compartidos para todos los miembros del equipo y estandarizar el desarollo y testing.</3>",
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
