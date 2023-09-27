import React from "react";
import { FaSun, FaMoon, FaLinkedin, FaMailBulk, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
  Container,
} from "@chakra-ui/react";

function HomeHeader() {
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
    <Container>
      <Flex w="100%">
        <Heading size="md" fontWeight="semibold" mt="5px">
          Machine Learning Projects
        </Heading>
        <Spacer></Spacer>

        <Link to="/">
          <IconButton ml={2} icon={<FaHome />} isRound="true"></IconButton>
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
          ></IconButton>
        </a>

        <IconButton
          ml={2}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
    </Container>
  );
}

export default HomeHeader;
