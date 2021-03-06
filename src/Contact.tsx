import { Fragment } from "react";
import { Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useTranslation, Trans } from "react-i18next";

const Contact = (props: RouteComponentProps) => {
  useTranslation();
  return (
    <Fragment>
      <Text mb={4}>
        <Trans i18nKey="contact.text1">You can find me on:</Trans>
      </Text>
      <UnorderedList>
        <ListItem>
          <Link href="https://www.linkedin.com/in/imayoral/" isExternal>
            LinkedIn
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/ivanm" isExternal>
            Github
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://twitter.com/vaan" isExternal>
            Twitter
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://medium.com/@ivanmgg" isExternal>
            Medium
          </Link>
        </ListItem>
      </UnorderedList>
    </Fragment>
  );
};
export default Contact;
