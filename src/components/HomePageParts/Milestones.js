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
    ListItem,
    UnorderedList,
    Avatar,
} from "@chakra-ui/react";
import { FaGraduationCap, FaSeedling, FaBriefcase } from "react-icons/fa6";
import SUTDLogo from "../../pictures/MilestonePics/SUTD_Logo.png";
import SimplifyNextLogo from "../../pictures/MilestonePics/SimplifyNextLogo.png";

import HungrySiaLogo from "../../pictures/HungrySiaLogo.jpg";
import PinchPromoLogo from "../../pictures/MilestonePics/PinchPromoLogo2.png";
import UCBLogo from "../../pictures/MilestonePics/UCB_logo.png";
import TCCLogo from "../../pictures/MilestonePics/1TCCLogo.jpg";
import { IconType } from "react-icons";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import TimelineModal from "./TimelineModal";
const milestones = [
    {
        id: 1,
        title: "Computer Science and Design (CSD) and Masters in Technological Entrepreneurship",
        categories: ["University Scholarship"],
        icon: SUTDLogo,
        description: [
            "Awarded the prestigious SUTD Technology and Entrepreneurship Program (STEP) Scholarship in 2021.",
            "Currently pursuing a Bachelor's degree in CSD alongside a Masters in Technological Entrepreneurship.",
            "On course to complete my studies and graduate in May 2026.",
        ],
        date: "Sep 2021 - Present",
    },
    {
        id: 2,
        categories: ["Startup"],
        title: "President of Hungrysia@SUTD",
        icon: HungrySiaLogo,
        description: [
            "Organized supper catering services on every alternate day for SUTD's student body during the aftermath of COVID-19.",
            "Amidst the pandemic challenges, successfully reinstated original catering arrangements and secured partnerships with 3 new caterers.",
        ],
        date: "Feb 2022 - Mar 2023",
        link: "/SchoolProjects",
    },
    {
        id: 3,
        categories: ["Startup"],
        title: "Cofounder of PinchPromo",
        icon: PinchPromoLogo,
        description: [
            "Co-founded a startup that revolutionized promotion claiming through gamification.",
            "Successfully secured partnerships with over 5 businesses, convincing them to share exclusive promotions on our web application.",
            "Served as the software testing engineer, writing E2E tests using Cypress.",
        ],
        date: "Apr 2023 - Aug 2023",
        link: "/SchoolProjects",
    },
    {
        id: 4,
        categories: ["Internship"],
        title: "Technology Analyst Intern at SimplifyNext",
        icon: SimplifyNextLogo,
        description: [
            "Developed Robotic Process Automations (RPA) to automate data input processes into the client's database Excel systems, enhancing efficiency and accuracy.",
            "Optimized a large RPA client's processes by implementing specific conditional logic, which streamlined workflows and reduced process time by 15%.",
            "Undertook the responsibility of maintaining and debugging existing RPA code, ensuring seamless workflows for our clients.",
        ],
        date: "Aug 2023 - Dec 2023",
        link: "/Internships",
    },
    {
        id: 5,
        categories: ["Academics"],
        title: "Entrepreneurship Program at UC Berkeley Extension",
        icon: UCBLogo,
        description: [
            `Enrolled in the Entrepreneurship Program at the University of California, Berkeley.  \n`,
            `Enriched my entrepreneurial skill set, honing my abilities in business negotiation and conducting market research tailored for entrepreneurs.`,
        ],
        date: "Jan 2024 - May 2024",
    },
    {
        id: 6,
        categories: ["Internship"],
        title: "IT Solutions Developer Intern at 1TCC",
        icon: TCCLogo,
        description: [
            "Designed and implemented an AWS DynamoDB structure to store financial data for over 300 public tickers with 12 data categories.",
            "Automated the daily updates of DynamoDB structures using Lambda functions to populate data via API calls. \n",
            "Developed a prototype static internal tool into a full-stack web application using Dash, Flask, and MySQL. Deployed it remotely via AWS Elastic Beanstalk and RDS.",
        ],
        date: "May 2024 - Aug 2024",
        link: "/Internships",
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
    const [ref, inView] = useInView({ threshold: 0.5 });

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
                bg="transparent"
                spacing={5}
                rounded="lg"
                alignItems="center"
                pos="relative"
                // _before={{
                //     content: `""`,
                //     w: "0",
                //     h: "0",
                //     borderColor: `transparent ${useColorModeValue(
                //         "#ddf0ff",
                //         "#ddf0ff"
                //     )} transparent`,
                //     borderStyle: "solid",
                //     borderWidth: "15px 15px 15px 0",
                //     position: "absolute",
                //     left: "-15px",
                //     display: "block",
                // }}
            >
                <Avatar
                    borderWidth="2px" // Set the border width here
                    borderColor="black"
                    src={icon}
                    size="lg"
                    objectFit="cover"
                    bg="white"
                />
                <Box>
                    <HStack spacing={2} mb={1}>
                        {categories.map((cat) => (
                            <Text fontSize="sm" key={cat}>
                                {cat}, {date}
                            </Text>
                        ))}
                    </HStack>
                    <VStack spacing={2} mb={3} textAlign="left">
                        <chakra.h1
                            as={Link}
                            _hover={{ color: "teal.400" }}
                            fontSize="2xl"
                            lineHeight={1.1}
                            fontWeight="bold"
                            w="100%"
                            onClick={handleOpenModal} // Open modal on click
                            cursor="pointer" // Add cursor pointer to indicate clickability
                        >
                            {title}
                        </chakra.h1>
                        <Text fontSize="md" noOfLines={10}>
                            <UnorderedList spacing={3}>
                                {description.map((point, index) => (
                                    <ListItem key={index}>{point}</ListItem>
                                ))}
                            </UnorderedList>
                        </Text>
                    </VStack>
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
        <Flex pos="relative" alignItems="center">
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor="black"
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
                    border="3px solid #1983ff"
                    backgroundImage="none"
                    opacity={5}
                ></Box>
            </Box>
        </Flex>
    );
};

export default Milestones;
