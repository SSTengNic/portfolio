import {
    Container,
    Text,
    Avatar,
    Stack,
    HStack,
    Flex,
    useMediaQuery,
} from "@chakra-ui/react";
import profilePic from "../../pictures/HomePagePics/headshot_1.jpg";
import React from "react";

function Profile() {
    // Media query to check if the screen width is larger than 768px
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    return (
        <Flex
            height="100%" // Make Flex take the full height of SectionContainer
            justifyContent="center"
            alignItems="center"
        >
            <Container textAlign="center" maxW="700px">
                <HStack direction="row">
                    <Avatar
                        width={isLargerThan768 ? "200px" : "130px"} // Adjust size based on screen width
                        height={isLargerThan768 ? "200px" : "130px"}
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
        </Flex>
    );
}

export default Profile;
