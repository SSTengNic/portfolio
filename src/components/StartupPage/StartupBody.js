import { Text, useDisclosure, Flex } from "@chakra-ui/react";

import React from "react";
import PinchPromoPic from "../../pictures/PinchPromoLogo.jpg";
import HungrysiaPic from "../../pictures/HungrySiaLogo.jpg";
import HungrysiaCardNugget from "./StartupCards/HungrysiaCardNugget";
import PinchPromoCardNugget from "./StartupCards/PinchPromoCardNugget";

import ObjectsToUse from "../StartupPage/StartupCards/StartupWriteup";

const StartupBody = () => {
    const {
        isOpen: isPinchPromoOpen,
        onOpen: onPinchPromoOpen,
        onClose: onPinchPromoClose,
    } = useDisclosure();
    const {
        isOpen: isHungrysiaOpen,
        onOpen: onHungrysiaOpen,
        onClose: onHungrysiaClose,
    } = useDisclosure();
    return (
        <>
            <Text mb={8} fontSize="3xl" textAlign="center">
                <b>Startups </b>
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
                <PinchPromoCardNugget
                    heading={ObjectsToUse.PinchPromoObject.heading}
                    onModalOpen={onPinchPromoOpen}
                    isModalOpen={isPinchPromoOpen}
                    onModalClose={onPinchPromoClose}
                    thumbnailPic={PinchPromoPic}
                    modalHeader={ObjectsToUse.PinchPromoObject.modalHeader}
                    modalBodyHeading1={
                        ObjectsToUse.PinchPromoObject.modalBodyHeading1
                    }
                    modalBodyHeading2={
                        ObjectsToUse.PinchPromoObject.modalBodyHeading2
                    }
                    modalBodyHeading3={
                        ObjectsToUse.PinchPromoObject.modalBodyHeading3
                    }
                    modalBodyDescription1={
                        ObjectsToUse.PinchPromoObject.modalBodyDescription1
                    }
                    modalBodyDescription2={
                        ObjectsToUse.PinchPromoObject.modalBodyDescription2
                    }
                    modalBodyDescription3={
                        ObjectsToUse.PinchPromoObject.modalBodyDescription3
                    }
                    modalBodyHeading4={
                        ObjectsToUse.PinchPromoObject.modalBodyHeading4
                    }
                    modalBodyHeading5={
                        ObjectsToUse.PinchPromoObject.modalBodyHeading5
                    }
                    modalBodyDescription5={
                        ObjectsToUse.PinchPromoObject.modalBodyDescription5
                    }
                    modalBodyVideo={
                        ObjectsToUse.PinchPromoObject.modalBodyVideo
                    }
                />

                <HungrysiaCardNugget
                    onModalOpen={onHungrysiaOpen}
                    isModalOpen={isHungrysiaOpen}
                    onModalClose={onHungrysiaClose}
                    thumbnailPic={HungrysiaPic}
                    heading={ObjectsToUse.HungrysiaObject.heading}
                    modalHeader={ObjectsToUse.HungrysiaObject.modalHeader}
                    modalBodyHeading1={
                        ObjectsToUse.HungrysiaObject.modalBodyHeading1
                    }
                    modalBodyHeading2={
                        ObjectsToUse.HungrysiaObject.modalBodyHeading2
                    }
                    modalBodyHeading3={
                        ObjectsToUse.HungrysiaObject.modalBodyHeading3
                    }
                    modalBodyHeading4={
                        ObjectsToUse.HungrysiaObject.modalBodyHeading4
                    }
                    modalBodyDescription1={
                        ObjectsToUse.HungrysiaObject.modalBodyDescription1
                    }
                    modalBodyDescription2={
                        ObjectsToUse.HungrysiaObject.modalBodyDescription2
                    }
                    modalBodyDescription3={
                        ObjectsToUse.HungrysiaObject.modalBodyDescription3
                    }
                    modalBodyDescription4={
                        ObjectsToUse.HungrysiaObject.modalBodyDescription4
                    }
                />
            </Flex>
        </>
    );
};

export default StartupBody;
