import * as React from "react";
import { ChakraProvider, Box, Grid, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Intro from "./Intro";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="md">
      <Grid minH="100vh" pr={10} pl={10} templateRows="80px 1fr">
        <ColorModeSwitcher mt={2}justifySelf="flex-end" />
        <Flex justify="center" mt={10} width="100%">
          <Intro />
        </Flex>
      </Grid>
    </Box>
  </ChakraProvider>
);
