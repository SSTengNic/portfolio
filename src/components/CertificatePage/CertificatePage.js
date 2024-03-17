import React from "react";

import { useColorMode, Container, VStack } from "@chakra-ui/react";
import HomeHeader from "../Shared/HomeHeader";
import CertificatesBody from "./CertificatesBody";
import backgroundColors from "../Shared/Colors";

function CertificatesPage() {
    const { colorMode } = useColorMode();
    return (
        <VStack p={5}>
            <HomeHeader HomeHeaderText={"Certificates"} />
            <Container
                id="section1"
                backgroundColor={backgroundColors[colorMode]} // Apply background color with transparency
                boxShadow="xl"
                p={4}
                borderRadius="md"
                w="100%"
                maxW="600px"
                mb={4}
            >
                <CertificatesBody />
            </Container>
        </VStack>
    );
}

export default CertificatesPage;
