import { motion } from "framer-motion";
import {
    Divider,
    AbsoluteCenter,
    VStack,
    Container,
    useColorMode,
    Box,
} from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { useInViewport } from "react-in-viewport";
import { Text } from "@chakra-ui/react";

import Header from "./Header";
import Profile from "./Profile";
import Project from "./Project";
import ContactMe from "./ContactMe";
import SoftSkillSHardSkills from "./SoftSkillsHardSkills";
import TechStackAndJourney from "./TechStackAndJourney";
import Tech from "../canvas/Tech";

function HomePage() {
    const { colorMode } = useColorMode();
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const { inViewport: inViewport1 } = useInViewport(ref1, { threshold: 0.7 });
    const { inViewport: inViewport2 } = useInViewport(ref2, { threshold: 0.2 });
    const { inViewport: inViewport3 } = useInViewport(ref3, { threshold: 0.4 });
    const { inViewport: inViewport4 } = useInViewport(ref4, { threshold: 0.7 });
    const { inViewport: inViewport5 } = useInViewport(ref5, { threshold: 0.2 });
    const { inViewport: inViewport6 } = useInViewport(ref6, { threshold: 0.7 });

    const fadeInVariants = {
        hidden: { opacity: 0.3 },
        visible: { opacity: 1 },
        whileHover: { scale: 1.02 },
    };

    const backgroundColors = {
        light: "rgba(254, 255, 238, 0.4)", // Adjust the RGB values and alpha (0.5 for semi-transparent)
        dark: "rgba(0,0, 0, 0.2)", // Adjust the RGB values and alpha (0.5 for semi-transparent)
    };

    useEffect(() => {
        const sections = [ref1, ref2, ref3, ref4, ref5, ref6];
        console.log("testing");
        sections.forEach((section) => {
            section.current.style.scrollSnapType = "y mandatory";
            section.current.style.scrollBehavior = "smooth";
            section.current.style.scrollSnapAlign = "start";
        });
    }, []);

    return (
        <VStack p={5}>
            <Container
                as={motion.div}
                id="section1"
                ref={ref1}
                backgroundColor={backgroundColors[colorMode]}
                boxShadow="xl"
                p={4}
                borderRadius="md"
                w="100%"
                maxW="600px"
                mb={4}
                initial="hidden"
                animate={inViewport1 ? "visible" : "hidden"}
                variants={fadeInVariants}
                whileHover="whileHover"
                style={{ overflowY: "auto" }} // Add this attribute to enable whileHover animation
            >
                <Header />
            </Container>

            <Container
                as={motion.div}
                id="section2"
                ref={ref2}
                backgroundColor={backgroundColors[colorMode]}
                boxShadow="xl"
                p={4}
                borderRadius="md"
                w="100%"
                maxW="600px"
                mb={4}
                initial="hidden"
                animate={inViewport2 ? "visible" : "hidden"}
                variants={fadeInVariants}
                whileHover="whileHover"
                style={{ overflowY: "auto" }} // Adjust the scale value as needed            >
            >
                <Profile />
                <Box position="relative" padding="10">
                    <Divider />
                    <AbsoluteCenter bg={null} px="4"></AbsoluteCenter>
                </Box>
                <Text textAlign="center" fontSize="3xl">
                    <b>Tech Stack </b>
                </Text>
                <Tech />
            </Container>

            <Container
                as={motion.div}
                id="section3"
                ref={ref3}
                backgroundColor={backgroundColors[colorMode]}
                boxShadow="xl"
                p={4}
                borderRadius="md"
                w="100%"
                maxW="600px"
                mb={4}
                initial="hidden"
                animate={inViewport3 ? "visible" : "hidden"}
                variants={fadeInVariants}
                whileHover="whileHover" // Add this attribute to enable whileHover animation
                style={{ overflowY: "auto" }}
            >
                <Project />
            </Container>

            <Container
                as={motion.div}
                id="section4"
                ref={ref4}
                backgroundColor={backgroundColors[colorMode]}
                boxShadow="xl"
                p={4}
                borderRadius="md"
                w="100%"
                maxW="600px"
                mb={4}
                initial="hidden"
                animate={inViewport4 ? "visible" : "hidden"}
                variants={fadeInVariants}
                whileHover="whileHover" // Add this attribute to enable whileHover animation
                style={{ overflowY: "auto" }}
            >
                <SoftSkillSHardSkills />
            </Container>

            <Container
                as={motion.div}
                id="section5"
                ref={ref5}
                backgroundColor={backgroundColors[colorMode]}
                boxShadow="xl"
                p={4}
                borderRadius="md"
                w="100%"
                maxW="600px"
                mb={5}
                initial="hidden"
                animate={inViewport5 ? "visible" : "hidden"}
                variants={fadeInVariants}
                whileHover="whileHover" // Add this attribute to enable whileHover animation
                style={{ position: "relative" }} // Add this style to prevent overlap with absolute positioned elements
                style={{ overflowY: "auto" }}
            >
                <TechStackAndJourney />
            </Container>

            <Container
                as={motion.div}
                id="section6"
                ref={ref6}
                backgroundColor={backgroundColors[colorMode]}
                boxShadow="xl"
                p={4}
                borderRadius="md"
                w="100%"
                maxW="600px"
                mb={4}
                initial="hidden"
                animate={inViewport6 ? "visible" : "hidden"}
                variants={fadeInVariants}
                whileHover="whileHover" // Add this attribute to enable whileHover animation
                style={{ overflowY: "auto" }}
            >
                <ContactMe />
            </Container>
        </VStack>
    );
}

export default HomePage;
