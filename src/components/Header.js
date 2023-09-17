import React from "react";
import { FaSun, FaMoon, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
  Container,
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
    <Container>
      <Flex w="100%">
        <Heading size="md" fontWeight="semibold" mt="5px">
          Welcome to my portfolio.
        </Heading>
        <Spacer></Spacer>
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
          icon={<FaMailBulk />}
          isRound="true"
          onClick={() => scrollToSection("section4")}
        ></IconButton>

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

export default Header;
