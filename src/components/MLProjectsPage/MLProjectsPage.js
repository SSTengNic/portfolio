import React from "react";
import HomeHeader from "./HomeHeader";
import { VStack } from "@chakra-ui/react";

import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
  Container,
} from "@chakra-ui/react";
import MLBody from "./MLBody";

const backgroundColors = {
  light: "rgba(254, 255, 238, 0.4)", // Adjust the RGB values and alpha (0.5 for semi-transparent)
  dark: "rgba(0,0, 0, 0.2)", // Adjust the RGB values and alpha (0.5 for semi-transparent)
};

function MLProjectsPage() {
  const { colorMode } = useColorMode();
  return (
    <VStack p={5}>
      <Container
        id="section1"
        backgroundColor={backgroundColors[colorMode]} // Apply background color with transparency
        boxShadow="xl"
        p={4}
        borderRadius="md"
        w="100%"
        mb={4}
      >
        <HomeHeader />
      </Container>
      <Container
        id="section1"
        backgroundColor={backgroundColors[colorMode]} // Apply background color with transparency
        boxShadow="xl"
        p={4}
        borderRadius="md"
        w="100%"
        mb={4}
      >
        <MLBody />
      </Container>
    </VStack>
  );
}

export default MLProjectsPage;
