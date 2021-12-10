import { Fragment } from "react";
import { Text, Flex, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useTranslation, Trans } from "react-i18next";
import { Heading } from "@chakra-ui/react";

const Resume = (props: RouteComponentProps) => {
  useTranslation();
  return (
    <Fragment>
      <Heading as="h2" mb={2} fontSize={23}>
        <Trans i18nKey="resume.skills.header">Skills</Trans>
      </Heading>
      <Text>
        <Trans i18nKey="resume.skills.text">
          <Heading as="h3" size="sm" mb={2}>
            Frontend
          </Heading>
          <Text mb={2} fontSize="sm">
            JavaScript, TypeScript, CSS3, HTML5, JAMstack, React.js (Redux,
            Hooks), Vue.js (Vuex, Nuxt).
          </Text>
          <Heading as="h3" size="sm" mb={2}>
            Backend
          </Heading>
          <Text mb={2} fontSize="sm">
            SQL, Node.js, Express, PHP7, Laravel, Ruby on Rails, Solidity.
          </Text>
          <Heading as="h3" size="sm" mb={2}>
            Tooling
          </Heading>
          <Text mb={2} fontSize="sm">
            Git, Git Flow, Vim, Docker, Docker Compose, Drone CI, Jenkins,
            Ansible, Puppet, Vagrant, VirtualBox, Bash, Linux (Ubuntu, Debian,
            Arch), AWS.
          </Text>
          <Heading as="h3" size="sm" mb={2}>
            Other
          </Heading>
          <Text mb={7} fontSize="sm">
            Agile, MVC, REST, Object-oriented programming, Functional
            Programming, Microservices, Internationalization, Continuous
            Integration, Smart Contracts on Blockchain.
          </Text>
        </Trans>
      </Text>
      <hr style={{ marginBottom: "20px" }} />
      <Heading as="h2" mb={2} fontSize={23}>
        <Trans i18nKey="resume.education.header">Education</Trans>
      </Heading>
      <Flex justify="space-between" mb={4}>
        <Flex direction="column">
          <Trans i18nKey="resume.education.text">
            <Heading as="h2" size="md">
              IPN Escuela Superior de Computo
            </Heading>
            <Heading as="h3" size="sm" mb={7}>
              Computer Systems Engineering
            </Heading>
          </Trans>
        </Flex>
        <Flex>
          <Text fontSize={13} textTransform="uppercase" fontWeight="bold">
            <Trans i18nKey="resume.education.ipn.dates">2003 - 2007</Trans>
          </Text>
        </Flex>
      </Flex>
      <hr style={{ marginBottom: "20px" }} />
      <Heading as="h2" mb={2} fontSize={23}>
        <Trans i18nKey="resume.experience.header">Experience</Trans>
      </Heading>
      <Flex justify="space-between">
        <Flex direction="column">
          <Trans i18nKey="resume.experience.pearl.headers">
            <Heading as="h2" size="md">
              Pearl
            </Heading>
            <Heading as="h3" size="sm" mb={2}>
              Senior Software Engineer
            </Heading>
          </Trans>
        </Flex>
        <Flex>
          <Text fontSize={13} textTransform="uppercase" fontWeight="bold">
            <Trans i18nKey="resume.experience.pearl.dates">
              July 2020 - June 2021
            </Trans>
          </Text>
        </Flex>
      </Flex>
      <UnorderedList mb={4} fontSize="sm">
        <Trans i18nKey="resume.experience.pearl.items">
          <ListItem>Item 0</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </Trans>
      </UnorderedList>
      <Flex justify="space-between">
        <Flex direction="column">
          <Trans i18nKey="resume.experience.gumgum.headers">
            <Heading as="h2" size="md">
              GumGum
            </Heading>
            <Heading as="h3" size="sm" mb={2}>
              Senior Software Engineer
            </Heading>
          </Trans>
        </Flex>
        <Flex>
          <Text fontSize={13} textTransform="uppercase" fontWeight="bold">
            <Trans i18nKey="resume.experience.gumgum.dates">
              July 2020 - June 2021
            </Trans>
          </Text>
        </Flex>
      </Flex>
      <UnorderedList fontSize="sm" mb={7}>
        <Trans i18nKey="resume.experience.gumgum.items">
          <ListItem>Item 0</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
          <ListItem>Item 5</ListItem>
          <ListItem>Item 6</ListItem>
          <ListItem>Item 7</ListItem>
        </Trans>
      </UnorderedList>
    </Fragment>
  );
};
export default Resume;
