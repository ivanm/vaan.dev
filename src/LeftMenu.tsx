import { Flex, useColorMode } from "@chakra-ui/react";
import { Location } from "@reach/router";
import { useTranslation, Trans } from "react-i18next";

import LeftMenuLink from "./LeftMenuLink";

const LeftMenu = () => {
  const { colorMode } = useColorMode();
  useTranslation();
  return (
    <Location>
      {({ location }) => (
        <Flex
          fontSize={{ base: 10, sm: 15 }}
          pl={{ base: 3, sm: 8 }}
          direction="column"
          pt="105px"
          bg={colorMode === "dark" ? "black" : "gray.50"}
          borderRight="1px"
          borderColor={colorMode === "dark" ? "gray.800" : "gray.100"}
        >
          <LeftMenuLink to="/" location={location}>
            <Trans i18nKey="menu.about">About</Trans>
          </LeftMenuLink>
          <LeftMenuLink to="/projects" location={location}>
            <Trans i18nKey="menu.projects">Projects</Trans>
          </LeftMenuLink>
          <LeftMenuLink to="/contact" location={location}>
            <Trans i18nKey="menu.contact">Contact</Trans>
          </LeftMenuLink>
        </Flex>
      )}
    </Location>
  );
};

export default LeftMenu;
