import { Text, Heading, IconButton } from "@chakra-ui/react";

import ModalCardComponent from "../../Shared/ModalCardComponent";
import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import ModalComponent from "../../Shared/ModalComponent";
const HungrysiaCardNugget = ({
    onModalOpen,
    isModalOpen,
    onModalClose,
    thumbnailPic,
    heading,
    modalHeader,
    modalBodyHeading1,
    modalBodyHeading2,
    modalBodyHeading3,
    modalBodyHeading4,
    modalBodyDescription1,
    modalBodyDescription2,
    modalBodyDescription3,
    modalBodyDescription4,
}) => {
    return (
        <ModalCardComponent
            onModalOpen={onModalOpen}
            thumbnailPic={thumbnailPic}
            heading={heading}
        >
            <Text textAlign="left" ml={2} mb={3} spacing="">
                During the post-pandemic period, I discovered Hungrysia@SUTD, a{" "}
                <b>student-run catering service </b>
                that had shut down due to COVID.😷 I reached out to the previous
                owner and revived it.
            </Text>
            <ModalComponent
                isModalOpen={isModalOpen}
                onModalClose={onModalClose}
                modalHeader={modalHeader}
            >
                <Heading>{modalBodyHeading1}</Heading>

                <Text fontSize="lg" mb={4}>
                    {" "}
                    {modalBodyDescription1}
                </Text>
                <Heading>{modalBodyHeading2}</Heading>
                <Text fontSize="lg" mb={4}>
                    {modalBodyDescription2}
                </Text>

                <Text fontSize="lg" mb={4}>
                    {modalBodyDescription3}
                </Text>
                <Heading>Exit</Heading>

                <Text fontSize="lg" mb={4}>
                    {modalBodyDescription4}
                </Text>
                <Text
                    fontSize="lg"
                    mb={4}
                    style={{
                        textDecoration: "underline",
                    }}
                >
                    <b>Join the Hungrysia@SUTD Telegram Group to order!</b>
                    <IconButton
                        as="a"
                        href="https://t.me/sutdhstg"
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

export default HungrysiaCardNugget;
