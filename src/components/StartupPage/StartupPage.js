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
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import React from "react";
import PinchPromoPic from "../../pictures/PinchPromoLogo.jpg";
import HungrysiaPic from "../../pictures/HungrySiaLogo.jpg";

function Startups() {
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
                        <Card maxW="sm" mx="auto">
                            <CardBody>
                                <Image
                                    src={PinchPromoPic}
                                    alt="RCK Pic"
                                    borderRadius="20px"
                                ></Image>
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">PinchPromo</Heading>
                                    <Button onClick={onPinchPromoOpen}>
                                        More
                                    </Button>
                                    <Modal
                                        isCentered
                                        isOpen={isPinchPromoOpen}
                                        onClose={onPinchPromoClose}
                                        motionPreset="SlideInBottom"
                                        size="5xl"
                                    >
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalContent>
                                                <ModalHeader>
                                                    Cofounding PinchPromo
                                                </ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <Box>
                                                        <Heading>
                                                            What is PinchPromo?
                                                        </Heading>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                        >
                                                            Recognizing an
                                                            opportunity to
                                                            enhance consumer
                                                            engagement with
                                                            promotions,
                                                            PinchPromo
                                                            introduced a
                                                            gamified approach to
                                                            claiming promotions.
                                                            This innovative
                                                            advertising company
                                                            also offers a
                                                            feature for users to
                                                            conveniently catalog
                                                            their acquired
                                                            offers, enhancing
                                                            the memorability of
                                                            promotions and
                                                            instilling a sense
                                                            of accomplishment.
                                                        </Text>

                                                        <Heading>
                                                            My Roles and
                                                            Responsibilities
                                                        </Heading>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                        >
                                                            My primary role
                                                            involved securing
                                                            partnerships with
                                                            various businesses,
                                                            persuading them to
                                                            share their
                                                            promotions on our
                                                            platform. I
                                                            successfully
                                                            onboarded
                                                            approximately a
                                                            dozen diverse
                                                            companies.
                                                        </Text>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                        >
                                                            Additionally, I
                                                            proficiently
                                                            utilized Cypress and
                                                            took charge of
                                                            conducting User
                                                            System Testing for
                                                            both the user
                                                            interface and the
                                                            client dashboard.
                                                            The rigorous System
                                                            Testing process not
                                                            only unearthed and
                                                            rectified bugs but
                                                            also ensured the
                                                            stability of the
                                                            PinchPromo web
                                                            application after
                                                            every implementation
                                                            of new features and
                                                            code alterations.
                                                        </Text>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                            style={{
                                                                textDecoration:
                                                                    "underline",
                                                            }}
                                                        >
                                                            How PinchPromo Works
                                                            <IconButton
                                                                as="a"
                                                                href="https://www.youtube.com/watch?v=W3Q5h756igs&embeds_referring_euri=https%3A%2F%2Fpinchpromo.com%2F&source_ve_path=MjM4NTE&feature=emb_title"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                icon={
                                                                    <FaExternalLinkAlt />
                                                                }
                                                                ml={2}
                                                            />
                                                        </Text>

                                                        <Heading>Exit</Heading>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                        >
                                                            After much
                                                            reflection and
                                                            consideration, we
                                                            made the difficult
                                                            decision to cease
                                                            our operations at
                                                            PinchPromo. The
                                                            demanding commitment
                                                            required for running
                                                            a startup, along
                                                            with the need to
                                                            balance our school
                                                            lives, led us to
                                                            this choice.
                                                            However, as part of
                                                            this transition, we
                                                            successfully sold
                                                            our user base and
                                                            the code base to
                                                            another company.
                                                            Overall, we believe
                                                            we had a positive
                                                            impact on the
                                                            businesses we worked
                                                            with, and I am eager
                                                            to apply the lessons
                                                            learned to my future
                                                            projects.
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
                    <TabPanel>
                        <Card maxW="sm" mx="auto">
                            <CardBody>
                                <Image
                                    src={HungrysiaPic}
                                    alt="RCK Pic"
                                    borderRadius="20px"
                                ></Image>
                                <Stack mt="6" spacing="3">
                                    <Heading size="md"> Hungrysia@SUTD</Heading>
                                    <Button onClick={onHungrysiaOpen}>
                                        More
                                    </Button>
                                    <Modal
                                        isCentered
                                        isOpen={isHungrysiaOpen}
                                        onClose={onHungrysiaClose}
                                        motionPreset="SlideInBottom"
                                        size="5xl"
                                    >
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalContent>
                                                <ModalHeader>
                                                    Reviving Hungrysia@SUTD
                                                </ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <Box>
                                                        <Heading>
                                                            What is
                                                            Hungrysia@SUTD?
                                                        </Heading>

                                                        <Text
                                                            fontSize="lg"
                                                            mb={10}
                                                        >
                                                            {" "}
                                                            While serving as the
                                                            Freshmore
                                                            Representative at
                                                            SUTD, I received
                                                            valuable feedback
                                                            from students about
                                                            the need for more
                                                            affordable supper
                                                            options on campus.
                                                            Recognizing this
                                                            opportunity, I
                                                            decided to explore
                                                            ways to address this
                                                            need through a
                                                            startup. During my
                                                            research, I
                                                            discovered that a
                                                            supper catering
                                                            service had
                                                            previously operated
                                                            on campus before the
                                                            COVID-19 pandemic. I
                                                            engaged in
                                                            discussions with the
                                                            previous owner, who
                                                            was a departing
                                                            student, and took
                                                            over the enterprise,
                                                            leading to the
                                                            revival of
                                                            Hungrysia@SUTD.
                                                        </Text>
                                                        <Heading>
                                                            My Roles and
                                                            Responsibilities
                                                        </Heading>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={10}
                                                        >
                                                            Under my leadership,
                                                            I reinstated the
                                                            original catering
                                                            arrangements and
                                                            expanded our
                                                            culinary offerings
                                                            to provide students
                                                            with diverse supper
                                                            choices. This
                                                            venture not only
                                                            enriched the campus'
                                                            supper culture but
                                                            also proved
                                                            financially viable.
                                                        </Text>

                                                        <Text
                                                            fontSize="lg"
                                                            mb={10}
                                                        >
                                                            In addition, I
                                                            created a Google
                                                            script that
                                                            automated order
                                                            processing,
                                                            significantly
                                                            reducing manual
                                                            administrative work
                                                            and minimizing the
                                                            potential for human
                                                            errors when
                                                            communicating food
                                                            orders and payments
                                                            to the caterers.With
                                                            it, the caterers
                                                            could understand
                                                            complex orders with
                                                            ease.
                                                        </Text>
                                                        <Heading>Exit</Heading>

                                                        <Text
                                                            fontSize="lg"
                                                            mb={10}
                                                        >
                                                            Eventually, I
                                                            entrusted the
                                                            management of
                                                            Hungrysia@SUTD to a
                                                            junior colleague as
                                                            I transitioned to
                                                            founding PinchPromo.
                                                        </Text>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={4}
                                                            style={{
                                                                textDecoration:
                                                                    "underline",
                                                            }}
                                                        >
                                                            Join the
                                                            Hungrysia@SUTD
                                                            Telegram Group to
                                                            order!
                                                            <IconButton
                                                                as="a"
                                                                href="https://t.me/sutdhstg"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                icon={
                                                                    <FaExternalLinkAlt />
                                                                }
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

export default Startups;
