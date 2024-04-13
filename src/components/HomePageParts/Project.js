import React from "react";
import {
    Container,
    Text,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Button,
    Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import webAppPic from "../../pictures/Web_Application_Pic.jpeg";
import MLPic from "../../pictures/Machine_Learning_Card_Picture.png";
import PersonalProjectPic from "../../pictures/School_Projects_Card_Front_Page.jpg";
import CertsPic from "../../pictures/Certs_pic.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Container
            boxShadow="transparent"
            p={4}
            borderRadius="md"
            w="100%"
            maxW="600px"
            mb={4}
            textAlign="center"
        >
            <Text mb={5} fontSize="3xl">
                <b>My Projects </b>
            </Text>

            <Slider {...settings}>
                <div>
                    <CardComponent
                        image={webAppPic}
                        heading="Fullstack Web Applications"
                        description="Check out my personal projects crafted with MERN Stack and MySQL!"
                        link="/WebappProjects"
                    />
                </div>
                <div>
                    <CardComponent
                        image={MLPic}
                        heading="Machine Learning Projects"
                        description="Check out my Kaggle and other projects I have done with Machine Learning!"
                        link="/MLProjects"
                    />
                </div>
                <div>
                    <CardComponent
                        image={PersonalProjectPic}
                        heading="My School Projects"
                        description="Check out the projects that I have done for school work!"
                        link="/SchoolProjects"
                    />
                </div>
                <div>
                    <CardComponent
                        image={CertsPic}
                        heading="Certificates"
                        description="Check out my certificates!"
                        link="/Certificates"
                    />
                </div>
            </Slider>
        </Container>
    );
};

const CardComponent = ({ image, heading, description, link }) => {
    return (
        <Card
            maxW="md"
            mx="auto"
            maxH="l"
            borderRadius="xl"
            backgroundColor="transparent"
        >
            <CardBody>
                <Center>
                    <Image
                        src={image}
                        alt="Project Image"
                        borderRadius="20px"
                        // Ensure that the image maintains its aspect ratio
                        h="230px"
                        width="80%"
                    />
                </Center>
                <Stack mt="6" spacing="3">
                    <Heading size="md">{heading}</Heading>
                    <Text>{description}</Text>
                    <Link to={link}>
                        <Button variant="solid" colorScheme="blue">
                            Click Here
                        </Button>
                    </Link>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default Project;
