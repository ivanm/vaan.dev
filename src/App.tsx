import { Suspense } from "react";
import { ChakraProvider, Box, Grid } from "@chakra-ui/react";
import LeftMenu from "./LeftMenu";
import Main from "./Main";
import theme from "./theme";

export const App = () => (
  <Suspense fallback="loading">
    <ChakraProvider theme={theme}>
      <Box fontSize="md">
        <Grid
          minH="100vh"
          templateColumns={{ base: "120px 1fr", sm: "165px 1fr" }}
          width={{ base: "auto", sm: "900px" }}
          marginRight={{ base: 0, sm: "auto" }}
          marginLeft={{ base: 0, sm: "auto" }}
        >
          <LeftMenu />
          <Main />
        </Grid>
      </Box>
    </ChakraProvider>
  </Suspense>
);
