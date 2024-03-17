import React from "react";

import {
    Container,
    Text,
    Card,
    Image,
    CardBody,
    Stack,
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
    useDisclosure,
    SimpleGrid,
    Box,
    Divider,
} from "@chakra-ui/react";
import fullstackPick from "../../pictures/certpics/FullStack Certificate.png";
import UiPathAdvancedDeveloper from "../../pictures/certpics/UiPath_RPA_Developer_Advanced_Cert.jpg";
import NPLogoPic from "../../pictures/Ngee_Ann_Polytechnic_logo.jpg";
function Certificate() {
    const {
        isOpen: isFullstackOpen,
        onOpen: onFullstackOpen,
        onClose: onFullstackClose,
    } = useDisclosure();
    const {
        isOpen: isUiPathAdvancedOpen,
        onOpen: onUiPathAdvancedOpen,
        onClose: onUiPathAdvancedClose,
    } = useDisclosure();

    const {
        isOpen: isHighestQualificationOpen,
        onOpen: onHighestQualificationOpen,
        onClose: onHighestQualificationClose,
    } = useDisclosure();

    return (
        <Container textAlign="center">
            <SimpleGrid spacing={2}>
                <Text fontSize="2xl">
                    <strong>Current Highest Qualification</strong>
                </Text>
                <Divider></Divider>
                <Card>
                    <CardBody>
                        <Image
                            alignSelf="center"
                            src={NPLogoPic}
                            alt="Certificate"
                            borderRadius="20px"
                            objectFit="cover" // Ensure the image fills the container
                            mx="auto" // Center the image horizontally
                            my={2} // Add margin to center the image vertically
                        />
                        <Stack mt="6" spacing="3">
                            <Text fontSize="lg">
                                Ngee Ann Polytechnic Engineering Science
                            </Text>
                            <Button
                                onClick={onHighestQualificationOpen}
                                w="120px"
                                h="40px"
                                mx="auto"
                            >
                                More
                            </Button>
                            <Modal
                                isCentered
                                isOpen={isHighestQualificationOpen}
                                onClose={onHighestQualificationClose}
                                motionPreset="slideInBottom"
                                size="xl"
                            >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>
                                        Diploma and Transcript
                                    </ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Box>
                                            <Text
                                                fontSize="lg"
                                                mb={4}
                                                textAlign="center"
                                                style={{
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                {" "}
                                                <strong>
                                                    How to download my Diploma
                                                    and Transcript
                                                </strong>
                                            </Text>
                                            <Text fontSize="lg" mb={4}>
                                                <strong>Step 1:</strong>{" "}
                                                Download the opencert files:{" "}
                                                <a
                                                    href={`${process.env.PUBLIC_URL}/Nicholas_Teng_opencert.zip`}
                                                    download="Nicholas_Teng_opencert.zip"
                                                    style={{
                                                        textDecoration:
                                                            "underline",
                                                        color: "lightblue",
                                                    }}
                                                >
                                                    Nicholas_Teng_opencert.zip
                                                </a>
                                            </Text>
                                            <Text fontSize="lg" mb={4}>
                                                <strong>Step 2:</strong> Unzip
                                                the zip folder, revealing 2
                                                opencert files.
                                            </Text>
                                            <Text fontSize="lg" mb={4}>
                                                <strong>Step 3:</strong> Open
                                                this webpage:{" "}
                                                <a
                                                    href="https://www.opencerts.io/viewer"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        textDecoration:
                                                            "underline",
                                                        color: "lightblue",
                                                    }}
                                                >
                                                    www.opencerts.io/viewer
                                                </a>
                                            </Text>
                                            <Text fontSize="lg" mb={10}>
                                                <strong>Step 4:</strong> Insert
                                                the files into the webpage to
                                                verify the files.
                                            </Text>
                                            <Divider></Divider>

                                            <Text fontSize="lg" mb={4}>
                                                If the download link{" "}
                                                <strong>isn't working</strong>,
                                                please try a different browser
                                                (like Edge) or contact me at{" "}
                                                <strong>
                                                    nicholasteng3006@gmail.com
                                                </strong>{" "}
                                                for the files instead. 😊
                                            </Text>
                                        </Box>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button
                                            colorScheme="blue"
                                            mr={3}
                                            onClick={
                                                onHighestQualificationClose
                                            }
                                        >
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Stack>
                    </CardBody>
                </Card>
                <Text fontSize="2xl">
                    <strong>Miscellaneous</strong>
                </Text>
                <Divider></Divider>
                <CertificateCard
                    image={fullstackPick}
                    onOpen={onFullstackOpen}
                    description="University of Helsinki, FullStack Certificate of Completion"
                />

                <CertificateCard
                    image={UiPathAdvancedDeveloper}
                    onOpen={onUiPathAdvancedOpen}
                    description="UiPath RPA Developer Advanced Diploma"
                />
                {/* Add more CertificateCard components for other certificates */}
            </SimpleGrid>

            <CertificateModal
                isOpen={isFullstackOpen}
                onClose={onFullstackClose}
                image={fullstackPick}
            />
            <CertificateModal
                isOpen={isUiPathAdvancedOpen}
                onClose={onUiPathAdvancedClose}
                image={UiPathAdvancedDeveloper}
            />
            {/* Add more CertificateModal components for other certificates */}
        </Container>
    );
}

function CertificateCard({ image, onOpen, description }) {
    return (
        <Card onClick={onOpen} cursor="pointer">
            <CardBody>
                <Image
                    alignSelf="center"
                    src={image}
                    alt="Certificate"
                    borderRadius="20px"
                    // Set the smaller image size
                    objectFit="cover" // Ensure the image fills the container
                    mx="auto" // Center the image horizontally
                    my={2} // Add margin to center the image vertically
                />
                <Text fontSize="lg" mt={5}>
                    {description}
                </Text>
            </CardBody>
        </Card>
    );
}

function CertificateModal({ isOpen, onClose, image }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="auto">
            {/* Set the size to "auto" to dynamically adjust */}
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Image
                        src={image}
                        alt="Certificate"
                        borderRadius="20px"
                        maxW="90%" // Set maximum width to ensure it fits within the modal
                        maxH="80vh" // Set maximum height to limit the modal height
                        mx="auto" // Center the image horizontally
                        mt={8}
                        mb={8}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default Certificate;
