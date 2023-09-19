import { VStack, Container, useColorMode, Text } from "@chakra-ui/react";
import Header from "./Header";
import Profile from "./HomePageParts/Profile";
import Project from "./HomePageParts/Project";
import ContactMe from "./HomePageParts/ContactMe";
import SoftSkillSHardSkills from "./HomePageParts/SoftSkillsHardSkills";

function HomePage() {
  const { colorMode } = useColorMode();

  // Define background colors with transparency based on color mode
  const backgroundColors = {
    light: "rgba(254, 255, 238, 0.4)", // Adjust the RGB values and alpha (0.5 for semi-transparent)
    dark: "rgba(0,0, 0, 0.2)", // Adjust the RGB values and alpha (0.5 for semi-transparent)
  };

  return (
    <div>
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
          <Header />
        </Container>

        <Container
          id="section2"
          backgroundColor={backgroundColors[colorMode]} // Apply background color with transparency
          boxShadow="xl"
          p={4}
          borderRadius="md"
          w="100%"
          mb={4}
        >
          <Profile />
        </Container>

        <Container
          id="section3"
          backgroundColor={backgroundColors[colorMode]} // Apply background color with transparency
          boxShadow="xl"
          p={4}
          borderRadius="md"
          w="100%"
          mb={4}
        >
          <Project />
        </Container>

        <Container
          id="section3"
          backgroundColor={backgroundColors[colorMode]} // Apply background color with transparency
          boxShadow="xl"
          p={4}
          borderRadius="md"
          w="100%"
          textAlign="center"
          alignContent="center"
          mb={4}
        >
          <SoftSkillSHardSkills />
        </Container>

        <Container
          id="section4"
          backgroundColor={backgroundColors[colorMode]} // Apply background color with transparency
          boxShadow="xl"
          p={4}
          borderRadius="md"
          w="100%"
          textAlign="center"
          mb={4}
        >
          <ContactMe />
        </Container>
      </VStack>
    </div>
  );
}

export default HomePage;
