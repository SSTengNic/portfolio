import {
    Text,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    IconButton,
    Button,
    Link,
} from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Box,
    AspectRatio,
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";

const RCKCardNugget = ({
    heading,
    onModalOpen,
    isModalOpen,
    onModalClose,
    thumbnailPic,
    modalHeader,
    modalBodyHeading1,
    modalBodyHeading2,
    modalBodyHeading3,
    modalBodyDescription1,
    modalBodyDescription2,
    modalBodyDescription3,
    modalBodyVideo,
}) => {
    return (
        <Card maxW="sm" mx="auto">
            <CardBody>
                <Image
                    src={thumbnailPic}
                    alt="RCK Pic"
                    borderRadius="20px"
                ></Image>
                <Stack mt="6" spacing="3">
                    <Heading size="md"> {heading}</Heading>
                    <Button onClick={onModalOpen}>More</Button>
                    <Modal
                        isCentered
                        isOpen={isModalOpen}
                        onClose={onModalClose}
                        motionPreset="SlideInBottom"
                        size="3xl"
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{modalHeader}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Box>
                                    <Heading mb={2}>
                                        {modalBodyHeading1}
                                    </Heading>
                                    <AspectRatio ratio={4 / 2} mb={4}>
                                        <iframe
                                            width="560"
                                            height="315"
                                            src={modalBodyVideo}
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        ></iframe>
                                    </AspectRatio>
                                    <Text fontSize="lg" mb={5}>
                                        {" "}
                                        {modalBodyDescription1}
                                    </Text>
                                    <Heading>{modalBodyHeading2}</Heading>
                                    <Text fontSize="lg" mb={4}>
                                        {modalBodyDescription2}
                                    </Text>
                                    <Heading>{modalBodyHeading3}</Heading>
                                    <Text fontSize="lg" mb={4}>
                                        {modalBodyDescription3}
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        mb={4}
                                        style={{ textDecoration: "underline" }}
                                    >
                                        Comprehensive Documentation of RCK
                                        <IconButton
                                            as="a"
                                            href="http://asd.courses.sutd.edu.sg/dti-teams/dti-part-4/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            icon={<FaExternalLinkAlt />}
                                            ml={2}
                                        />
                                    </Text>
                                </Box>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default RCKCardNugget;
