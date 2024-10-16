import { Text, Heading } from "@chakra-ui/react";

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

import React from "react";
import ModalCardComponent from "../../Shared/ModalCardComponent";

const SimplifyNextCardNugget = ({
    onModalOpen,
    isModalOpen,
    onModalClose,
    thumbnailPic,
    cardHeader,
    modalHeader,
    modalBodyHeading1,
    modalBodyHeading2,
    modalBodyVideo,
    modalBodyDescription1,
    modalBodyDescription2,
    modalBodyDescription3,
    heading,
}) => {
    return (
        <ModalCardComponent
            onModalOpen={onModalOpen}
            thumbnailPic={thumbnailPic}
            heading={heading}
        >
            <Text textAlign="left" ml={2} mb={3} spacing="">
                In a design thinking module, I lead my team throughout the
                course to build an <b>innovative pond cleaning system</b>
                inspired by Koi fish🐟, known for effective up pond effectively.
            </Text>
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
                                <Heading mb={2}>{modalBodyHeading1}</Heading>
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

                                <Text fontSize="lg" mb={5}>
                                    {" "}
                                    {modalBodyDescription2}
                                </Text>
                                <Heading mb={2}>{modalBodyHeading2}</Heading>
                                <Text fontSize="lg" mb={4}>
                                    {modalBodyDescription3}
                                </Text>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </ModalContent>
            </Modal>
        </ModalCardComponent>
    );
};

export default SimplifyNextCardNugget;
