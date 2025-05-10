import { Text, Heading, IconButton } from "@chakra-ui/react";

import ModalCardComponent from "../../Shared/ModalCardComponent";
import ModalComponent from "../../Shared/ModalComponent";
import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
const TCPCardNugget = ({
  subheading,
  heading,
  onModalOpen,
  isModalOpen,
  onModalClose,
  thumbnailPic,
  modalHeader,
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
        My team and I developed an algorithm that uses neural networks to
        dynamically switch between TCP congestion control types based on
        predicted loss ratios.{" "}
      </Text>
      <ModalComponent
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        modalHeader={modalHeader}
      >
        <Heading mb={2}>{modalBodyHeading1}</Heading>

        <Text fontSize="lg" mb={4}>
          {" "}
          {modalBodyDescription1}
        </Text>
        <Heading>{modalBodyHeading2}</Heading>
        <Text fontSize="lg" mb={4}>
          {modalBodyDescription2}
        </Text>
        <Heading>{modalBodyHeading3}</Heading>
        <Text fontSize="lg" mb={4}>
          {modalBodyDescription3}
        </Text>
      </ModalComponent>
    </ModalCardComponent>
  );
};

export default TCPCardNugget;
