import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    IconButton,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

const TimelineModal = ({ isOpen, onClose, milestone }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{milestone.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p style={{ marginBottom: "10px" }}>{milestone.date}</p>
                    {milestone.description.map((paragraph, index) => (
                        <p style={{ marginBottom: "10px" }} key={index}>
                            {paragraph}
                        </p>
                    ))}
                    {/* Render the link button conditionally */}
                    {milestone.link && (
                        <Link to={`${milestone.link}`}>
                            <p style={{ marginTop: "20px" }}>
                                <u>Link to more information! </u>
                                <IconButton
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    icon={<FaExternalLinkAlt />}
                                    ml={2}
                                />
                            </p>
                        </Link>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default TimelineModal;
