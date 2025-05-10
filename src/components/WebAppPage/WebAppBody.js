import { Text, useDisclosure } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import React from "react";
import BloglistPic from "../../pictures/WebAppPage_Thumbnails/Bloglist_Page.png";
import PPPPPic from "../../pictures/WebAppPage_Thumbnails/PPPP_Page.png";
import PromptlyPic from "../../pictures/WebAppPage_Thumbnails/Promptly_Page.png";

import ObjectsToUse from "./WebAppCards/WebAppWriteup";

import BloglistCardNugget from "./WebAppCards/BloglistCardNugget";
import PPPPNugget from "./WebAppCards/PPPPNugget";
import PromptlyNugget from "./WebAppCards/PromptlyNugget";

const WebAppBody = () => {
  const {
    isOpen: isPromptlyOpen,
    onOpen: onPromptlyOpen,
    onClose: onPromptlyClose,
  } = useDisclosure();

  const {
    isOpen: isPPPPOpen,
    onOpen: onPPPPOpen,
    onClose: onPPPPClose,
  } = useDisclosure();

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
        maxW="100%" // Maximum width for the container
        mx="auto"
        textAlign="center"
      >
        <PromptlyNugget
          heading={ObjectsToUse.PromptlyObject.heading}
          subheading={ObjectsToUse.PromptlyObject.subheading}
          onModalOpen={onPromptlyOpen}
          isModalOpen={isPromptlyOpen}
          onModalClose={onPromptlyClose}
          thumbnailPic={PromptlyPic}
          modalBodyVideo={ObjectsToUse.PromptlyObject.modalBodyVideo}
          modalBodyHeading1={ObjectsToUse.PromptlyObject.modalBodyHeading1}
          modalBodyHeading2={ObjectsToUse.PromptlyObject.modalBodyHeading2}
          modalBodyHeading3={ObjectsToUse.PromptlyObject.modalBodyHeading3}
          modalBodyDescription1={
            ObjectsToUse.PromptlyObject.modalBodyDescription1
          }
          modalBodyDescription2={
            ObjectsToUse.PromptlyObject.modalBodyDescription2
          }
          modalBodyDescription3={
            ObjectsToUse.PromptlyObject.modalBodyDescription3
          }
        />
        <PPPPNugget
          heading={ObjectsToUse.PPPPObject.heading}
          subheading={ObjectsToUse.PPPPObject.subheading}
          onModalOpen={onPPPPOpen}
          isModalOpen={isPPPPOpen}
          onModalClose={onPPPPClose}
          thumbnailPic={PPPPPic}
          modalBodyVideo={ObjectsToUse.PPPPObject.modalBodyVideo}
          modalHeader={ObjectsToUse.PPPPObject.modalHeader}
          modalBodyHeading1={ObjectsToUse.PPPPObject.modalBodyHeading1}
          modalBodyHeading3={ObjectsToUse.PPPPObject.modalBodyHeading3}
          modalBodyHeading4={ObjectsToUse.PPPPObject.modalBodyHeading4}
          modalBodyDescription1={ObjectsToUse.PPPPObject.modalBodyDescription1}
          modalBodyDescription2={ObjectsToUse.PPPPObject.modalBodyDescription2}
          modalBodyDescription3={ObjectsToUse.PPPPObject.modalBodyDescription3}
          modalBodyDescription4={ObjectsToUse.PPPPObject.modalBodyDescription4}
        />

        <BloglistCardNugget
          heading={ObjectsToUse.BloglistObject.heading}
          subheading={ObjectsToUse.BloglistObject.subheading}
          onModalOpen={onBlogListOpen}
          isModalOpen={isBlogListOpen}
          onModalClose={onBlogListClose}
          thumbnailPic={BloglistPic}
          modalHeader={ObjectsToUse.BloglistObject.modalHeader}
          modalBodyHeading1={ObjectsToUse.BloglistObject.modalBodyHeading1}
          modalBodyHeading4={ObjectsToUse.BloglistObject.modalBodyHeading4}
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
            ObjectsToUse.BloglistObject.modalBodyDescription5
          }
        />
      </Flex>
    </>
  );
};

export default WebAppBody;
