import { Flex, Link, useColorMode } from "@chakra-ui/react";

const LeftMenu = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      direction="column"
      align="center"
      pt="105px"
      bg={colorMode === "dark" ? "black" : "gray.200"}
      borderRight="1px"
      borderColor="gray.700"
    >
      <Flex>
        <Flex align="center" fontSize="10" mb={2} mr={2}>
          ᐅ
        </Flex>
        <Link color={colorMode === "dark" ? "white" : "black"} mb={2}>
          About
        </Link>
      </Flex>
      <Link mb={2}>Projects</Link>
      <Link mb={2}>Resume</Link>
      <Link mb={2}>Contact</Link>
    </Flex>
  );
};

export default LeftMenu;
