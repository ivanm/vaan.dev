import { useState, useEffect } from "react";
import { Flex, useColorMode } from "@chakra-ui/react";
import { Router } from "@reach/router";
import { useTranslation } from "react-i18next";

import TopButtons from "./TopButtons";
import Contact from "./Contact";
import Projects from "./Projects";
import Intro from "./Intro";
import Resume from "./Resume";

const Main = () => {
  const { colorMode } = useColorMode();
  useTranslation();

  useEffect(() => {
    resize();
    window.addEventListener("resize", () => {
      resize();
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const [, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const resize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  return (
    <Flex
      width="100%"
      direction="column"
      bg={colorMode === "dark" ? "gray.900" : "gray.50"}
    >
      <Flex mt={5} direction="row" justifyContent="end" mr={4}>
        <TopButtons />
      </Flex>
      <Flex
        pl={12}
        pr={12}
        direction="column"
        mt={12}
        align="center"
        overflowY="auto"
        height={window.innerHeight - 103}
      >
        <Router style={{ width: "100%" }}>
          <Intro path="/" />
          <Resume path="/resume" />
          <Projects path="/projects" />
          <Contact path="/contact" />
        </Router>
      </Flex>
    </Flex>
  );
};

export default Main;
