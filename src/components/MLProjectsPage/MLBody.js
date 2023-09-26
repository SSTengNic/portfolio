import React from "react";
import {
  Tabs,
  Container,
  Text,
  TabPanels,
  Card,
  Image,
  CardBody,
  TabPanel,
  Stack,
  Heading,
  Link,
  Button,
  TabList,
  Tab,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
  IconButton,
  Box,
  Divider,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import titanicPic from "../../pictures/Titanic_Thumnail.jpg";
import breastCancerPic from "../../pictures/Breast_Cancer_Ribbon.jpg";

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

  return (
    <Container textAlign="center">
      <Text mb={5} fontSize="3xl">
        Kaggle, Getting Started
      </Text>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card maxW="sm" mx="auto">
          <CardBody>
            <Image
              alignSelf="center"
              src={titanicPic}
              alt="Titanic Thumbnail"
              borderRadius="20px"
              boxSize="100px" // Set the smaller image size
              objectFit="cover" // Ensure the image fills the container
              mx="auto" // Center the image horizontally
              my={2} // Add margin to center the image vertically
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Titanic Survivor Competition</Heading>
              <Button onClick={onTitanicModalOpen}>More</Button>
              <Modal
                isCentered
                isOpen={isTitanicModalOpen}
                onClose={onTitanicModalClose}
                motionPreset="slideInBottom"
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Titanic Survivor Competition</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <Text fontSize="lg" mb={10}>
                        The challenge of this competition is to build a
                        predictive model that answers the question: "What sorts
                        of people were more likely to survive?" using the
                        passenger data provided (e.g., name, age, gender,
                        socio-economic class, etc).
                      </Text>
                      <Text fontSize="lg" mb={4}>
                        <span style={{ textDecoration: "underline" }}>
                          Kaggle Score:
                        </span>{" "}
                        <strong>0.73684</strong>
                      </Text>
                      <Text fontSize="lg" mb={4}>
                        <span style={{ textDecoration: "underline" }}>
                          Precision Score (Weighted Average):
                        </span>
                        <UnorderedList>
                          <ListItem>
                            Logistic Regresion - <strong> 0.81 </strong>
                          </ListItem>
                          <ListItem>
                            Random Forest - <strong> 0.75 </strong>
                          </ListItem>
                          <ListItem>
                            K-Neighbours Classifiers - <strong> 0.75 </strong>
                          </ListItem>
                        </UnorderedList>
                      </Text>
                      <Divider mb={4} /> {/* Add a divider with margin */}
                      <Text fontSize="lg">
                        <span style={{ textDecoration: "underline" }}>
                          Links:{" "}
                        </span>
                      </Text>
                      <UnorderedList spacing={2}>
                        <ListItem>
                          <Text fontSize="lg">
                            To Python Notebook{" "}
                            <IconButton
                              as="a"
                              href="https://github.com/SSTengNic/MachineLearningProjects/blob/main/Titantic_survivor_project/jupyer%20test.ipynb"
                              target="_blank"
                              rel="noopener noreferrer"
                              icon={<FaExternalLinkAlt />}
                              ml={2}
                            />
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text fontSize="lg">
                            To Kaggle webpage{" "}
                            <IconButton
                              as="a"
                              href="https://www.kaggle.com/competitions/titanic"
                              target="_blank"
                              rel="noopener noreferrer"
                              icon={<FaExternalLinkAlt />}
                              ml={4}
                            />
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={onTitanicModalClose}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" mx="auto">
          <CardBody>
            <Image
              src={breastCancerPic}
              alt="Breast Cancer Thumbnail"
              borderRadius="20px"
              boxSize="100px" // Set the smaller image size
              objectFit="cover" // Ensure the image fills the container
              mx="auto" // Center the image horizontally
              my={2} // Add margin to center the image vertically
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Breast Cancer Prediction</Heading>
              <Button onClick={onBreastCancerModalOpen}>More</Button>
              <Modal
                isCentered
                isOpen={isBreastCancerModalOpen}
                onClose={onBreastCancerModalClose}
                motionPreset="slideInBottom"
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Breast Cancer Prediction</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <Text fontSize="lg" mb={10}>
                        I came across an interesting dataset on Kaggle that
                        featured real-valued attributes like cell nuclei
                        measurements (radius, texture, perimeter) in breast
                        cancer images, paired with patient diagnoses. Intrigued
                        by the data's potential, I employed logistic regression
                        and machine learning to predict breast cancer
                        probability.
                      </Text>
                      <Text fontSize="lg" mb={4}>
                        <span style={{ textDecoration: "underline" }}>
                          Precision Score (Weighted Average):
                        </span>
                        <UnorderedList>
                          <ListItem>
                            Logistic Regresion - <strong> 0.96 </strong>
                          </ListItem>
                        </UnorderedList>
                      </Text>
                      <Divider mb={4} /> {/* Add a divider with margin */}
                      <Text fontSize="lg">
                        <span style={{ textDecoration: "underline" }}>
                          Links:
                        </span>
                      </Text>
                      <UnorderedList spacing={2}>
                        <ListItem>
                          <Text fontSize="lg">
                            To Python Notebook{" "}
                            <IconButton
                              as="a"
                              href="https://github.com/SSTengNic/MachineLearningProjects/blob/main/breast%20cancer%20project/breast%20cancer.ipynb"
                              target="_blank"
                              rel="noopener noreferrer"
                              icon={<FaExternalLinkAlt />}
                              ml={2}
                            />
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text fontSize="lg">
                            To Kaggle webpage{" "}
                            <IconButton
                              as="a"
                              href="https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data"
                              target="_blank"
                              rel="noopener noreferrer"
                              icon={<FaExternalLinkAlt />}
                              ml={4}
                            />
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={onBreastCancerModalClose}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Container>
  );
}

export default MLBody;
