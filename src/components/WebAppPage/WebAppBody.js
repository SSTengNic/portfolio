import { Text, useDisclosure } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

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
        <>
            <Text mb={8} fontSize="3xl" textAlign="center">
                <b>Web Application Projects </b>
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
                <BloglistCardNugget
                    heading={ObjectsToUse.BloglistObject.heading}
                    onModalOpen={onBlogListOpen}
                    isModalOpen={isBlogListOpen}
                    onModalClose={onBlogListClose}
                    thumbnailPic={BloglistPic}
                    modalHeader={ObjectsToUse.BloglistObject.modalHeader}
                    modalBodyHeading1={
                        ObjectsToUse.BloglistObject.modalBodyHeading1
                    }
                    modalBodyHeading4={
                        ObjectsToUse.BloglistObject.modalBodyHeading4
                    }
                    modalBodyDescription1={
                        ObjectsToUse.BloglistObject.modalBodyDescription1
                    }
                    modalBodyDescription2={
                        ObjectsToUse.BloglistObject.modalBodyDescription1
                    }
                    modalBodyDescription3={
                        ObjectsToUse.BloglistObject.modalBodyDescription3
                    }
                    modalBodyDescription4={
                        ObjectsToUse.BloglistObject.modalBodyDescription4
                    }
                    modalBodyDescription5={
                        ObjectsToUse.BloglistObject.modalBodyDescription4
                    }
                />
            </Flex>
        </>
    );
};

export default WebAppBody;
