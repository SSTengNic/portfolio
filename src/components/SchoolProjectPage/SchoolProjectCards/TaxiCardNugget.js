import { Text, Heading, IconButton } from "@chakra-ui/react";

import ModalCardComponent from "../../Shared/ModalCardComponent";
import ModalComponent from "../../Shared/ModalComponent";
import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
const TaxiCardNugget = ({
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
        My groupmates and I used what we have learnt from our Deep Learning
        module to predict the availability of taxis within a constrained area
        within the next 3 hours.
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
        <Text fontSize="lg" mb={4} style={{ textDecoration: "underline" }}>
          <b>Link to Github repo</b>
          <IconButton
            as="a"
            href="https://github.com/SSTengNic/DL_Project/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            icon={<FaExternalLinkAlt />}
            ml={2}
          />
        </Text>
      </ModalComponent>
    </ModalCardComponent>
  );
};

export default TaxiCardNugget;
