import React from "react";
import HomeHeader from "../Shared/HomeHeader";
import { VStack } from "@chakra-ui/react";
import InternshipProjects from "./InternshipProjects";
import { useColorMode, Container } from "@chakra-ui/react";

const backgroundColors = {
    light: "rgba(254, 255, 238, 0.4)", // Adjust the RGB values and alpha (0.5 for semi-transparent)
    dark: "rgba(0,0, 0, 0.2)", // Adjust the RGB values and alpha (0.5 for semi-transparent)
};

function WebAppPage() {
    const { colorMode } = useColorMode();
    return (
        <VStack p={5}>
            <HomeHeader HomeHeaderText={"Internships"} />

            <Container
                backgroundColor={backgroundColors[colorMode]} // Apply background color with transparency
                boxShadow="xl"
                p={4}
                borderRadius="md"
                maxW="600px"
                w="100%"
                mb={4}
            >
                <InternshipProjects />
            </Container>
        </VStack>
    );
}

export default WebAppPage;
