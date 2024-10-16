import {
    Text,
    Heading,
    IconButton,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Box,
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import ModalCardComponent from "../../Shared/ModalCardComponent";
const BloglistCardNugget = ({
    heading,
    onModalOpen,
    isModalOpen,
    onModalClose,
    thumbnailPic,
    modalHeader,
    modalBodyHeading1,
    modalBodyHeading4,
    modalBodyDescription1,
    modalBodyDescription2,
    modalBodyDescription3,
    modalBodyDescription4,
    modalBodyDescription5,
}) => {
    return (
        <ModalCardComponent
            onModalOpen={onModalOpen}
            thumbnailPic={thumbnailPic}
            heading={heading}
        >
            <Text textAlign="left" ml={2} mb={3} spacing="">
                I developed <b>two versions</b> of a blog list: one using the
                MERN stack and another utilizing MySQL database💽. Click to
                explore their features!🙂
            </Text>
            <Modal
                isCentered
                isOpen={isModalOpen}
                onClose={onModalClose}
                motionPreset="SlideInBottom"
                size="5xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalContent>
                        <ModalHeader>{modalHeader}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box>
                                <Heading>{modalBodyHeading1} </Heading>
                                <Text fontSize="lg" mb={4}>
                                    {modalBodyDescription1}.{" "}
                                </Text>
                                <Text fontSize="lg" mb={4}>
                                    {modalBodyDescription2}
                                </Text>
                                <Text fontSize="lg" mb={4}>
                                    {modalBodyDescription3}
                                </Text>

                                <Heading>Features of the app </Heading>
                                <Text fontSize="lg" mb={4}>
                                    <List spacing={3}>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            Users can log in and out of their
                                            accounts seamlessly.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            Passwords are secured via encryption
                                            using JSON Web Tokens (JWT) and
                                            bcrypt.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            Blog posts include essential details
                                            like name, author, and URL.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            Only blog creators can delete their
                                            posts, enforced in both frontend and
                                            backend.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            Users can 'like' blogs, with popular
                                            ones sorted to the top of the list.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            Separate versions for MySQL and
                                            MongoDB databases.{" "}
                                        </ListItem>
                                    </List>
                                </Text>
                                <Text
                                    fontSize="lg"
                                    mb={4}
                                    style={{
                                        textDecoration: "underline",
                                    }}
                                >
                                    Link to Github Repo
                                    <IconButton
                                        as="a"
                                        href="https://github.com/SSTengNic/BloglistWebApp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        icon={<FaExternalLinkAlt />}
                                        ml={2}
                                    />
                                </Text>

                                <Heading>{modalBodyHeading4}</Heading>
                                <Text fontSize="lg" mb={4}>
                                    {modalBodyDescription4}{" "}
                                </Text>
                                <Text>{modalBodyDescription5}</Text>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </ModalContent>
            </Modal>
        </ModalCardComponent>
    );
};

export default BloglistCardNugget;
