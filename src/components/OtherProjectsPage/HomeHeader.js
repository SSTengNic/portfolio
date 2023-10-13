import React from "react";
import { FaSun, FaMoon, FaLinkedin, FaHome } from "react-icons/fa";
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

  return (
    <Container>
      <Flex w="100%">
        <Heading size="md" fontWeight="semibold" mt="5px">
          Startups, Internships & Projects
        </Heading>
        <Spacer></Spacer>

        <Link to="/portfolio">
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
