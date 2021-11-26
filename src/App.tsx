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
import LeftMenu from "./LeftMenu";
import theme from "./theme";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="md">
        <Grid minH="100vh" templateColumns="200px 1fr">
          <LeftMenu />
          <Flex width="100%" direction="column">
            <Flex mt={5} direction="row" justifyContent="end" mr={4}>
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
};
