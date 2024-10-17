import { Text, Heading } from "@chakra-ui/react";

import { AspectRatio } from "@chakra-ui/react";
import ModalCardComponent from "../../Shared/ModalCardComponent";
import ModalComponent from "../../Shared/ModalComponent";
import React from "react";
const PinchPromoCardNugget = ({
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
    modalBodyHeading4,
    modalBodyHeading5,
    modalBodyDescription5,
    modalBodyVideo,
}) => {
    return (
        <ModalCardComponent
            onModalOpen={onModalOpen}
            thumbnailPic={thumbnailPic}
            heading={heading}
        >
            <Text textAlign="left" ml={2} mb={3} spacing="">
                Seeing the need for more <b>student-focused deals</b>, my
                friends and I created PinchPromo—a web app that brings exclusive
                student discounts💰 to life through gamification!😎 Click here
                to learn more.
            </Text>

            <ModalComponent
                isModalOpen={isModalOpen}
                onModalClose={onModalClose}
                modalHeader={modalHeader}
            >
                <Heading>{modalBodyHeading1}</Heading>
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
                <Text fontSize="lg" mb={4} mt={3}>
                    {modalBodyDescription1}
                </Text>

                <Heading>{modalBodyHeading2}</Heading>
                <Text fontSize="lg" mb={4}>
                    {modalBodyDescription2}
                </Text>
                <Text fontSize="lg" mb={4}>
                    {modalBodyDescription3}
                </Text>

                <Heading>{modalBodyHeading5}</Heading>
                <Text fontSize="lg" mb={4}>
                    {modalBodyDescription5}
                </Text>
            </ModalComponent>
        </ModalCardComponent>
    );
};

export default PinchPromoCardNugget;
