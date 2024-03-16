import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { useDisclosure, SimpleGrid } from "@chakra-ui/react";

import titanicPic from "../../pictures/ML_Thumbnails/Titanic_Thumnail.jpg";
import breastCancerPic from "../../pictures/ML_Thumbnails/Breast_Cancer_Ribbon.jpg";
import CardBodyNugget from "./CardBodyNugget";
import ObjectstoUse from "./modalWriteups";

import AmesHousingPic from "../../pictures/ML_Thumbnails/Ames_Housing.jpeg";
import IrisPic from "../../pictures/ML_Thumbnails/Iris_Species.jpeg";
function MLBody() {
    const {
        isOpen: isTitanicModalOpen,
        onOpen: onTitanicModalOpen,
        onClose: onTitanicModalClose,
    } = useDisclosure();
    const {
        isOpen: isBreastCancerModalOpen,
        onOpen: onBreastCancerModalOpen,
        onClose: onBreastCancerModalClose,
    } = useDisclosure();
    const {
        isOpen: isAmesHousingModalOpen,
        onOpen: onAmesHousingModalOpen,
        onClose: onAmesHousingModalClose,
    } = useDisclosure();
    const {
        isOpen: isIrisSpeciesModalOpen,
        onOpen: onIrisSpeciesModalOpen,
        onClose: onIrisSpeciesModalClose,
    } = useDisclosure();

    return (
        <Container textAlign="center">
            <Text mb={5} fontSize="3xl">
                Kaggle, Getting Started
            </Text>
            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
                <CardBodyNugget
                    thumbnailPic={titanicPic}
                    Header={"Titanic Survivor Compeition"}
                    onModalOpen={onTitanicModalOpen}
                    isModelOpen={isTitanicModalOpen}
                    onModalClose={onTitanicModalClose}
                    modalHeader={"Titanic Survivor Competition"}
                    modalText={ObjectstoUse.titanicObject.writeup}
                    kaggleWebpage={ObjectstoUse.titanicObject.kaggleLink}
                    pythonNotebook={ObjectstoUse.titanicObject.notebookLink}
                    precisionScores={ObjectstoUse.titanicObject.precisionScore}
                />
                <CardBodyNugget
                    thumbnailPic={breastCancerPic}
                    Header={"Breast Cancer Prediction"}
                    onModalOpen={onBreastCancerModalOpen}
                    isModelOpen={isBreastCancerModalOpen}
                    onModalClose={onBreastCancerModalClose}
                    modalHeader={"Breast Cancer Prediction"}
                    modalText={ObjectstoUse.breastCancerObject.writeup}
                    kaggleWebpage={ObjectstoUse.breastCancerObject.kaggleLink}
                    pythonNotebook={
                        ObjectstoUse.breastCancerObject.notebookLink
                    }
                    precisionScores={
                        ObjectstoUse.breastCancerObject.precisionScore
                    }
                />

                <CardBodyNugget
                    thumbnailPic={AmesHousingPic}
                    Header={"Ames Housing Prediction"}
                    onModalOpen={onAmesHousingModalOpen}
                    isModelOpen={isAmesHousingModalOpen}
                    onModalClose={onAmesHousingModalClose}
                    modalHeader={"Ames Housing Prediction"}
                    modalText={ObjectstoUse.AmesHousingObject.writeup}
                    kaggleWebpage={ObjectstoUse.AmesHousingObject.kaggleLink}
                    pythonNotebook={ObjectstoUse.AmesHousingObject.notebookLink}
                    precisionScores={
                        ObjectstoUse.AmesHousingObject.precisionScore
                    }
                />

                <CardBodyNugget
                    thumbnailPic={IrisPic}
                    Header={"Iris Species Prediction"}
                    onModalOpen={onIrisSpeciesModalOpen}
                    isModelOpen={isIrisSpeciesModalOpen}
                    onModalClose={onIrisSpeciesModalClose}
                    modalHeader={"Iris Species Prediction"}
                    modalText={ObjectstoUse.IrisSpeciesObject.writeup}
                    kaggleWebpage={ObjectstoUse.IrisSpeciesObject.kaggleLink}
                    pythonNotebook={ObjectstoUse.IrisSpeciesObject.notebookLink}
                    precisionScores={
                        ObjectstoUse.IrisSpeciesObject.precisionScore
                    }
                />
            </SimpleGrid>
        </Container>
    );
}

export default MLBody;
