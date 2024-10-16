import React from "react";
import {
    Text,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Center,
    Grid,
    LinkBox,
    LinkOverlay,
    Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import webAppPic from "../../pictures/HomePagePics/New_Web_App_Pic.png";
import PersonalProjectPic from "../../pictures/School_Projects_Card_Front_Page.jpg";
import InternshipPic from "../../pictures/HomePagePics/1TCC_Pic_Of_Me_Edited_2.jpg";
import themeColors from "../Shared/Colors";

const Project = () => {
    return (
        <Center flexDirection="column" p={5}>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
                Projects
            </Text>
            <Grid
                templateColumns="repeat(auto-fill, minmax(300px, 1fr))" // Responsive grid layout
                gap={6} // Space between grid items
                width="100%"
                maxW="1200px" // Set a maximum width for the grid to center it
            >
                <CardComponent
                    image={PersonalProjectPic}
                    heading="Startup/Misc Projects"
                    description="Various startup and university projects completed so far."
                    link="/StartupMisc"
                />
                <CardComponent
                    image={webAppPic}
                    heading="Fullstack Web Applications"
                    description="Projects built using MERN Stack, MySQL, Astro, Deno and many more."
                    link="/WebappProjects"
                />
                {/* <CardComponent
                    image={CertsPic}
                    heading="Certificates"
                    description="Check out my certificates!"
                    link="/Certificates"
                /> */}
                <CardComponent
                    image={InternshipPic}
                    heading="Internships"
                    description="Explore my internship journey where I work in various companies."
                    link="/Internships"
                />
            </Grid>
        </Center>
    );
};

const CardComponent = ({ image, heading, description, link }) => {
    return (
        <LinkBox
            as="article"
            maxW="xl"
            mx="auto"
            maxH="xl"
            borderRadius="xl"
            backgroundColor={themeColors.justWhite}
        >
            <Card
                borderRadius="xl"
                backgroundColor={themeColors.justWhite}
                cursor="pointer"
                overflow="hidden"
                _hover={{ boxShadow: "xl" }} // Hover effect
                borderColor="black"
                borderWidth="2px"
            >
                <CardBody p={0} mb={3}>
                    <LinkOverlay as={Link} to={link}>
                        <Center>
                            <Image
                                src={image}
                                alt="Project Image"
                                borderTopRadius="xl" // Rounds the top of the image
                                h="350px"
                                w="100%"
                                objectFit="cover" // Ensures the image covers the area without stretching
                            />
                        </Center>
                        <Box
                            w="100%"
                            h="2px" // Adjust height as needed
                            bg="black" // Use any color you like
                            borderRadius="full" // Make it rounded
                        />
                        <Stack textAlign="center" mt="3" spacing="3">
                            <Heading size="md">{heading}</Heading>
                            <Text>{description}</Text>
                        </Stack>
                    </LinkOverlay>
                </CardBody>
            </Card>
        </LinkBox>
    );
};

export default Project;
