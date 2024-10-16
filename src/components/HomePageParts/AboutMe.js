import {
    Container,
    Text,
    Avatar,
    Stack,
    HStack,
    Link as ChakraLink,
} from "@chakra-ui/react";
import themeColor from "../Shared/Colors";
const AboutMe = () => {
    return (
        <>
            <Container textAlign="center" maxW="700px">
                <Text textAlign="center" fontSize="3xl" mb={3}>
                    <b>About me </b>
                </Text>
                <Text fontSize="2xl" mb={3} textAlign="center">
                    Hello!👋
                </Text>
                <Text fontSize="xl" mb={3}>
                    I'm a <b>Computer Science and Design (CSD)🖥️</b> student
                    from the{" "}
                    <ChakraLink
                        href="https://www.sutd.edu.sg/"
                        _hover={{
                            textDecoration: "none",
                            borderBottom: "2px solid black",
                        }}
                    >
                        <span
                            style={{
                                color: themeColor.vibyBlue,
                                fontWeight: "bold",
                                display: "inline-block", // Ensures the transform works
                                transition: "transform 0.1s ease-in-out", // Smooth transition
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.transform = "translateY(-2px)")
                            } // Move up by 3px on hover
                            onMouseLeave={(e) =>
                                (e.target.style.transform = "translateY(0)")
                            } // Reset position when not hovered
                        >
                            Singapore University of Technology and Design
                            (SUTD).
                        </span>
                    </ChakraLink>
                    <span> 🏫</span>
                </Text>
                <Text fontSize="xl">
                    When I am not solving problems, I'm practicing martial
                    arts🥋, enjoying comedies😂, or diving into the world of
                    entrepreneurship.🚀
                </Text>
            </Container>
        </>
    );
};

export default AboutMe;
