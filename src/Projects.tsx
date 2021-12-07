import { Fragment } from "react";
import { Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useTranslation, Trans } from "react-i18next";

const Projects = (props: RouteComponentProps) => {
  useTranslation();
  return (
    <Fragment>
      <Text mb={4}>
        <Trans i18nKey="projects.text1">
          This are some of the
          <Link isExternal href="https://github.com/ivanm">
            Open Source
          </Link>
          projects that I'm currently working on my free time:
        </Trans>
      </Text>
      <UnorderedList>
        <ListItem>
          <Trans i18nKey="projects.coinlog">
            <Link isExternal href="http://coinlog.vaan.dev">
              coinlog:
            </Link>
            A configurable cryptocurrency price tracker.
          </Trans>
        </ListItem>
        <ListItem>
          <Trans i18nKey="projects.nftExplorer">
            <Link isExternal href="http://nft-explorer.vaan.dev">
              nft-explorer:
            </Link>
            A visualization tool for NFT Collections. An alternative to OpenSea.
          </Trans>
        </ListItem>
        <ListItem>
          <Trans i18nKey="projects.nftAutoTool">
            <Link isExternal href="https://github.com/ivanm/nft-autotool">
              nft-autotool:
            </Link>
            NFT Genereator script using layers with different rarities.
          </Trans>
        </ListItem>
      </UnorderedList>
    </Fragment>
  );
};
export default Projects;
