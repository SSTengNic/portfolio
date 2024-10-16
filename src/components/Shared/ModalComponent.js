import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Box,
} from "@chakra-ui/react";

const ModalComponent = ({
    isModalOpen,
    onModalClose,
    modalHeader,
    children,
}) => {
    return (
        <Modal
            isCentered
            isOpen={isModalOpen}
            onClose={onModalClose}
            motionPreset="SlideInBottom"
            size="3xl"
        >
            <ModalOverlay />
            <ModalContent maxHeight="95vh" overflowY="auto" maxWidth="80vw">
                {" "}
                <ModalHeader>{modalHeader}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box>{children}</Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ModalComponent;
