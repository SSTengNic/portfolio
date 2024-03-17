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
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    IconButton,
    Box,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import React from "react";
import BloglistPic from "../../pictures/WebAppPage_Thumbnails/Bloglist_Page.png";

function Startups() {
    const {
        isOpen: isBlogListOpen,
        onOpen: onBlogListOpen,
        onClose: onBlogListClose,
    } = useDisclosure();

    return (
        <Container textAlign="center">
            <Text mb={5} fontSize="3xl">
                FullStack Projects
            </Text>
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    <Tab>Bloglist</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card maxW="sm" mx="auto">
                            <CardBody>
                                <Image
                                    src={BloglistPic}
                                    alt="RCK Pic"
                                    borderRadius="20px"
                                ></Image>
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">
                                        MERN Stack & MySQL Bloglist
                                    </Heading>
                                    <Button onClick={onBlogListOpen}>
                                        More
                                    </Button>
                                    <Modal
                                        isCentered
                                        isOpen={isBlogListOpen}
                                        onClose={onBlogListClose}
                                        motionPreset="SlideInBottom"
                                        size="5xl"
                                    >
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalContent>
                                                <ModalHeader>
                                                    Building a Bloglist
                                                    Application
                                                </ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <Box>
                                                        <Heading>
                                                            MERN Stack and MySQL
                                                            Backend{" "}
                                                        </Heading>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                        >
                                                            This web application
                                                            is a showcase of my
                                                            FullStack skills,
                                                            featuring a React.js
                                                            frontend, an Express
                                                            backend, and Node.js
                                                            powering the backend
                                                            logic. Two similar
                                                            versions are built
                                                            to handle two
                                                            distinct databases:
                                                            one for MongoDB and
                                                            another for MySQL,
                                                            each implemented
                                                            with CRUD
                                                            functionality.{" "}
                                                        </Text>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                        >
                                                            Building both
                                                            databases allowed me
                                                            to grasp the nuances
                                                            between relational
                                                            and document-based
                                                            database systems.
                                                            Additionally, I've
                                                            taken care to ensure
                                                            consistency and
                                                            efficiency across
                                                            both the frontend
                                                            and backend
                                                            codebases. Despite
                                                            minor differences,
                                                            the frontend
                                                            seamlessly
                                                            integrates with the
                                                            backend, delivering
                                                            a cohesive user
                                                            experience.
                                                        </Text>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                        >
                                                            This project has
                                                            been instrumental in
                                                            enhancing my
                                                            understanding of
                                                            FullStack
                                                            development,
                                                            equipping me with
                                                            valuable insights
                                                            into building robust
                                                            and scalable web
                                                            applications.
                                                        </Text>

                                                        <Heading>
                                                            Features of the app{" "}
                                                        </Heading>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                        >
                                                            <List spacing={3}>
                                                                <ListItem>
                                                                    <ListIcon
                                                                        as={
                                                                            MdCheckCircle
                                                                        }
                                                                        color="green.500"
                                                                    />
                                                                    Users can
                                                                    log in and
                                                                    out of their
                                                                    accounts
                                                                    seamlessly.
                                                                </ListItem>
                                                                <ListItem>
                                                                    <ListIcon
                                                                        as={
                                                                            MdCheckCircle
                                                                        }
                                                                        color="green.500"
                                                                    />
                                                                    Passwords
                                                                    are secured
                                                                    via
                                                                    encryption
                                                                    using JSON
                                                                    Web Tokens
                                                                    (JWT) and
                                                                    bcrypt.
                                                                </ListItem>
                                                                <ListItem>
                                                                    <ListIcon
                                                                        as={
                                                                            MdCheckCircle
                                                                        }
                                                                        color="green.500"
                                                                    />
                                                                    Blog posts
                                                                    include
                                                                    essential
                                                                    details like
                                                                    name,
                                                                    author, and
                                                                    URL.
                                                                </ListItem>
                                                                <ListItem>
                                                                    <ListIcon
                                                                        as={
                                                                            MdCheckCircle
                                                                        }
                                                                        color="green.500"
                                                                    />
                                                                    Only blog
                                                                    creators can
                                                                    delete their
                                                                    posts,
                                                                    enforced in
                                                                    both
                                                                    frontend and
                                                                    backend.
                                                                </ListItem>
                                                                <ListItem>
                                                                    <ListIcon
                                                                        as={
                                                                            MdCheckCircle
                                                                        }
                                                                        color="green.500"
                                                                    />
                                                                    Users can
                                                                    'like'
                                                                    blogs, with
                                                                    popular ones
                                                                    sorted to
                                                                    the top of
                                                                    the list.
                                                                </ListItem>
                                                                <ListItem>
                                                                    <ListIcon
                                                                        as={
                                                                            MdCheckCircle
                                                                        }
                                                                        color="green.500"
                                                                    />
                                                                    Separate
                                                                    versions for
                                                                    MySQL and
                                                                    MongoDB
                                                                    databases.{" "}
                                                                </ListItem>
                                                            </List>
                                                        </Text>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                            style={{
                                                                textDecoration:
                                                                    "underline",
                                                            }}
                                                        >
                                                            Link to Github Repo
                                                            <IconButton
                                                                as="a"
                                                                href="https://github.com/SSTengNic/BloglistWebApp"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                icon={
                                                                    <FaExternalLinkAlt />
                                                                }
                                                                ml={2}
                                                            />
                                                        </Text>

                                                        <Heading>
                                                            Improvements
                                                        </Heading>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                        >
                                                            Some main
                                                            improvements of this
                                                            app would be to
                                                            imrpove the UI of
                                                            the frontend.
                                                            Currently, I did not
                                                            implement any
                                                            designs to make the
                                                            app look better, but
                                                            rather I focused on
                                                            wanting to learn how
                                                            full stack
                                                            application works.{" "}
                                                        </Text>
                                                        <Text>
                                                            Moreover, I could
                                                            continue to
                                                            implement more
                                                            features, such as a
                                                            comment section, or
                                                            a personal profile
                                                            page where users can
                                                            see all of their own
                                                            posts only, or also
                                                            tap into other
                                                            people's profiles to
                                                            see their blogs.
                                                            Doing so, would be
                                                            akin to designing
                                                            something similar to
                                                            a social media app.
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

export default Startups;
