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
      "Me llamo <1>Iván Mayoral</1>, soy <3>Senior Software Engineer</3> con más de once años de experiencia profesional en Ciencias de la Computación y especializado en Desarollo Front-End <5>(React/Vue + TypeScript)</5>. Me apasiona crear interfaces de usuario intuitivas que sean fáciles de usar sin sacrificar eficiencia.",
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
          "<0>Desarrollo de componentes UI en Javascript UI para aplicaciones de radiología usando React y GraphQL, creando interfaces faciles de usar y diseñando funciones interactivas que permitiesen facil navegacion y presentación precisa de imágenes medicas y datos generados de IA.</0><1>Contribución al desarollo de software de reconocimiento de voz y herramientas para procesar datos generados por el usuario usando React y Slate. Optimización del tiempo de reconocimiento del contenido en el rango de milisegundos para asegurar una experiencia optima de usuario.</1><2>Diseño de arquitectura e implementación de sistemas de endpoints para aplicaciones REST con Python, Django, Postgre y Docker, creando sistemas escalables que pudiesen manejar grandes cantidades de información y tráfico, manteniendo rendimiento optimo y seguridad.</2><3>Contribución a especificaciones tecnicas de documentos regulatorios de FDA y colaboración con equipos de regulacion y product managers para asegurar que los requerimentos técnicos para las normas regulatorias se cumplieran y que la documentación fuera precisa y completa.</3>",
      },
      pearl: {
        dates: "Julio 2020 - Junio 2021",
        headers: "<0>Pearl</0><1>Senior Software Engineer</1>",
        items:
          "<0>Desarollo de interfaces de usuario para marcadores de IA en imágenes dentales, diseñando y construyendo aplicaciones web que permitiesen a dentistas y a otros profesionales de la medicina identificar y analizar imagenes dentales usando tecnologias como TypeScript, React y Vue.</0><1>Desarollo de componentes para dashboards de productos de machine learning con insights y visualiciones provenientes de modelos de IA, permitiendo a los usuarios interpretar y entender rapidamente datos asociados a potenciales enfermedades en los dientes. Se usó TypeScript, React y Vue.</1><2>Desarollo de herramientas internas para agilizar nuevos flujos de trabajo y creacion de prototipos para probar y experimentar con nuevas funciones y tecnologias en colaboración con otros equipos.</2><3>Diseño e implementación de APIs para productos dentales con AWS, Node y Postgres,usando integraciones escalables y eficientes para varios productos dentales que aseguraron rendimiento optimo e integridad de los datos de los pacientes.</3>",
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
