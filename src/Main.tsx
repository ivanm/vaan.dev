import { Flex, useColorMode } from "@chakra-ui/react";
import { Router } from "@reach/router";
import { useTranslation } from "react-i18next";

import TopButtons from "./TopButtons";
import Contact from "./Contact";
import Projects from "./Projects";
import Intro from "./Intro";

const Main = () => {
  const { colorMode } = useColorMode();
  useTranslation();
  return (
    <Flex width="100%" direction="column" bg={colorMode === "dark" ? "gray.900" : "gray.50"}>
      <Flex mt={5} direction="row" justifyContent="end" mr={4}>
        <TopButtons />
      </Flex>
      <Flex pl={12} pr={12} direction="column" mt={12} align="center">
        <Flex fontSize={{ base: 12, sm: 16 }} width="100%">
          <Router>
            <Intro path="/" />
            <Projects path="/projects" />
            <Contact path="/contact" />
          </Router>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Main;
