import { Navigate, Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import { localePath, type Lang } from "./lib/lang";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

// English at the root, Spanish under /es/. The old /projects and /contact pages now live as
// sections of the home page; anything else unknown goes home.
const routesFor = (lang: Lang, base: string) => [
  <Route
    key={`${lang}-home`}
    path={base || "/"}
    element={
      <Page lang={lang} page="">
        <Home />
      </Page>
    }
  />,
  <Route
    key={`${lang}-resume`}
    path={`${base}/resume`}
    element={
      <Page lang={lang} page="resume">
        <Resume />
      </Page>
    }
  />,
  <Route
    key={`${lang}-projects`}
    path={`${base}/projects`}
    element={<Navigate replace to={{ pathname: localePath(lang), hash: "#no-01" }} />}
  />,
  <Route
    key={`${lang}-contact`}
    path={`${base}/contact`}
    element={<Navigate replace to={{ pathname: localePath(lang), hash: "#contact" }} />}
  />,
];

export const App = () => (
  <Routes>
    {routesFor("en", "")}
    {routesFor("es", "/es")}
    <Route path="/es/*" element={<Navigate replace to="/es/" />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);
