import {
    Container,
    Text,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Tabs,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    useDisclosure,
    Button,
} from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    IconButton,
    Box,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import React from "react";
import PinchPromoPic from "../../pictures/PinchPromoLogo.jpg";
import HungrysiaPic from "../../pictures/HungrySiaLogo.jpg";

function Startups() {
    const {
        isOpen: isPinchPromoOpen,
        onOpen: onPinchPromoOpen,
        onClose: onPinchPromoClose,
    } = useDisclosure();
    const {
        isOpen: isHungrysiaOpen,
        onOpen: onHungrysiaOpen,
        onClose: onHungrysiaClose,
    } = useDisclosure();
    return (
        <Container textAlign="center">
            <Text mb={5} fontSize="3xl">
                Startups
            </Text>
        </Container>
    );
}

export default Startups;
