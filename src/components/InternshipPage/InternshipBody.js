import { Text, useDisclosure, Flex } from "@chakra-ui/react";

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
        <>
            <Text mb={8} fontSize="3xl" textAlign="center">
                <b>Internships </b>
            </Text>
            <Flex
                wrap="wrap" // Allows items to wrap to the next line
                justify="center" // Center the items horizontally
                align="flex-start" // Align items to the top
                width="100%"
                maxW="900px" // Maximum width for the container
                mx="auto"
                textAlign="center"
            >
                <SimplifyNextCardNugget
                    heading={ObjectsToUse.SimplifyNextObject.heading}
                    isModalOpen={isSimplifyNextModalOpen}
                    onModalOpen={onSimplifyNextOpen}
                    onModalClose={onSimplifyNextClose}
                    thumbnailPic={UiPathPic}
                    cardHeader={ObjectsToUse.SimplifyNextObject.cardHeader}
                    modalHeader={ObjectsToUse.SimplifyNextObject.modalHeader}
                    modalBodyHeading1={
                        ObjectsToUse.SimplifyNextObject.modalBodyHeading1
                    }
                    modalBodyHeading2={
                        ObjectsToUse.SimplifyNextObject.modalBodyHeading2
                    }
                    modalBodyVideo={
                        ObjectsToUse.SimplifyNextObject.modalBodyVideo
                    }
                    modalBodyDescription1={
                        ObjectsToUse.SimplifyNextObject.modalBodyDescription1
                    }
                    modalBodyDescription2={
                        ObjectsToUse.SimplifyNextObject.modalBodyDescription2
                    }
                    modalBodyDescription3={
                        ObjectsToUse.SimplifyNextObject.modalBodyDescription3
                    }
                />

                <TCCCardNugget
                    heading={ObjectsToUse.TCCObject.heading}
                    isModalOpen={isTCCModalOpen}
                    modalHeader={ObjectsToUse.TCCObject.modalHeader}
                    onModalOpen={onTCCOpen}
                    onModalClose={onTCCClose}
                    cardHeader={ObjectsToUse.TCCObject.cardHeader}
                    thumbnailPic={TCCPic}
                    modalBodyHeading1={ObjectsToUse.TCCObject.modalBodyHeading1}
                    modalBodyHeading2={ObjectsToUse.TCCObject.modalBodyHeading2}
                    modalBodyHeading3={ObjectsToUse.TCCObject.modalBodyHeading3}
                    modalBodyVideo={ObjectsToUse.TCCObject.modalBodyVideo}
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
            </Flex>
        </>
    );
}

export default InternshipProjects;
