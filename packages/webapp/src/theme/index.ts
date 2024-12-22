import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#ffe5e5",
      100: "#fcbaba",
      200: "#f28f8f",
      300: "#e86565",
      400: "#de3b3b",
      500: "#c52222", // default brand color (red)
      600: "#9b1b1b",
      900: "#0f172a", // Background color
      800: "#1e293b", // Card background
      700: "#2d3748", // Card text
      green: "#27A744", // Text highlight
    },
    fonts: {
      heading: "'Source Code Pro', monospace", // Header font
      body: "'Source Code Pro', monospace", // Body font
    },
  },

  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
  },
});
