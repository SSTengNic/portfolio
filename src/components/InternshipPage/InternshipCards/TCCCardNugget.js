import { Text, Heading } from "@chakra-ui/react";

import { AspectRatio } from "@chakra-ui/react";

import React from "react";
import ModalCardComponent from "../../Shared/ModalCardComponent";
import ModalComponent from "../../Shared/ModalComponent";
const TCCCardNugget = ({
  onModalOpen,
  subheading,
  isModalOpen,
  onModalClose,
  thumbnailPic,
  cardHeader,
  modalHeader,
  modalBodyHeading1,
  modalBodyHeading2,
  modalBodyHeading3,
  modalBodyVideo,
  modalBodyDescription1,
  modalBodyDescription2,
  modalBodyDescription3,
  heading,
}) => {
  return (
    <ModalCardComponent
      onModalOpen={onModalOpen}
      thumbnailPic={thumbnailPic}
      heading={heading}
      subheading={subheading}
    >
      <Text textAlign="left" ml={2} mb={3} spacing="">
        Interning at a startup is a great way to gain hands-on experience across
        various domains. At 1TCC, I contributed to multiple projects spanning
        different areas. Click here to learn more about my journey.
      </Text>

      <ModalComponent
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        modalHeader={modalHeader}
      >
        <Heading mb={2}>{modalBodyHeading1}</Heading>
        <AspectRatio ratio={4 / 2} mb={4}>
          <iframe
            src={modalBodyVideo}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </AspectRatio>

        <Text fontSize="lg" mb={5}>
          {" "}
          {modalBodyDescription1}
        </Text>
        <Heading mb={2}>{modalBodyHeading2}</Heading>
        <Text fontSize="lg" mb={5}>
          {" "}
          {modalBodyDescription2}
        </Text>
        <Heading mb={2}>{modalBodyHeading3}</Heading>
        <Text fontSize="lg" mb={5}>
          {modalBodyDescription3}
        </Text>
      </ModalComponent>
    </ModalCardComponent>
  );
};

export default TCCCardNugget;
