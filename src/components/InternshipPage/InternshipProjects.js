import {
    Container,
    Text,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Tabs,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    useDisclosure,
    Button,
} from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    SimpleGrid,
    IconButton,
    Box,
    Divider,
    AspectRatio,
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";
import React, { Component } from "react";
import ReactPlayer from "react-player";

import RCKPic from "../../pictures/UiPath robot.jpg";

function InternshipProjects() {
    const {
        isOpen: isRCKModalOpen,
        onOpen: onRCKOpen,
        onClose: onRCKClose,
    } = useDisclosure();

    return (
        <Container textAlign="center">
            <Text mb={5} fontSize="3xl">
                Internships
            </Text>
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    <Tab>SimplifyNext (Uipath)</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card maxW="sm" mx="auto">
                            <CardBody mx="auto">
                                <Image
                                    src={RCKPic}
                                    alt="RCK Pic"
                                    borderRadius="20px"
                                ></Image>
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">
                                        {" "}
                                        SimplifyNext (Uipath)
                                    </Heading>
                                    <Button onClick={onRCKOpen}>More</Button>
                                    <Modal
                                        isCentered
                                        isOpen={isRCKModalOpen}
                                        onClose={onRCKClose}
                                        motionPreset="SlideInBottom"
                                        size="3xl"
                                    >
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalContent>
                                                <ModalHeader>
                                                    Learning UiPath in
                                                    SimplifyNext
                                                </ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <Box>
                                                        <Heading mb={2}>
                                                            What is UiPath?
                                                        </Heading>
                                                        <AspectRatio
                                                            ratio={4 / 3}
                                                            mb={4}
                                                        >
                                                            <iframe
                                                                width="560"
                                                                height="315"
                                                                src="https://www.youtube.com/embed/OcvTO1j7K9o?si=mDStZLt80kMgWx96"
                                                                title="YouTube video player"
                                                                frameborder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                allowfullscreen
                                                            ></iframe>
                                                        </AspectRatio>

                                                        <Text
                                                            fontSize="lg"
                                                            mb={5}
                                                        >
                                                            {" "}
                                                            Digital Automation
                                                            stands poised to
                                                            revolutionize the
                                                            modern workplace.
                                                            Currently, many
                                                            companies rely on
                                                            manual data entry
                                                            performed by people,
                                                            a practice prone to
                                                            human error and
                                                            excessive costs.
                                                            UiPath, however,
                                                            presents a
                                                            transformative
                                                            solution by
                                                            introducing 'robots'
                                                            capable of executing
                                                            these tasks under
                                                            human supervision
                                                        </Text>

                                                        <Text
                                                            fontSize="lg"
                                                            mb={5}
                                                        >
                                                            {" "}
                                                            The video above
                                                            displays one of
                                                            UiPath's Exercise,
                                                            where the robot is
                                                            tasked to extract
                                                            information from a
                                                            webpage, formatt it
                                                            into an Excel sheet,
                                                            upload it, retriev
                                                            the upload ID, and
                                                            ultimately complete
                                                            the upload, all
                                                            seamlessly automated
                                                            without any errors.
                                                        </Text>
                                                        <Heading>
                                                            Roles and
                                                            Responsibilities
                                                        </Heading>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                        >
                                                            When presented with
                                                            the opportunity to
                                                            immerse myself in
                                                            UiPath during my
                                                            internship at
                                                            SimplifyNext, I
                                                            embraced it eagerly.
                                                            This experience
                                                            enabled me to craft
                                                            automation robots
                                                            that empower
                                                            SimplifyNext's
                                                            clients to recapture
                                                            countless hours once
                                                            devoted to mundane
                                                            tasks. It not only
                                                            equipped me with a
                                                            transformative tool
                                                            capable of saving
                                                            countless hours of
                                                            manual work but also
                                                            underscored the
                                                            immense value and
                                                            potential of digital
                                                            automation.
                                                        </Text>
                                                    </Box>
                                                </ModalBody>
                                            </ModalContent>
                                        </ModalContent>
                                    </Modal>
                                </Stack>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

export default InternshipProjects;
