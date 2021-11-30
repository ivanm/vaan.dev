import { Fragment } from "react";
import { Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";
const Contact = () => (
  <Fragment>
    <Text mb={4}>You can find me on:</Text>
    <UnorderedList>
      <ListItem>
        <Link href="https://www.linkedin.com/in/imayoral/">LinkedIn</Link>
      </ListItem>
      <ListItem>
        <Link href="https://github.com/ivanm/nft-autotool" isExternal>
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
export default Contact;
