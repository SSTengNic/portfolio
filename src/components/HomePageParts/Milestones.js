import React, { useState } from "react";
import {
    Box,
    chakra,
    Container,
    Link,
    Text,
    HStack,
    VStack,
    Flex,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaGraduationCap, FaSeedling, FaBriefcase } from "react-icons/fa6";

import { IconType } from "react-icons";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import TimelineModal from "./TimelineModal";
const milestones = [
    {
        id: 1,
        title: "Computer Science and Design (CSD) and Masters in Entreprenership",
        categories: ["University Scholarship"],
        icon: FaGraduationCap,
        description: [
            "I was honored to be awarded the prestigious SUTD Technology and Entrepreneurship Program (STEP) Scholarship in 2021.",
            "Currently, I am immersed in a dual-degree program, pursuing a Bachelor's degree in Computer Science and Design (CSD) alongside a Masters in Entrepreneurship.",
            "I am on course to complete my studies and graduate in May 2026.",
        ],
        date: "Sep 2021 - Present",
    },
    {
        id: 2,
        categories: ["Startup"],
        title: "President of Hungrysia@SUTD",
        icon: FaSeedling,
        description: [
            "I ran a startup during the aftermath of COVID-19, organizing supper catering services for my university's student body. Amidst the challenges posed by the pandemic, I successfully reinstated original catering arrangements and negotiated new deals with caterers.",
            "To learn more about our journey, click the link below!",
        ],
        date: "Feb 2022 - Mar 2023",
        link: "",
    },
    {
        id: 3,
        categories: ["Startup"],
        title: "Cofounder of PinchPromo",
        icon: FaSeedling,
        description: [
            `I co-founded a startup that revolutionized promotion claiming through gamification. My key role involved securing partnerships with diverse businesses, convincing them to share exclusive promotions on our web application. Additionally, I served as a software testing engineer, rigorously testing new features using Cypress.`,
            " Discover more about our journey by clicking the link below!",
        ],
        date: "Apr 2023 - Aug 2023",
        link: "",
    },
    {
        id: 4,
        categories: ["Internship"],
        title: "Technology Analyst Intern at SimplifyNext",
        icon: FaBriefcase,
        description: [
            `As a Technology Analyst Intern at SimplifyNext, I developed Robotic Process Automations (RPAs) using UiPath aimed at streamlining crucial tasks for our clients. I developed RPAs to automate data input processes into the client's backend systems, enhancing efficiency and accuracy.`,
            "Moreover, I undertook the responsibility of maintaining and debugging existing RPA code, ensuring seamless workflows for our clients. I contributed to the optimization of processes, resulting in tangible improvements in operational efficiency.",
        ],
        date: "Aug 2023 - Dec 2023",
        link: "",
    },
    {
        id: 5,
        categories: ["Academics", ""],
        title: "Entrepreneurship Program at UC Berkeley Extension",
        icon: FaGraduationCap,
        description: [
            `I enrolled in the Entrepreneurship Program at the University of California, Berkeley.`,
            `This immersive exchange program has enriched my entrepreneurial skill set, honing my abilities in business negotiation and conducting market research tailored for entrepreneurs.`,
        ],
        date: "Jan 2024 - May 2024",
    },
];

const Milestones = () => {
    return (
        <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
            {milestones.map((milestone, index) => (
                <Milestone key={index} milestone={milestone} />
            ))}
        </Container>
    );
};

interface MilestoneProps {
    milestone: {
        id: number,
        categories: string[],
        title: string,
        icon: IconType,
        description: string,
        date: string,
    };
}

const Milestone = ({ milestone }: MilestoneProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.8 });

    // Animate milestone when it comes into view
    if (inView) {
        controls.start("visible");
    }

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
        >
            <Flex mb="10px">
                <LineWithDot />
                <MilestoneCard milestone={milestone} />
            </Flex>
        </motion.div>
    );
};

const MilestoneCard = ({ milestone }) => {
    const { title, categories, description, icon, date } = milestone;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <HStack
                p={{ base: 3, sm: 6 }}
                bg={useColorModeValue("gray.100", "gray.800")}
                spacing={5}
                rounded="lg"
                alignItems="center"
                pos="relative"
                _before={{
                    content: `""`,
                    w: "0",
                    h: "0",
                    borderColor: `transparent ${useColorModeValue(
                        "#edf2f6",
                        "#1a202c"
                    )} transparent`,
                    borderStyle: "solid",
                    borderWidth: "15px 15px 15px 0",
                    position: "absolute",
                    left: "-15px",
                    display: "block",
                }}
            >
                <Icon as={icon} w={12} h={12} color="white" />
                <Box>
                    <HStack spacing={2} mb={1}>
                        {categories.map((cat) => (
                            <Text fontSize="sm" key={cat}>
                                {cat}
                            </Text>
                        ))}
                    </HStack>
                    <VStack spacing={2} mb={3} textAlign="left">
                        <chakra.h1
                            as={Link}
                            _hover={{ color: "teal.400" }}
                            fontSize="2xl"
                            lineHeight={1.2}
                            fontWeight="bold"
                            w="100%"
                            onClick={handleOpenModal} // Open modal on click
                            cursor="pointer" // Add cursor pointer to indicate clickability
                        >
                            {title}
                        </chakra.h1>
                        <Text fontSize="md" noOfLines={2}>
                            {description}
                        </Text>
                    </VStack>
                    <Text fontSize="sm">{date}</Text>
                </Box>
            </HStack>
            <TimelineModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                milestone={milestone}
            />
        </>
    );
};

const LineWithDot = () => {
    return (
        <Flex pos="relative" alignItems="center" mr="40px">
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    width="100%"
                    height="100%"
                    bottom="0"
                    right="0"
                    top="0"
                    left="0"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    backgroundColor="rgb(255, 255, 255)"
                    borderRadius="100px"
                    border="3px solid rgb(4, 180, 180)"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

export default Milestones;
