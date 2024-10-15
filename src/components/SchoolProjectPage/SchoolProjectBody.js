import { Text, useDisclosure, Flex } from "@chakra-ui/react";

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

    return (
        <>
            <Text mb={8} fontSize="3xl" textAlign="center">
                <b>Misc Projects</b>
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
                <RCKCardNugget
                    heading={ObjectsToUse.RCKObject.heading}
                    onModalOpen={onRCKOpen}
                    isModalOpen={isRCKModalOpen}
                    onModalClose={onRCKClose}
                    thumbnailPic={RCKPic}
                    modalHeader={ObjectsToUse.RCKObject.modalHeader}
                    modalBodyHeading1={ObjectsToUse.RCKObject.modalBodyHeading1}
                    modalBodyHeading2={ObjectsToUse.RCKObject.modalBodyHeading2}
                    modalBodyHeading3={ObjectsToUse.RCKObject.modalBodyHeading3}
                    modalBodyDescription1={
                        ObjectsToUse.RCKObject.modalBodyDescription1
                    }
                    modalBodyDescription2={
                        ObjectsToUse.RCKObject.modalBodyDescription2
                    }
                    modalBodyDescription3={
                        ObjectsToUse.RCKObject.modalBodyDescription3
                    }
                    modalBodyVideo={ObjectsToUse.RCKObject.modalBodyVideo}
                />
            </Flex>
        </>
    );
};

export default SchoolProjectBody;
