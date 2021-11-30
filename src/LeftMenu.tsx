import { Flex, useColorMode } from "@chakra-ui/react";
import { Location } from "@reach/router";

import LeftMenuLink from "./LeftMenuLink";

const LeftMenu = () => {
  const { colorMode } = useColorMode();
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
            About
          </LeftMenuLink>
          <LeftMenuLink to="/projects" location={location}>
            Projects
          </LeftMenuLink>
          <LeftMenuLink to="/contact" location={location}>
            Contact
          </LeftMenuLink>
        </Flex>
      )}
    </Location>
  );
};

export default LeftMenu;
