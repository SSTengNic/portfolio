import React from "react";
import {
  Text,
  Icon,
  Container,
  IconButton,
  Flex,
  Spacer,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactMe() {
  return (
    <Container>
      <Text mb={5} alignContent="center" fontSize="3xl">
        Let's Keep in Touch.
      </Text>
      <Stack>
        <HStack spacing="30px">
          <Icon as={FaLinkedin} boxSize={6} />
          <Text>https://www.linkedin.com/in/nicholas-teng/ </Text>
        </HStack>
        <HStack spacing="30px">
          <Icon as={FaEnvelope} boxSize={6} />
          <Text>nicholasteng3006@gmail.com </Text>
        </HStack>
      </Stack>
    </Container>
  );
}

export default ContactMe;
