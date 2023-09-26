import {
  Container,
  Text,
  Box,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MLPic from "../../pictures/Machine_Learning_Card_Picture.png";
import PersonalProjectPic from "../../pictures/School_Projects_Card_Front_Page.jpg";
import CertsPic from "../../pictures/Certs_pic.jpg";

import React from "react";

function Project() {
  return (
    <Container textAlign="center">
      <Text mb={5} fontSize="3xl">
        My Projects
      </Text>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Machine Learning Projects</Tab>
          <Tab>Other Projects</Tab>
          <Tab>Certificates</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Card maxW="sm" mx="auto">
              {" "}
              {/* Use mx="auto" to center-align the card */}
              <CardBody>
                <Image src={MLPic} alt="ML Brain Picture" borderRadius="20px" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">
                    Kaggle & Personal Machine Learning Projects
                  </Heading>
                  <Text>
                    Click on the button below to check out my Kaggle and other
                    projects I have done with Machine Learning!
                  </Text>
                  <Link to="/MLProjects">
                    <Button variant="solid" colorScheme="blue">
                      Click Here
                    </Button>
                  </Link>
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card maxW="sm" mx="auto">
              {" "}
              {/* Use mx="auto" to center-align the card */}
              <CardBody>
                <Image
                  src={PersonalProjectPic}
                  alt="3.007 Picture"
                  borderRadius="20px"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">My School Projects</Heading>
                  <Text>
                    Check out the projects that I have done for school work!
                  </Text>
                  <Link to="/SchoolProjects">
                    <Button variant="solid" colorScheme="blue">
                      Click Here
                    </Button>
                  </Link>
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card maxW="sm" mx="auto">
              {/* Use mx="auto" to center-align the card */}
              <CardBody>
                <Stack
                  mt="3"
                  spacing="3"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src={CertsPic}
                    alt="3.007 Picture"
                    borderRadius="20px"
                    boxSize="200px"
                  />
                  {/* Adjust the "boxSize" value to your desired size */}
                  <Heading size="md">Certificates</Heading>
                  <Text>Check out my certificates!</Text>
                  <Link to="/Certificates">
                    <Button variant="solid" colorScheme="blue">
                      Click Here
                    </Button>
                  </Link>
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default Project;
