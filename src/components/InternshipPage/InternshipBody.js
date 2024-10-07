import {
    Container,
    Text,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Tabs,
    useDisclosure,
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";
import React, { Component } from "react";
import SimplifyNextCardNugget from "./InternshipCards/SimplifyNextCardNugget";
import TCCCardNugget from "./InternshipCards/TCCCardNugget";

import ObjectsToUse from "./InternshipCards/InternshipWriteup";

import UiPathPic from "../../pictures/UiPath robot.jpg";
import TCCPic from "../../pictures/Internship_Thumbnails/1TCC_logo.jpg";

function InternshipProjects() {
    const {
        isOpen: isSimplifyNextModalOpen,
        onOpen: onSimplifyNextOpen,
        onClose: onSimplifyNextClose,
    } = useDisclosure();

    const {
        isOpen: isTCCModalOpen,
        onOpen: onTCCOpen,
        onClose: onTCCClose,
    } = useDisclosure();

    return (
        <Container textAlign="center">
            <Text mb={5} fontSize="3xl">
                Internships
            </Text>
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    <Tab>SimplifyNext (Uipath)</Tab>
                    <Tab>1TCC</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SimplifyNextCardNugget
                            isModalOpen={isSimplifyNextModalOpen}
                            onModalOpen={onSimplifyNextOpen}
                            onModalClose={onSimplifyNextClose}
                            thumbnailPic={UiPathPic}
                            cardHeader={
                                ObjectsToUse.SimplifyNextObject.cardHeader
                            }
                            modalHeader={
                                ObjectsToUse.SimplifyNextObject.modalHeader
                            }
                            modalBodyHeading1={
                                ObjectsToUse.SimplifyNextObject
                                    .modalBodyHeading1
                            }
                            modalBodyHeading2={
                                ObjectsToUse.SimplifyNextObject
                                    .modalBodyHeading2
                            }
                            modalBodyVideo={
                                ObjectsToUse.SimplifyNextObject.modalBodyVideo
                            }
                            modalBodyDescription1={
                                ObjectsToUse.SimplifyNextObject
                                    .modalBodyDescription1
                            }
                            modalBodyDescription2={
                                ObjectsToUse.SimplifyNextObject
                                    .modalBodyDescription2
                            }
                            modalBodyDescription3={
                                ObjectsToUse.SimplifyNextObject
                                    .modalBodyDescription3
                            }
                        />
                    </TabPanel>
                    <TabPanel>
                        {" "}
                        <TCCCardNugget
                            isModalOpen={isTCCModalOpen}
                            modalHeader={ObjectsToUse.TCCObject.modalHeader}
                            onModalOpen={onTCCOpen}
                            onModalClose={onTCCClose}
                            cardHeader={ObjectsToUse.TCCObject.cardHeader}
                            thumbnailPic={TCCPic}
                            modalBodyHeading1={
                                ObjectsToUse.TCCObject.modalBodyHeading1
                            }
                            modalBodyHeading2={
                                ObjectsToUse.TCCObject.modalBodyHeading2
                            }
                            modalBodyHeading3={
                                ObjectsToUse.TCCObject.modalBodyHeading3
                            }
                            modalBodyVideo={
                                ObjectsToUse.TCCObject.modalBodyVideo
                            }
                            modalBodyDescription1={
                                ObjectsToUse.TCCObject.modalBodyDescription1
                            }
                            modalBodyDescription2={
                                ObjectsToUse.TCCObject.modalBodyDescription2
                            }
                            modalBodyDescription3={
                                ObjectsToUse.TCCObject.modalBodyDescription3
                            }
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

export default InternshipProjects;
