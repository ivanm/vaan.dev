import { ChakraProvider, Box, Grid, Flex } from "@chakra-ui/react";
import { Router } from "@reach/router";
import Intro from "./Intro";
import Projects from "./Projects";
import Contact from "./Contact";
import LeftMenu from "./LeftMenu";
import TopButtons from "./TopButtons";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="md">
      <Grid
        minH="100vh"
        templateColumns={{ base: "90px 1fr", sm: "150px 1fr" }}
      >
        <LeftMenu />
        <Flex width="100%" direction="column">
          <Flex mt={5} direction="row" justifyContent="end" mr={4}>
            <TopButtons />
          </Flex>
          <Flex pl={10} pr={10} direction="column" mt={12} align="center">
            <Flex
              fontSize={{ base: 12, sm: 15 }}
              width={{ base: "auto", sm: "400px", lg: "700px" }}
            >
              <Router>
                <Intro path="/" />
                <Projects path="/projects" />
                <Contact path="/contact" />
              </Router>
            </Flex>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  </ChakraProvider>
);
