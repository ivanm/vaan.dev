import { Box, Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

const Contact = () => {
  useTranslation();
  return (
    <Box w="100%">
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
    </Box>
  );
};
export default Contact;
