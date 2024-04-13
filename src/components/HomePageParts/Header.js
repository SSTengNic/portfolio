import React from "react";
import {
    FaSun,
    FaMoon,
    FaLinkedin,
    FaMailBulk,
    FaGithub,
} from "react-icons/fa";

import {
    Flex,
    Heading,
    IconButton,
    useColorMode,
    Spacer,
} from "@chakra-ui/react";

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        console.log("Hello");
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Flex w="100%">
            <Heading
                style={{ fontSize: "25px" }}
                fontWeight="semibold"
                mt="5px"
            >
                Welcome to my portfolio!
            </Heading>
            <Spacer></Spacer>

            <IconButton
                ml={2}
                icon={<FaMailBulk style={{ fontSize: "20px" }} />}
                isRound="true"
                onClick={() => scrollToSection("section4")}
            ></IconButton>

            <a
                href="https://www.linkedin.com/in/nicholas-teng/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <IconButton
                    ml={2}
                    icon={<FaLinkedin style={{ fontSize: "22px" }} />}
                    isRound="true"
                    onClick={null}
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
    );
}

export default Header;
