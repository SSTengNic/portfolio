import {
    Container,
    Text,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Tabs,
    useDisclosure,
} from "@chakra-ui/react";

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
        <Container textAlign="center">
            <Text mb={5} fontSize="3xl">
                Startups
            </Text>
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    <Tab>PinchPromo</Tab>
                    <Tab>Hungrysia@SUTD</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <PinchPromoCardNugget
                            heading={ObjectsToUse.PinchPromoObject.heading}
                            onModalOpen={onPinchPromoOpen}
                            isModalOpen={isPinchPromoOpen}
                            onModalClose={onPinchPromoClose}
                            thumbnailPic={PinchPromoPic}
                            modalHeader={
                                ObjectsToUse.PinchPromoObject.modalHeader
                            }
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
                                ObjectsToUse.PinchPromoObject
                                    .modalBodyDescription1
                            }
                            modalBodyDescription2={
                                ObjectsToUse.PinchPromoObject
                                    .modalBodyDescription2
                            }
                            modalBodyDescription3={
                                ObjectsToUse.PinchPromoObject
                                    .modalBodyDescription3
                            }
                            modalBodyHeading4={
                                ObjectsToUse.PinchPromoObject.modalBodyHeading4
                            }
                            modalBodyHeading5={
                                ObjectsToUse.PinchPromoObject.modalBodyHeading5
                            }
                            modalBodyDescription5={
                                ObjectsToUse.PinchPromoObject
                                    .modalBodyDescription5
                            }
                            modalBodyVideo={
                                ObjectsToUse.PinchPromoObject.modalBodyVideo
                            }
                        />
                    </TabPanel>
                    <TabPanel>
                        <HungrysiaCardNugget
                            onModalOpen={onHungrysiaOpen}
                            isModalOpen={isHungrysiaOpen}
                            onModalClose={onHungrysiaClose}
                            thumbnailPic={HungrysiaPic}
                            heading={ObjectsToUse.HungrysiaObject.heading}
                            modalHeader={
                                ObjectsToUse.HungrysiaObject.modalHeader
                            }
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
                                ObjectsToUse.HungrysiaObject
                                    .modalBodyDescription1
                            }
                            modalBodyDescription2={
                                ObjectsToUse.HungrysiaObject
                                    .modalBodyDescription2
                            }
                            modalBodyDescription3={
                                ObjectsToUse.HungrysiaObject
                                    .modalBodyDescription3
                            }
                            modalBodyDescription4={
                                ObjectsToUse.HungrysiaObject
                                    .modalBodyDescription4
                            }
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
};

export default StartupBody;
