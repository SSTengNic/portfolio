import { Container, Text, Avatar, Stack, HStack } from "@chakra-ui/react";

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
                    <b>
                        Singapore University of Technology and Design. (SUTD)🏫
                    </b>
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
