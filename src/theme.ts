import {
  extendTheme,
  ThemeConfig,
  Colors,
  ThemeComponents
} from "@chakra-ui/react";
import { mode, Styles } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const styles: Styles = {
  global: props => ({
    body: {
      background: mode("gray.50", "gray.900")(props),
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
      color: colorMode === "dark" ? "#489d4f" : "#267a24",
      fontWeight: "bold"
    })
  }
};

const customTheme = {
  config,
  colors,
  styles,
  components
};

const theme = extendTheme(customTheme);
export default theme;
