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
    IconButton,
    Box,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import React from "react";
import BloglistPic from "../../pictures/WebAppPage_Thumbnails/Bloglist_Page.png";
import ObjectsToUse from "./WebAppCards/WebAppWriteup";

import BloglistCardNugget from "./WebAppCards/BloglistCardNugget";

const WebAppBody = () => {
    const {
        isOpen: isBlogListOpen,
        onOpen: onBlogListOpen,
        onClose: onBlogListClose,
    } = useDisclosure();

    return (
        <Container textAlign="center">
            <Text mb={5} fontSize="3xl">
                FullStack Projects
            </Text>
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    <Tab>Bloglist</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <BloglistCardNugget
                            heading={ObjectsToUse.BloglistObject.heading}
                            onModalOpen={onBlogListOpen}
                            isModalOpen={isBlogListOpen}
                            onModalClose={onBlogListClose}
                            thumbnailPic={BloglistPic}
                            modalHeader={
                                ObjectsToUse.BloglistObject.modalHeader
                            }
                            modalBodyHeading1={
                                ObjectsToUse.BloglistObject.modalBodyHeading1
                            }
                            modalBodyHeading4={
                                ObjectsToUse.BloglistObject.modalBodyHeading4
                            }
                            modalBodyDescription1={
                                ObjectsToUse.BloglistObject
                                    .modalBodyDescription1
                            }
                            modalBodyDescription2={
                                ObjectsToUse.BloglistObject
                                    .modalBodyDescription1
                            }
                            modalBodyDescription3={
                                ObjectsToUse.BloglistObject
                                    .modalBodyDescription3
                            }
                            modalBodyDescription4={
                                ObjectsToUse.BloglistObject
                                    .modalBodyDescription4
                            }
                            modalBodyDescription5={
                                ObjectsToUse.BloglistObject
                                    .modalBodyDescription4
                            }
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
};

export default WebAppBody;
