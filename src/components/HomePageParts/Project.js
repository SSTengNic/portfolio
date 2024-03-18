import {
    Container,
    Text,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Button,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import webAppPic from "../../pictures/Web_Application_Pic.jpeg";
import MLPic from "../../pictures/Machine_Learning_Card_Picture.png";
import PersonalProjectPic from "../../pictures/School_Projects_Card_Front_Page.jpg";
import CertsPic from "../../pictures/Certs_pic.jpg";

import React from "react";

function Project() {
    return (
        <Container
            boxShadow="xl"
            p={4}
            borderRadius="md"
            w="100%"
            maxW="600px"
            mb={4}
            textAlign="center"
        >
            <Text mb={5} fontSize="3xl">
                My Projects
            </Text>
            <Tabs isFitted variant="enclosed">
                <Wrap spacing="1em" justify="center">
                    <WrapItem>
                        <Tab> Web Application Projects </Tab>
                    </WrapItem>
                    <WrapItem>
                        <Tab>Machine Learning Projects</Tab>
                    </WrapItem>
                    <WrapItem>
                        <Tab>Other Projects</Tab>
                    </WrapItem>
                    <WrapItem>
                        <Tab>Certificates</Tab>
                    </WrapItem>
                </Wrap>
                <TabPanels>
                    <TabPanel mx="auto">
                        <Card maxW="sm" mx="auto">
                            {" "}
                            {/* Use mx="auto" to center-align the card */}
                            <CardBody>
                                <Image
                                    src={webAppPic}
                                    alt="web App Picture"
                                    borderRadius="20px"
                                    mx="auto"
                                />
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">
                                        Fullstack Web Applications
                                    </Heading>
                                    <Text>
                                        Click on the button below to check out
                                        my personal projects crafted with
                                        MongoDB/MySQL databases, Express.js,
                                        React.js and Node.js (MERN)!
                                    </Text>
                                    <Link to="/WebappProjects">
                                        <Button
                                            variant="solid"
                                            colorScheme="blue"
                                        >
                                            Click Here
                                        </Button>
                                    </Link>
                                </Stack>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card maxW="sm" mx="auto">
                            {" "}
                            {/* Use mx="auto" to center-align the card */}
                            <CardBody>
                                <Image
                                    src={MLPic}
                                    alt="ML Brain Picture"
                                    borderRadius="20px"
                                />
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">
                                        Kaggle & Personal Machine Learning
                                        Projects
                                    </Heading>
                                    <Text>
                                        Click on the button below to check out
                                        my Kaggle and other projects I have done
                                        with Machine Learning!
                                    </Text>
                                    <Link to="/MLProjects">
                                        <Button
                                            variant="solid"
                                            colorScheme="blue"
                                        >
                                            Click Here
                                        </Button>
                                    </Link>
                                </Stack>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card maxW="sm" mx="auto">
                            {" "}
                            {/* Use mx="auto" to center-align the card */}
                            <CardBody>
                                <Image
                                    src={PersonalProjectPic}
                                    alt="3.007 Picture"
                                    borderRadius="20px"
                                />
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">
                                        My School Projects
                                    </Heading>
                                    <Text>
                                        Check out the projects that I have done
                                        for school work!
                                    </Text>
                                    <Link to="/SchoolProjects">
                                        <Button
                                            variant="solid"
                                            colorScheme="blue"
                                        >
                                            Click Here
                                        </Button>
                                    </Link>
                                </Stack>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card maxW="sm" mx="auto">
                            {/* Use mx="auto" to center-align the card */}
                            <CardBody>
                                <Stack
                                    mt="3"
                                    spacing="3"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Image
                                        src={CertsPic}
                                        alt="3.007 Picture"
                                        borderRadius="20px"
                                        boxSize="200px"
                                    />
                                    {/* Adjust the "boxSize" value to your desired size */}
                                    <Heading size="md">Certificates</Heading>
                                    <Text>Check out my certificates!</Text>
                                    <Link to="/Certificates">
                                        <Button
                                            variant="solid"
                                            colorScheme="blue"
                                        >
                                            Click Here
                                        </Button>
                                    </Link>
                                </Stack>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

export default Project;
