import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaWrench, FaHandshake, FaGlobe } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";

function SoftSkillSHardSkills() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardHeader>
          <Heading size="md">
            <span style={{ display: "flex", alignItems: "center" }}>
              Soft Skills <FaHandshake style={{ marginLeft: "15px" }} />
            </span>
          </Heading>
        </CardHeader>
        <CardBody textAlign="left">
          {" "}
          {/* Align the text to the left */}
          <List spacing={3}>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              Entreprenuership
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              Leadership
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              Problem-Solving
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              Teamwork
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              Communication
            </ListItem>
          </List>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>

      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardHeader>
          <Heading size="md">
            <span style={{ display: "flex", alignItems: "center" }}>
              Hard Skills <FaWrench style={{ marginLeft: "15px" }} />
            </span>
          </Heading>
        </CardHeader>
        <CardBody textAlign="left">
          {" "}
          {/* Align the text to the left */}
          <List spacing={3}>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              Machine Learning
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              Python
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              AutoCAD
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              React
            </ListItem>
          </List>
        </CardBody>
      </Card>

      {/* Additional Card at the bottom */}
      <Card
        style={{
          gridColumn: "span 2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardHeader>
          <Heading size="md">
            <span style={{ display: "flex", alignItems: "center" }}>
              Languages <FaGlobe style={{ marginLeft: "15px" }} />
            </span>
          </Heading>
        </CardHeader>
        <CardBody textAlign="left">
          <List spacing={3}>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              Fluent in English
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              Fluent in Mandarin
            </ListItem>
          </List>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </SimpleGrid>
  );
}

export default SoftSkillSHardSkills;
