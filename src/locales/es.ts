// Spanish (es-MX) copy. Keys mirror en.ts.
import type en from "./en";
import meta from "./meta.json";

const es: typeof en = {
  // Page titles and descriptions are shared with scripts/prerender-routes.js.
  meta: meta.es,
  header: {
    home: "vaan.dev, inicio",
    desc: "Software independiente, Ciudad de México",
    nav: "Principal",
    work: "Trabajo",
    about: "Acerca de",
    switchLabel: "English",
    switchShort: "EN",
  },
  hero: {
    line: "Diseña tu propia figura de acción en el navegador e imprímela en casa.",
    open: "Abrir DummyForge",
    facts: "Beta abierta · Gratis · ES / EN",
    roledesc: "vista de 360°",
    figureLabel:
      "Debug-Man 1.0, una figura de acción negra hecha de bloques, con articulaciones grafito bronce, sobre un pedestal de bronce. Arrástrala o usa las flechas para girarla.",
    credit: "Debug-Man 1.0, hecho con DummyForge",
    hint: "Arrastra para girar",
  },
  work: {
    label: "Trabajo",
    title: "De la pantalla a la impresora.",
    body: "Cambia el cuerpo",
    bodyTag: "Mods",
    color: "Colorea cada pieza",
    colorTag: "Paletas",
    pieces: "Trae tus propias piezas",
    piecesTag: "Cortes de encaje",
    export: "Exporta para imprimir",
    plateAlt:
      "Las 23 piezas negras de armadura de Debug-Man 1.0 en tres filas, cada una con sus encajes cortados.",
    plateCount: "23 piezas de armadura",
    plateNote: "Encajes cortados por DummyForge",
  },
  about: {
    label: "Acerca de",
    text: "vaan.dev es Ivan Mayoral, ingeniero de software en la Ciudad de México. Diseña, construye y opera cada producto de vaan.dev. Sin trabajo por encargo.",
    resume: "Currículum",
    index: "Productos",
    indexNow: "Beta abierta · 2026",
    indexNext: "Siguiente producto",
    indexNextTag: "En el taller",
  },
  footer: {
    social: "En otros sitios",
    linkedin: "LinkedIn",
    x: "X",
    theme: "Tema claro",
    colophon: "© 2026 vaan.dev · Ciudad de México",
  },
  resume: {
    eyebrow: "Currículum",
    print: "Imprimir / Guardar como PDF",
    contact: "Contacto",
    experience: "Experiencia",
    skills: "Habilidades",
    education: "Educación",
  },
};

export default es;
