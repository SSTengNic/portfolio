import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

// Set the chakra-ui-color-mode to "dark" every time the app starts
localStorage.setItem("chakra-ui-color-mode", "light");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <ChakraProvider>
        <ColorModeScript initialColorMode="light" />{" "}
        {/* Set initial color mode to dark */}
        <App />
    </ChakraProvider>
    //</React.StrictMode>
);
