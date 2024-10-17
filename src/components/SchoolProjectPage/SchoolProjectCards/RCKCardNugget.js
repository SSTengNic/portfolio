import { Text, Heading, IconButton } from "@chakra-ui/react";

import { AspectRatio } from "@chakra-ui/react";
import ModalCardComponent from "../../Shared/ModalCardComponent";
import ModalComponent from "../../Shared/ModalComponent";
import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
const RCKCardNugget = ({
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
    modalBodyVideo,
}) => {
    return (
        <ModalCardComponent
            onModalOpen={onModalOpen}
            thumbnailPic={thumbnailPic}
            heading={heading}
        >
            <Text textAlign="left" ml={2} mb={3} spacing="">
                In a design thinking module, I lead my team throughout the
                course to build an <b>innovative pond cleaning system</b>
                inspired by Koi fish🐟, known for effective up pond effectively.
            </Text>
            <ModalComponent
                isModalOpen={isModalOpen}
                onModalClose={onModalClose}
                modalHeader={modalHeader}
            >
                <Heading mb={2}>{modalBodyHeading1}</Heading>
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
                <Text
                    fontSize="lg"
                    mb={4}
                    style={{ textDecoration: "underline" }}
                >
                    <b>Comprehensive Documentation of RCK</b>
                    <IconButton
                        as="a"
                        href="http://asd.courses.sutd.edu.sg/dti-teams/dti-part-4/"
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

export default RCKCardNugget;
