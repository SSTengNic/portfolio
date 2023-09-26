import React from "react";

import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
  Container,
  VStack,
} from "@chakra-ui/react";
import HomeHeader from "./HomeHeader";
import CertificatesBody from "./CertificatesBody";
const backgroundColors = {
  light: "rgba(254, 255, 238, 0.4)", // Adjust the RGB values and alpha (0.5 for semi-transparent)
  dark: "rgba(0,0, 0, 0.2)", // Adjust the RGB values and alpha (0.5 for semi-transparent)
};
function CertificatesPage() {
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
        <CertificatesBody />
      </Container>
    </VStack>
  );
}

export default CertificatesPage;
