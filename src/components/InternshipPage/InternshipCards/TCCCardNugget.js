import {
    Text,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Button,
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
import React, { Component } from "react";
import ReactPlayer from "react-player";

const TCCCardNugget = ({
    onModalOpen,
    isModalOpen,
    onModalClose,
    thumbnailPic,
    cardHeader,
    modalHeader,
    modalBodyHeading1,
    modalBodyHeading2,
    modalBodyHeading3,
    modalBodyVideo,
    modalBodyDescription1,
    modalBodyDescription2,
    modalBodyDescription3,
}) => {
    return (
        <Card maxW="sm" mx="auto">
            <CardBody mx="auto">
                <Image
                    src={thumbnailPic}
                    alt="RCK Pic"
                    borderRadius="20px"
                ></Image>
                <Stack mt="6" spacing="3">
                    <Heading size="md">{cardHeader}</Heading>
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
                                        <Heading mb={2}>
                                            {modalBodyHeading2}
                                        </Heading>
                                        <Text fontSize="lg" mb={5}>
                                            {" "}
                                            {modalBodyDescription2}
                                        </Text>
                                        <Heading mb={2}>
                                            {modalBodyHeading3}
                                        </Heading>
                                        <Text fontSize="lg" mb={5}>
                                            {modalBodyDescription3}
                                        </Text>
                                    </Box>
                                </ModalBody>
                            </ModalContent>
                        </ModalContent>
                    </Modal>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default TCCCardNugget;
