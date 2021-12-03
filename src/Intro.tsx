import { Fragment } from "react";
import { Text, Link } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { Trans } from "react-i18next";

const Intro = (props: RouteComponentProps) => {
  return (
    <Fragment>
      <Text fontSize={18} mb={4}>
        <Trans i18nKey="greeting">Howdy!</Trans>
      </Text>
      <Text mb={4}>
        <Trans i18nKey="text1">
          My name is <b>Iván Mayoral</b>, I am a<b>Senior Software Engineer</b>
          with over <b>10</b> years of professional experience in Computer
          Science.
        </Trans>
      </Text>
      <Text mb={4}>
        <Trans i18nKey="text2">
          I live in <b>Mexico City</b> and have been working remotely for about
          9 years as a contractor for US Tech Companies:
          <Link isExternal href="https://gumgum.com/">
            GumGum
          </Link>
          and
          <Link isExternal href="https://hellopearl.com">
            Pearl
          </Link>
        </Trans>
      </Text>
      <Text mb={4}>
        <Trans i18nKey="text3">
          I am passionate about Free Software, Linux, UI/UX, Accesibility, and
          React.
        </Trans>
      </Text>
      <Text mb={4}>
        <Trans i18nKey="text4">
          My main programming languages are JavaScript (TypeScript ❤️), PHP7,
          Ruby and Solidity, however I have worked with C, C++ and Java in my
          first early jobs.
        </Trans>
      </Text>
    </Fragment>
  );
};
export default Intro;
