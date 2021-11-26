import { Text, Flex, UnorderedList, ListItem, Link } from "@chakra-ui/react";

const Intro = () => (
  <Flex pl={10} pr={10} direction="column" mt={12}>
    <Text fontSize={18} mb={4}>Howdy!</Text>
    <Text mb={4}>
      My name is <b>Iván Mayoral</b>, I am a <b>Senior Software Engineer</b>{" "}
      with over <b>10</b> years of professional experience in Computer Science.
    </Text>
    <Text mb={4}>
      I live in <b>Mexico City</b> 🇲🇽 and have been working remotely for about 9
      years as a contractor for US Tech Companies:{" "}
      <Link isExternal href="https://gumgum.com/">GumGum</Link> and{" "}
      <b>
        <Link isExternal href="https://hellopearl.com">Pearl</Link>
      </b>
    </Text>
    <Text mb={4}>
      I am passionate about Free Software, Linux, UI/UX, Accesibility,
      and React.
    </Text>
    <Text mb={4}>
      My main programming languages are JavaScript (TypeScript ❤️), PHP7,
      Ruby and Solidity, however I have worked with C, C++ and Java in my first
      early jobs.
    </Text>
    <Text mb={4}>
      This are some of the{" "}
      <Link isExternal href="https://github.com/ivanm">Open Source</Link> projects that I'm
      currently working on my free time:
    </Text>
    <UnorderedList>
      <ListItem>
        <Link isExternal href="http://coinlog.vaan.dev">coinlog:</Link>A configurable
        cryptocurrency price tracker.
      </ListItem>
      <ListItem>
        <Link isExternal href="http://nft-explorer.vaan.dev">nft-explorer:</Link> A
        visualization tool for NFT Collections. An alternative to OpenSea.
      </ListItem>
      <ListItem>
        <Link isExternal href="https://github.com/ivanm/nft-autotool">nft-autotool:</Link>{" "}
        NFT Genereator script using layers with different rarities.
      </ListItem>
    </UnorderedList>
  </Flex>
);
export default Intro;
