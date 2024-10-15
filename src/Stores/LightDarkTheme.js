import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark", // Set your initial color mode here
    transitionDuration: "2000ms",
  },
  styles: {
    global: (props) => ({
      body: {
        transition: "background-color 2s ", // Adjust the transition duration here
      },
    }),
  },
});

export default theme;
