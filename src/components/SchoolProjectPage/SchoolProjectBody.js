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
    AspectRatio,
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import RCKPic from "../../pictures/School_Projects_Card_Front_Page.jpg";
import RCKCardNugget from "./SchoolProjectCards/RCKCardNugget";
import ObjectsToUse from "./SchoolProjectCards/SchoolProjectWriteup";

const SchoolProjectBody = () => {
    const {
        isOpen: isRCKModalOpen,
        onOpen: onRCKOpen,
        onClose: onRCKClose,
    } = useDisclosure();
    const {
        isOpen: isPinchPromoOpen,
        onOpen: onPinchPromoOpen,
        onClose: onPinchPromoClose,
    } = useDisclosure();
    return (
        <Container textAlign="center">
            <Text mb={5} fontSize="3xl">
                Projects
            </Text>
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    <Tab>Remote Controlled Koi (RCK)</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <RCKCardNugget
                            heading={ObjectsToUse.RCKObject.heading}
                            onModalOpen={onRCKOpen}
                            isModalOpen={isRCKModalOpen}
                            onModalClose={onRCKClose}
                            thumbnailPic={RCKPic}
                            modalHeader={ObjectsToUse.RCKObject.modalHeader}
                            modalBodyHeading1={
                                ObjectsToUse.RCKObject.modalBodyHeading1
                            }
                            modalBodyHeading2={
                                ObjectsToUse.RCKObject.modalBodyHeading2
                            }
                            modalBodyHeading3={
                                ObjectsToUse.RCKObject.modalBodyHeading3
                            }
                            modalBodyDescription1={
                                ObjectsToUse.RCKObject.modalBodyDescription1
                            }
                            modalBodyDescription2={
                                ObjectsToUse.RCKObject.modalBodyDescription2
                            }
                            modalBodyDescription3={
                                ObjectsToUse.RCKObject.modalBodyDescription3
                            }
                            modalBodyVideo={
                                ObjectsToUse.RCKObject.modalBodyVideo
                            }
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
};

export default SchoolProjectBody;
