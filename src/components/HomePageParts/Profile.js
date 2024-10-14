import { Container, Text, Avatar, Stack, HStack } from "@chakra-ui/react";
import profilePic from "../../pictures/headshot_1.jpg";
import React from "react";

function Profile() {
    return (
        <Container textAlign="center" maxW="700px">
            <HStack direction="row">
                <Avatar
                    width="200px"
                    height="200px"
                    name="Nicholas Teng"
                    src={profilePic}
                />
                <Container maxW="700px">
                    <Text fontSize="3xl" mt={7} mb={2}>
                        <b>Nicholas Teng</b>
                    </Text>

                    <Text fontSize="xl" mb={1}>
                        <b>Backend Developer💾</b> with a passion for{" "}
                    </Text>
                    <Text fontSize="xl">
                        <b>AI and entrepreneurship.🚀</b>
                    </Text>
                    <Text fontSize="xl">Click here for my resume.</Text>
                </Container>
            </HStack>
        </Container>
    );
}

export default Profile;
