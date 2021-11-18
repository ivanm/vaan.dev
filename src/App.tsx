import * as React from "react";
import { ChakraProvider, Box, Grid, Flex, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Intro from "./Intro";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Flex justify="center" width="100%">
          <Intro />
        </Flex>
      </Grid>
    </Box>
  </ChakraProvider>
);
