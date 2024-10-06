import {
    Text,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    IconButton,
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

const HungrysiaCardNugget = ({
    onModalOpen,
    isModalOpen,
    onModalClose,
    thumbnailPic,
    heading,
    modalHeader,
    modalBodyHeading1,
    modalBodyHeading2,
    modalBodyHeading3,
    modalBodyHeading4,
    modalBodyDescription1,
    modalBodyDescription2,
    modalBodyDescription3,
    modalBodyDescription4,
}) => {
    return (
        <Card maxW="sm" mx="auto">
            <CardBody>
                <Image
                    src={thumbnailPic}
                    alt="Hungrysia Pic"
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
                        size="5xl"
                    >
                        <ModalOverlay />

                        <ModalContent>
                            <ModalHeader>{modalHeader}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Box>
                                    <Heading>{modalBodyHeading1}</Heading>

                                    <Text fontSize="lg" mb={10}>
                                        {" "}
                                        {modalBodyDescription1}
                                    </Text>
                                    <Heading>{modalBodyHeading2}</Heading>
                                    <Text fontSize="lg" mb={10}>
                                        {modalBodyDescription2}
                                    </Text>

                                    <Text fontSize="lg" mb={10}>
                                        {modalBodyDescription3}
                                    </Text>
                                    <Heading>Exit</Heading>

                                    <Text fontSize="lg" mb={10}>
                                        {modalBodyDescription4}
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        mb={4}
                                        style={{
                                            textDecoration: "underline",
                                        }}
                                    >
                                        Join the Hungrysia@SUTD Telegram Group
                                        to order!
                                        <IconButton
                                            as="a"
                                            href="https://t.me/sutdhstg"
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

export default HungrysiaCardNugget;
