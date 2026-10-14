import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";
import "./i18n";

const at = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test("home (EN) shows DummyForge with a link to dummyforge.com", () => {
  at("/");
  expect(screen.getByRole("heading", { level: 1, name: "DummyForge" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Open DummyForge/ })).toHaveAttribute("href", "https://dummyforge.com");
  expect(screen.getByRole("link", { name: "Résumé" })).toHaveAttribute("href", "/resume/");
  expect(document.documentElement.lang).toBe("en");
});

test("home (ES) is in Spanish and links to the Spanish résumé", () => {
  at("/es/");
  expect(screen.getByRole("link", { name: /Abrir DummyForge/ })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Currículum" })).toHaveAttribute("href", "/es/resume/");
  expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("href", "/");
});

test("résumé lists every role and a print button", () => {
  at("/resume");
  expect(screen.getByRole("heading", { level: 1, name: "Ivan Mayoral" })).toBeInTheDocument();
  for (const company of ["DummyForge", "SoundHound AI", "Sirona Medical", "Pearl", "GumGum"]) {
    expect(screen.getByRole("heading", { level: 3, name: new RegExp(company) })).toBeInTheDocument();
  }
  expect(screen.getByText("Aug 2023 – Feb 2026")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Print / Save as PDF" })).toBeInTheDocument();
});

test("résumé (ES) uses Spanish dates", () => {
  at("/es/resume/");
  expect(screen.getByText("ago 2023 – feb 2026")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Imprimir / Guardar como PDF" })).toBeInTheDocument();
});

test("old /projects and unknown paths land on the home page", () => {
  at("/projects");
  expect(screen.getByRole("heading", { level: 1, name: "DummyForge" })).toBeInTheDocument();
});
