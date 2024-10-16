import { Text, Heading, IconButton, Link } from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Box,
} from "@chakra-ui/react";
import ModalCardComponent from "../../Shared/ModalCardComponent";

import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
const PinchPromoCardNugget = ({
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
    modalBodyHeading4,
    modalBodyHeading5,
    modalBodyDescription5,
    modalBodyVideo,
}) => {
    return (
        <ModalCardComponent
            onModalOpen={onModalOpen}
            thumbnailPic={thumbnailPic}
            heading={heading}
        >
            <Text textAlign="left" ml={2} mb={3} spacing="">
                Seeing the need for more <b>student-focused deals</b>, my
                friends and I created PinchPromo—a web app that brings exclusive
                student discounts💰 to life through gamification!😎 Click here
                to learn more.
            </Text>

            <Modal
                isCentered
                isOpen={isModalOpen}
                onClose={onModalClose}
                motionPreset="slideInBottom"
                size="5xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <Heading>{modalBodyHeading1}</Heading>
                            <Text fontSize="lg" mb={4}>
                                {modalBodyDescription1}
                            </Text>

                            <Heading>{modalBodyHeading2}</Heading>
                            <Text fontSize="lg" mb={4}>
                                {modalBodyDescription2}
                            </Text>
                            <Text fontSize="lg" mb={4}>
                                {modalBodyDescription3}
                            </Text>

                            <Heading>{modalBodyHeading4}</Heading>
                            <Link
                                href={modalBodyVideo}
                                target="_blank"
                                rel="noopener noreferrer"
                                textDecoration="underline"
                            >
                                {modalBodyHeading4}
                                <IconButton
                                    as="span"
                                    icon={<FaExternalLinkAlt />}
                                    ml={2}
                                />
                            </Link>

                            <Heading>{modalBodyHeading5}</Heading>
                            <Text fontSize="lg" mb={4}>
                                {modalBodyDescription5}
                            </Text>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </ModalCardComponent>
    );
};

export default PinchPromoCardNugget;
