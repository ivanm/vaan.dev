import * as React from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Grid,
  Flex,
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
      <Grid minH="100vh" pr={10} pl={10} templateRows="80px 1fr">
        <Flex mt={5} direction="row" justifyContent="end">
          <Menu mr={3}>
            <MenuButton
              variant="ghost"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              English
            </MenuButton>
            <MenuList minWidth="115px">
              <MenuItem>English</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>Spanish</MenuItem>
            </MenuList>
          </Menu>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <Flex justify="center" mt={10} width="100%">
          <Intro />
        </Flex>
      </Grid>
    </Box>
  </ChakraProvider>
);
