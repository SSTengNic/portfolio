import {
    Container,
    Text,
    Avatar,
    HStack,
    Flex,
    useMediaQuery,
    Link as ChakraLink,
} from "@chakra-ui/react";
import profilePic from "../../pictures/HomePagePics/headshot_1.jpg";
import React from "react";
import themeColor from "../Shared/Colors";
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
                        borderWidth="4px"
                        borderColor={themeColor.vibyBlue}
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
                        <Text fontSize="xl">
                            Click {""}
                            <ChakraLink
                                href={`${process.env.PUBLIC_URL}/Nicholas_Resume.pdf`} // Update the path to your actual PDF file
                                download="Nicholas_Resume.pdf" // This triggers the download
                                _hover={{
                                    textDecoration: "none",
                                    borderBottom: "2px solid black",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#9cd3ff",
                                        fontWeight: "bold",
                                        display: "inline-block", // Ensures the transform works
                                        transition:
                                            "transform 0.1s ease-in-out", // Smooth transition
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.transform =
                                            "translateY(-2px)")
                                    } // Move up by 3px on hover
                                    onMouseLeave={(e) =>
                                        (e.target.style.transform =
                                            "translateY(0)")
                                    } // Reset position when not hovered
                                >
                                    here
                                </span>
                            </ChakraLink>{" "}
                            for my resume.
                        </Text>
                    </Container>
                </HStack>
            </Container>
        </Flex>
    );
}

export default Profile;
