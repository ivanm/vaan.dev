import { Fragment } from "react";
import { Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";

const Projects = (props: RouteComponentProps) => (
  <Fragment>
    <Text mb={4}>
      This are some of the{" "}
      <Link isExternal href="https://github.com/ivanm">
        Open Source
      </Link>{" "}
      projects that I'm currently working on my free time:
    </Text>
    <UnorderedList>
      <ListItem>
        <Link isExternal href="http://coinlog.vaan.dev">
          coinlog:
        </Link>
        A configurable cryptocurrency price tracker.
      </ListItem>
      <ListItem>
        <Link isExternal href="http://nft-explorer.vaan.dev">
          nft-explorer:
        </Link>{" "}
        A visualization tool for NFT Collections. An alternative to OpenSea.
      </ListItem>
      <ListItem>
        <Link isExternal href="https://github.com/ivanm/nft-autotool">
          nft-autotool:
        </Link>{" "}
        NFT Genereator script using layers with different rarities.
      </ListItem>
    </UnorderedList>
  </Fragment>
);
export default Projects;
