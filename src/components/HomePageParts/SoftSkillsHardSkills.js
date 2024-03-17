import {
    SimpleGrid,
    Card,
    CardHeader,
    Heading,
    CardBody,
    CardFooter,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { FaWrench, FaHandshake, FaGlobe } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";

function SoftSkillSHardSkills() {
    return (
        <SimpleGrid columns={2} spacing={2}>
            <Card
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CardHeader>
                    <Heading style={{ fontSize: "28px" }} mb={-5}>
                        <span style={{ display: "flex", alignItems: "center" }}>
                            Soft Skills{" "}
                            <FaHandshake style={{ marginLeft: "15px" }} />
                        </span>
                    </Heading>
                </CardHeader>
                <CardBody textAlign="left" mb={-5}>
                    {" "}
                    {/* Align the text to the left */}
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            Entreprenuership
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            Leadership
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            Problem-Solving
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            Teamwork
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            Communication
                        </ListItem>
                    </List>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>

            <Card
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CardHeader>
                    <Heading style={{ fontSize: "28px" }} mb={-5}>
                        <span style={{ display: "flex", alignItems: "center" }}>
                            Hard Skills{" "}
                            <FaWrench style={{ marginLeft: "15px" }} />
                        </span>
                    </Heading>
                </CardHeader>
                <CardBody textAlign="left" mb={-5}>
                    {" "}
                    {/* Align the text to the left */}
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            MERN Stack Development
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            MySQL Backend Development
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            Python
                        </ListItem>

                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            Machine Learning
                        </ListItem>

                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            UiPath
                        </ListItem>
                    </List>
                </CardBody>
            </Card>

            {/* Additional Card at the bottom */}
            <Card
                style={{
                    gridColumn: "span 2",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CardHeader>
                    <Heading size="md">
                        <span style={{ display: "flex", alignItems: "center" }}>
                            Languages <FaGlobe style={{ marginLeft: "15px" }} />
                        </span>
                    </Heading>
                </CardHeader>
                <CardBody textAlign="left" mb={-10}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            Fluent in English
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={AiFillCheckCircle}
                                color="green.500"
                            />
                            Fluent in Mandarin
                        </ListItem>
                    </List>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
        </SimpleGrid>
    );
}

export default SoftSkillSHardSkills;
