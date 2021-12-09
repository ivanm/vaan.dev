import {
  extendTheme,
  ThemeConfig,
  Colors,
  ThemeComponents
} from "@chakra-ui/react";
import {
  mode,
  Styles,
  Breakpoints,
  createBreakpoints
} from "@chakra-ui/theme-tools";
import type { Dict } from "@chakra-ui/utils";


const DARK_LINK_COLOR = "#489d4f";
const LIGHT_LINK_COLOR = "#267a24";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const styles: Styles = {
  global: props => ({
    body: {
      background: mode("gray.100", "black")(props),
      color: mode("gray.900", "gray.50")(props)
    }
  })
};

const colors: Colors = {
  gray: {
    50: "#f2f2f2",
    100: "#d9d9d9",
    200: "#bfbfbf",
    300: "#a6a6a6",
    400: "#8c8c8c",
    500: "#737373",
    600: "#595959",
    700: "#404040",
    800: "#262626",
    900: "#0d0d0d"
  }
};
const components: ThemeComponents = {
  Link: {
    baseStyle: ({ colorMode }) => ({
      color: colorMode === "dark" ? DARK_LINK_COLOR : LIGHT_LINK_COLOR,
      fontWeight: "bold",
      _focus: {
        boxShadow:
          colorMode === "dark"
            ? `${DARK_LINK_COLOR} 0px 0px 0px 3px`
            : `${LIGHT_LINK_COLOR} 0px 0px 0px 3px`
      }
    })
  },
  Button: {
    baseStyle: ({ colorMode }) => ({
      _focus: {
        boxShadow:
          colorMode === "dark"
            ? `${DARK_LINK_COLOR} 0px 0px 0px 3px`
            : `${LIGHT_LINK_COLOR} 0px 0px 0px 3px`
      }
    })
  }
};

const breakpoints: Breakpoints<Dict> = createBreakpoints({
  sm: "800px",
  md: "900px",
  lg: "1000px",
  xl: "1200px",
});

const customTheme = {
  config,
  colors,
  styles,
  components,
  breakpoints
};

const theme = extendTheme(customTheme);
export default theme;
