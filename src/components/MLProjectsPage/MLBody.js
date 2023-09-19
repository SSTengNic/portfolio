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
} from "@chakra-ui/react";
import titanicPic from "../../pictures/Titanic_Thumnail.jpg";
import breastCancerPic from "../../pictures/Breast_Cancer_Ribbon.jpg";

function MLBody() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <Button onClick={onOpen}>More</Button>
              <Modal
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                motionPreset="slideInBottom"
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Titanic Survivor Competition</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <p>Hello Testing</p>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
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
              <Button onClick={onOpen}>More</Button>
              <Modal
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                motionPreset="slideInBottom"
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Breast Cancer Prediction</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <p>Hello Testing</p>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
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
