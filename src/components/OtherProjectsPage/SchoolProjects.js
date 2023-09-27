import {
  Container,
  Text,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Box,
  AspectRatio,
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import RCKPic from "../../pictures/School_Projects_Card_Front_Page.jpg";

function OPBody() {
  const {
    isOpen: isRCKModalOpen,
    onOpen: onRCKOpen,
    onClose: onRCKClose,
  } = useDisclosure();
  const {
    isOpen: isPinchPromoOpen,
    onOpen: onPinchPromoOpen,
    onClose: onPinchPromoClose,
  } = useDisclosure();
  return (
    <Container textAlign="center">
      <Text mb={5} fontSize="3xl">
        Projects
      </Text>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Remote Controlled Koi (RCK)</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Card maxW="sm" mx="auto">
              <CardBody>
                <Image src={RCKPic} alt="RCK Pic" borderRadius="20px"></Image>
                <Stack mt="6" spacing="3">
                  <Heading size="md"> Remote Controlled Koi (RCK)</Heading>
                  <Button onClick={onRCKOpen}>More</Button>
                  <Modal
                    isCentered
                    isOpen={isRCKModalOpen}
                    onClose={onRCKClose}
                    motionPreset="SlideInBottom"
                    size="3xl"
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalContent>
                        <ModalHeader>Remote Controlled Koi (RCK)</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Box>
                            <Heading mb={2}>What is an RCK?</Heading>
                            <AspectRatio ratio={4 / 3} mb={4}>
                              <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/wDM8ewmyxkw?si=j1PgF4_p82RMGQeU"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </AspectRatio>
                            <Text fontSize="lg" mb={5}>
                              {" "}
                              As part of a school module focused on Design
                              Thinking and Innovation(3.007 DTI), I took the
                              lead in guiding my team to conceptualize and
                              develop an engaging solution for pond maintenance.
                              Our innovative creation not only streamlined the
                              cleaning process but also fostered social
                              interactions.
                            </Text>
                            <Heading>Roles and Responsibilities</Heading>
                            <Text fontSize="lg" mb={4}>
                              In this endeavor, my responsibilities encompassed
                              team leadership and overseeing the fabrication of
                              a functional 3D-printed conveyor belt.
                            </Text>
                            <Heading>Results</Heading>
                            <Text fontSize="lg" mb={4}>
                              The culmination of our efforts resulted in a fully
                              operational pond cleaning system, where users
                              engage in friendly competition, racing against the
                              opposing team to efficiently clear floating debris
                              from the pond.
                            </Text>
                            <Text
                              fontSize="lg"
                              mb={4}
                              style={{ textDecoration: "underline" }}
                            >
                              Comprehensive Documentation of RCK
                              <IconButton
                                as="a"
                                href="http://asd.courses.sutd.edu.sg/dti-teams/dti-part-4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                icon={<FaExternalLinkAlt />}
                                ml={2}
                              />
                            </Text>
                          </Box>
                        </ModalBody>
                      </ModalContent>
                    </ModalContent>
                  </Modal>
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default OPBody;
