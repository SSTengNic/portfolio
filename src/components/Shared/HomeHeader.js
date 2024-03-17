import React from "react";
import { FaSun, FaMoon, FaLinkedin, FaHome, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
    Flex,
    Heading,
    IconButton,
    useColorMode,
    Spacer,
    Container,
} from "@chakra-ui/react";
import backgroundColors from "./Colors";
function HomeHeader({ HomeHeaderText }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
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
            <Flex w="100%">
                <Heading size="md" fontWeight="semibold" mt="5px">
                    {HomeHeaderText}
                </Heading>
                <Spacer></Spacer>

                <Link to="/portfolio">
                    <IconButton
                        ml={2}
                        icon={<FaHome />}
                        isRound="true"
                        style={{ fontSize: "22px" }}
                    ></IconButton>
                </Link>
                <a
                    href="https://www.linkedin.com/in/nicholas-teng/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <IconButton
                        ml={2}
                        icon={<FaLinkedin />}
                        isRound="true"
                        onClick={null}
                        style={{ fontSize: "22px" }}
                    ></IconButton>
                </a>

                <a
                    href="https://github.com/SSTengNic"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <IconButton
                        ml={2}
                        icon={<FaGithub style={{ fontSize: "22px" }} />}
                        isRound="true"
                        onClick={null}
                    ></IconButton>
                </a>

                <IconButton
                    ml={2}
                    icon={
                        isDark ? (
                            <FaSun style={{ fontSize: "22px" }} />
                        ) : (
                            <FaMoon style={{ fontSize: "22px" }} />
                        )
                    }
                    isRound="true"
                    onClick={toggleColorMode}
                ></IconButton>
            </Flex>
        </Container>
    );
}

export default HomeHeader;
