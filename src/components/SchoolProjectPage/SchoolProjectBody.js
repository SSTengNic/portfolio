import { Text, useDisclosure, Flex } from "@chakra-ui/react";

import React from "react";
import RCKPic from "../../pictures/School_Projects_Card_Front_Page.jpg";
import TaxiPic from "../../pictures/TaxiAvail.jpg";
import TCPPic from "../../pictures/SchoolProjectStartupPics/TCP.jpg";

import RCKCardNugget from "./SchoolProjectCards/RCKCardNugget";
import TCPCardNugget from "./SchoolProjectCards/TCPCardNugget";
import TaxiCardNugget from "./SchoolProjectCards/TaxiCardNugget";
import ObjectsToUse from "./SchoolProjectCards/SchoolProjectWriteup";

const SchoolProjectBody = () => {
  const {
    isOpen: isRCKModalOpen,
    onOpen: onRCKOpen,
    onClose: onRCKClose,
  } = useDisclosure();

  const {
    isOpen: isTaxiModalOpen,
    onOpen: onTaxiOpen,
    onClose: onTaxiClose,
  } = useDisclosure();

  const {
    isOpen: isTCPModalOpen,
    onOpen: onTCPOpen,
    onClose: onTCPClose,
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
        <TaxiCardNugget
          heading={ObjectsToUse.TaxiObject.heading}
          subheading={ObjectsToUse.TaxiObject.subheading}
          onModalOpen={onTaxiOpen}
          isModalOpen={isTaxiModalOpen}
          onModalClose={onTaxiClose}
          thumbnailPic={TaxiPic}
          modalHeader={ObjectsToUse.TaxiObject.modalHeader}
          modalBodyHeading1={ObjectsToUse.TaxiObject.modalBodyHeading1}
          modalBodyHeading2={ObjectsToUse.TaxiObject.modalBodyHeading2}
          modalBodyHeading3={ObjectsToUse.TaxiObject.modalBodyHeading3}
          modalBodyDescription1={ObjectsToUse.TaxiObject.modalBodyDescription1}
          modalBodyDescription2={ObjectsToUse.TaxiObject.modalBodyDescription2}
          modalBodyDescription3={ObjectsToUse.TaxiObject.modalBodyDescription3}
        />
        <TCPCardNugget
          heading={ObjectsToUse.TCPObject.heading}
          subheading={ObjectsToUse.TCPObject.subheading}
          onModalOpen={onTCPOpen}
          isModalOpen={isTCPModalOpen}
          onModalClose={onTCPClose}
          thumbnailPic={TCPPic}
          modalHeader={ObjectsToUse.TCPObject.modalHeader}
          modalBodyHeading1={ObjectsToUse.TCPObject.modalBodyHeading1}
          modalBodyHeading2={ObjectsToUse.TCPObject.modalBodyHeading2}
          modalBodyHeading3={ObjectsToUse.TCPObject.modalBodyHeading3}
          modalBodyDescription1={ObjectsToUse.TCPObject.modalBodyDescription1}
          modalBodyDescription2={ObjectsToUse.TCPObject.modalBodyDescription2}
          modalBodyDescription3={ObjectsToUse.TCPObject.modalBodyDescription3}
        />
        <RCKCardNugget
          heading={ObjectsToUse.RCKObject.heading}
          subheading={ObjectsToUse.RCKObject.subheading}
          onModalOpen={onRCKOpen}
          isModalOpen={isRCKModalOpen}
          onModalClose={onRCKClose}
          thumbnailPic={RCKPic}
          modalHeader={ObjectsToUse.RCKObject.modalHeader}
          modalBodyHeading1={ObjectsToUse.RCKObject.modalBodyHeading1}
          modalBodyHeading2={ObjectsToUse.RCKObject.modalBodyHeading2}
          modalBodyHeading3={ObjectsToUse.RCKObject.modalBodyHeading3}
          modalBodyDescription1={ObjectsToUse.RCKObject.modalBodyDescription1}
          modalBodyDescription2={ObjectsToUse.RCKObject.modalBodyDescription2}
          modalBodyDescription3={ObjectsToUse.RCKObject.modalBodyDescription3}
          modalBodyVideo={ObjectsToUse.RCKObject.modalBodyVideo}
        />
      </Flex>
    </>
  );
};

export default SchoolProjectBody;
