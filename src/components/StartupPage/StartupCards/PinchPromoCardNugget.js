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
        <Card maxW="sm" mx="auto">
            <CardBody>
                <Image
                    src={thumbnailPic}
                    alt="PinchPromo Thumbnail"
                    borderRadius="20px"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{heading}</Heading>
                    <Button onClick={onModalOpen}>More</Button>
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
                </Stack>
            </CardBody>
        </Card>
    );
};

export default PinchPromoCardNugget;
