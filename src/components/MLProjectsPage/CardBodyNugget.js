import React from "react";
import {
    Text,
    Card,
    Image,
    CardBody,
    Stack,
    Heading,
    Button,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    IconButton,
    Box,
    Divider,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CardBodyNugget = ({
    thumbnailPic,
    Header,
    onModalOpen,
    isModelOpen,
    onModalClose,
    modalHeader,
    modalText,
    kaggleWebpage,
    pythonNotebook,
    precisionScores,
}) => {
    console.log("precision Score: ", precisionScores);
    return (
        <Card maxW="sm" mx="auto">
            <CardBody>
                <Image
                    src={thumbnailPic}
                    alt="Thumbnail"
                    borderRadius="20px"
                    boxSize="100px" // Set the smaller image size
                    objectFit="cover" // Ensure the image fills the container
                    mx="auto" // Center the image horizontally
                    my={2} // Add margin to center the image vertically
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{Header}</Heading>
                    <Button onClick={onModalOpen}>More</Button>
                    <Modal
                        isCentered
                        isOpen={isModelOpen}
                        onClose={onModalClose}
                        motionPreset="slideInBottom"
                        size="xl"
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{modalHeader}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Box>
                                    <Text fontSize="lg" mb={10}>
                                        {modalText}
                                    </Text>
                                    <Text fontSize="lg" mb={4}>
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            Precision Score (Weighted Average):
                                        </span>
                                        <UnorderedList>
                                            {precisionScores.map(
                                                (score, index) => (
                                                    <ListItem key={index}>
                                                        {score.text}
                                                        {" - "}
                                                        <strong>
                                                            {score.value}
                                                        </strong>
                                                    </ListItem>
                                                )
                                            )}
                                        </UnorderedList>
                                    </Text>
                                    <Divider mb={4} />{" "}
                                    {/* Add a divider with margin */}
                                    <Text fontSize="lg">
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            Links:
                                        </span>
                                    </Text>
                                    <UnorderedList spacing={2}>
                                        <ListItem>
                                            <Text fontSize="lg">
                                                To Python Notebook{" "}
                                                <IconButton
                                                    as="a"
                                                    href={pythonNotebook}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    icon={<FaExternalLinkAlt />}
                                                    ml={2}
                                                />
                                            </Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text fontSize="lg">
                                                To Kaggle webpage{" "}
                                                <IconButton
                                                    as="a"
                                                    href={kaggleWebpage}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    icon={<FaExternalLinkAlt />}
                                                    ml={4}
                                                />
                                            </Text>
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                    colorScheme="blue"
                                    mr={3}
                                    onClick={onModalClose}
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default CardBodyNugget;
