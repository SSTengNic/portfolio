import { Text, Heading } from "@chakra-ui/react";
import ModalComponent from "../../Shared/ModalComponent";
import { AspectRatio } from "@chakra-ui/react";

import React from "react";
import ModalCardComponent from "../../Shared/ModalCardComponent";
const PromptlyNugget = ({
  heading,
  subheading,
  onModalOpen,
  isModalOpen,
  onModalClose,
  thumbnailPic,
  modalHeader,
  modalBodyVideo,
  modalBodyHeading1,
  modalBodyHeading2,
  modalBodyHeading3,

  modalBodyDescription1,
  modalBodyDescription2,
  modalBodyDescription3,
}) => {
  return (
    <ModalCardComponent
      onModalOpen={onModalOpen}
      thumbnailPic={thumbnailPic}
      heading={heading}
      subheading={subheading}
    >
      <Text textAlign="left" ml={2} mb={3} spacing="">
        An AI-powered Journalling Web Application designed to enhance the
        journalling experience.{" "}
        <b>[Currently in development as of 23/1/2025]</b>
      </Text>
      <ModalComponent
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        modalHeader={modalHeader}
      >
        {/* <Text fontSize="lg" mb={4}>
                    {modalBodyDescription1}.{" "}
                </Text> */}
        <AspectRatio ratio={4 / 2} mb={6}>
          <iframe
            width="560"
            height="315"
            src={modalBodyVideo}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </AspectRatio>
        <Heading>{modalBodyHeading1} </Heading>
        <Text fontSize="lg" mb={4} mt={3}>
          {modalBodyDescription1}
        </Text>

        <Heading>{modalBodyHeading2} </Heading>
        <Text fontSize="lg" mb={4} mt={3}>
          {modalBodyDescription2}
        </Text>

        <Heading>{modalBodyHeading3} </Heading>
        <Text fontSize="lg" mb={4} mt={3}>
          {modalBodyDescription3}
        </Text>
      </ModalComponent>
    </ModalCardComponent>
  );
};

export default PromptlyNugget;
