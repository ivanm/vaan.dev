import { Fragment } from "react";
import { Flex, Heading, Text, Link } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useTranslation, Trans } from "react-i18next";

const Projects = (props: RouteComponentProps) => {
  useTranslation();
  return (
    <Fragment>
      <Text mb={7}>
        <Trans i18nKey="projects.text1">
          This are some of the
          <Link isExternal href="https://github.com/ivanm">
            Open Source
          </Link>
          projects that I'm currently working on my free time:
        </Trans>
      </Text>
      <Flex justify="space-between" mb={2}>
        <Flex direction="column" mr={3}>
          <Heading as="h3" size="sm" mb={2}>
            <Trans i18nKey="projects.nftExplorer.label">NFT Explorer</Trans>
          </Heading>
          <Text fontSize="sm" mb={4}>
            <Trans i18nKey="projects.nftExplorer.description">
              Configurable cryptocurrency price tracker.
            </Trans>
          </Text>
        </Flex>
        <Flex direction={{ base: "column", sm: "row" }}>
          <Text
            fontSize={13}
            textTransform="uppercase"
            fontWeight="bold"
            mr={{ base: 0, sm: 2 }}
          >
            <Link isExternal href="https://nft-explorer.vaan.dev/">
              Website
            </Link>
          </Text>
          <Text
            fontSize={13}
            textTransform="uppercase"
            fontWeight="bold"
            mr={{ base: 0, sm: 2 }}
          >
            <Link isExternal href="https://github.com/ivanm/nft-explorer">
              Source
            </Link>
          </Text>
        </Flex>
      </Flex>
      <Flex justify="space-between" mb={2}>
        <Flex direction="column" mr={3}>
          <Heading as="h3" size="sm" mb={2}>
            <Trans i18nKey="projects.nftAutoTool.label">NFT Autotool</Trans>
          </Heading>
          <Text fontSize="sm" mb={4}>
            <Trans i18nKey="projects.nftAutoTool.description">
              Configurable cryptocurrency price tracker.
            </Trans>
          </Text>
        </Flex>
        <Flex direction={{ base: "column", sm: "row" }}>
          <Text
            fontSize={13}
            textTransform="uppercase"
            fontWeight="bold"
            mr={{ base: 0, sm: 2 }}
          >
            <Link isExternal href="https://github.com/ivanm/nft-autotool">
              Source
            </Link>
          </Text>
        </Flex>
      </Flex>
      <Flex justify="space-between" mb={2}>
        <Flex direction="column" mr={3}>
          <Heading as="h3" size="sm" mb={2}>
            <Trans i18nKey="projects.coinlog.label">Coinlog</Trans>
          </Heading>
          <Text fontSize="sm" mb={4}>
            <Trans i18nKey="projects.coinlog.description">
              Configurable cryptocurrency price tracker.
            </Trans>
          </Text>
        </Flex>
        <Flex direction={{ base: "column", sm: "row" }}>
          <Text
            fontSize={13}
            textTransform="uppercase"
            fontWeight="bold"
            mr={{ base: 0, sm: 2 }}
          >
            <Link isExternal href="http://coinlog.vaan.dev">
              Website
            </Link>
          </Text>
          <Text
            fontSize={13}
            textTransform="uppercase"
            fontWeight="bold"
            mr={{ base: 0, sm: 2 }}
          >
            <Link isExternal href="https://github.com/ivanm/coinlog-ui">
              Source
            </Link>
          </Text>
        </Flex>
      </Flex>
      <Flex justify="space-between" mb={4}>
        <Flex direction="column" mr={3}>
          <Heading as="h3" size="sm" mb={2}>
            <Trans i18nKey="projects.vaanDev.label">vaan.dev</Trans>
          </Heading>
          <Text fontSize="sm" mb={4}>
            <Trans i18nKey="projects.vaanDev.description">
              Configurable cryptocurrency price tracker.
            </Trans>
          </Text>
        </Flex>
        <Flex direction={{ base: "column", sm: "row" }}>
          <Text
            fontSize={13}
            textTransform="uppercase"
            fontWeight="bold"
            mr={{ base: 0, sm: 2 }}
          >
            <Link isExternal href="https://vaan.dev/">
              Website
            </Link>
          </Text>
          <Text
            fontSize={13}
            textTransform="uppercase"
            fontWeight="bold"
            mr={{ base: 0, sm: 2 }}
          >
            <Link isExternal href="https://github.com/ivanm/vaan.dev">
              Source
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Fragment>
  );
};
export default Projects;
