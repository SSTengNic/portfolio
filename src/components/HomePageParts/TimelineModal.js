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
} from "@chakra-ui/react";

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
