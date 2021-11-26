import * as React from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Grid,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Intro from "./Intro";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="md">
      <Grid minH="100vh" templateColumns="200px 1fr">
        <Flex
          direction="column"
          align="center"
          pt="105px"
          bg="black"
          borderRight="1px"
          borderColor="gray.700"
        >
          <Flex>
            <Flex align="center" fontSize="10" mb={2} mr={2}>
              ᐅ
            </Flex>
            <Link color="white" mb={2}>
              About
            </Link>
          </Flex>
          <Link mb={2}>Projects</Link>
          <Link mb={2}>Resume</Link>
          <Link mb={2}>Contact</Link>
        </Flex>
        <Flex width="100%" direction="column">
          <Flex mt={5} direction="row" justifyContent="end">
            <Menu>
              <MenuButton
                variant="ghost"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                English
              </MenuButton>
              <MenuList minWidth="115px">
                <MenuItem>English</MenuItem>
                <MenuItem onClick={() => alert("Kagebunshin")}>
                  Spanish
                </MenuItem>
              </MenuList>
            </Menu>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <Intro />
        </Flex>
      </Grid>
    </Box>
  </ChakraProvider>
);
