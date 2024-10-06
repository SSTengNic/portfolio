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

import ObjectstoUse from "./InternshipCards/InternshipWriteup";

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
                                ObjectstoUse.SimplifyNextObject.cardHeader
                            }
                            modalHeader={
                                ObjectstoUse.SimplifyNextObject.modalHeader
                            }
                            modalBodyHeading1={
                                ObjectstoUse.SimplifyNextObject
                                    .modalBodyHeading1
                            }
                            modalBodyHeading2={
                                ObjectstoUse.SimplifyNextObject
                                    .modalBodyHeading2
                            }
                            modalBodyVideo={
                                ObjectstoUse.SimplifyNextObject.modalBodyVideo
                            }
                            modalBodyDescription1={
                                ObjectstoUse.SimplifyNextObject
                                    .modalBodyDescription1
                            }
                            modalBodyDescription2={
                                ObjectstoUse.SimplifyNextObject
                                    .modalBodyDescription2
                            }
                            modalBodyDescription3={
                                ObjectstoUse.SimplifyNextObject
                                    .modalBodyDescription3
                            }
                        />
                    </TabPanel>
                    <TabPanel>
                        {" "}
                        <TCCCardNugget
                            isModalOpen={isTCCModalOpen}
                            modalHeader={ObjectstoUse.TCCObject.modalHeader}
                            onModalOpen={onTCCOpen}
                            onModalClose={onTCCClose}
                            cardHeader={ObjectstoUse.TCCObject.cardHeader}
                            thumbnailPic={TCCPic}
                            modalBodyHeading1={
                                ObjectstoUse.TCCObject.modalBodyHeading1
                            }
                            modalBodyHeading2={
                                ObjectstoUse.TCCObject.modalBodyHeading2
                            }
                            modalBodyHeading3={
                                ObjectstoUse.TCCObject.modalBodyHeading3
                            }
                            modalBodyVideo={
                                ObjectstoUse.TCCObject.modalBodyVideo
                            }
                            modalBodyDescription1={
                                ObjectstoUse.TCCObject.modalBodyDescription1
                            }
                            modalBodyDescription2={
                                ObjectstoUse.TCCObject.modalBodyDescription2
                            }
                            modalBodyDescription3={
                                ObjectstoUse.TCCObject.modalBodyDescription3
                            }
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

export default InternshipProjects;
