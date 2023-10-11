import { Container, Text, Box, Avatar } from "@chakra-ui/react";
import profilePic from "../../pictures/new_profile_pic.jpg";

import React from "react";

function Profile() {
  return (
    <Container textAlign="center">
      <Avatar
        width="200px"
        height="200px"
        name="Nicholas Teng"
        src={profilePic}
      />

      <Text fontSize="3xl" style={{ textDecoration: "underline" }}>
        Nicholas Teng
      </Text>
      <Text fontSize="xl" mb={3}>
        Hi there! I'm a Computer Science and Design (CSD) student from the
        Singapore University of Technology and Design (SUTD).
      </Text>

      <Text fontSize="xl">
        I am an aspiring Machine Learning Engineer, and have hobbies such as 3D
        printing and RPA automation. Do take a look at my projects!{" "}
      </Text>
    </Container>
  );
}

export default Profile;
