import { Flex, useColorMode } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

import LeftMenuLink from "./LeftMenuLink";

const LeftMenu = () => {
  const { colorMode } = useColorMode();
  useTranslation();
  return (
    <Flex
      fontSize={{ base: 15, sm: 18 }}
      pl={{ base: 4, sm: 6 }}
      direction="column"
      pt="105px"
      bg={colorMode === "dark" ? "black" : "gray.100"}
    >
      <LeftMenuLink to="/">
        <Trans i18nKey="menu.about">About</Trans>
      </LeftMenuLink>
      <LeftMenuLink to="/resume">
        <Trans i18nKey="menu.resume">Resume</Trans>
      </LeftMenuLink>
      <LeftMenuLink to="/projects">
        <Trans i18nKey="menu.projects">Projects</Trans>
      </LeftMenuLink>
      <LeftMenuLink to="/contact">
        <Trans i18nKey="menu.contact">Contact</Trans>
      </LeftMenuLink>
    </Flex>
  );
};

export default LeftMenu;
