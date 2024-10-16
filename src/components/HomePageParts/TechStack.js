import { Box, Tooltip, Text, Grid, HStack } from "@chakra-ui/react";
import {
    FaPython,
    FaReact,
    FaDocker,
    FaRobot,
    FaDatabase,
    FaAws,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
    SiMysql,
    SiKubernetes,
    SiDeno,
    SiAstro,
    SiSvelte,
    SiAwslambda,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { GiBeanstalk } from "react-icons/gi";
import themeColor from "../Shared/Colors";
// Categorize the tech icons
const languages = [
    { icon: <IoLogoJavascript />, label: "JavaScript" },
    { icon: <FaPython />, label: "Python" },
];

const frontend = [
    { icon: <FaReact />, label: "React" },
    { icon: <SiAstro />, label: "Astro" },
    { icon: <SiSvelte />, label: "Svelte" },
];

const software = [
    { icon: <FaDocker />, label: "Docker" },
    { icon: <SiKubernetes />, label: "Kubernetes" },
    { icon: <FaRobot />, label: "UiPath" },
    { icon: <FaGitAlt />, label: "Git" },
];

const backend = [
    { icon: <SiDeno />, label: "Deno" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <BiLogoPostgresql />, label: "PostgreSQL" },
];

const aws = [
    { icon: <SiAwslambda />, label: "Lambda" },
    { icon: <FaDatabase />, label: "DynamoDB" },
    { icon: <GiBeanstalk />, label: "Beanstalk" },

    { icon: <FaAws />, label: "AWS RDS" },
];

const TechStackCard = ({ title, items }) => {
    return (
        <Grid
            maxW="200px" // Set the maximum width of the card
            width="100%" // Makes the card responsive
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            p={4}
            boxShadow="md"
            bg={themeColor.justWhite}
            textAlign="center"
            height="225px"
        >
            <Text fontSize="2xl" mb={4}>
                {title}
            </Text>
            <Box>
                {items.map((tech, index) => (
                    <Tooltip
                        key={index}
                        label={tech.label}
                        fontSize="md"
                        placement="top"
                        hasArrow
                    >
                        <Box
                            as="span"
                            display="inline-block"
                            m={2} // Adjusted margin for closer spacing
                            cursor="pointer"
                            transition="transform 0.2s"
                            _hover={{ transform: "scale(1.2)" }}
                        >
                            <Box as="span" fontSize="45px">
                                {tech.icon}
                            </Box>
                        </Box>
                    </Tooltip>
                ))}
            </Box>
        </Grid>
    );
};

const TechStack = () => {
    return (
        <>
            <Text textAlign="center" fontSize="3xl">
                <b>Tech Stack </b>
            </Text>
            <HStack p={5} justify="center" wrap="wrap">
                <TechStackCard title="Languages" items={languages} />
                <TechStackCard title="Software" items={software} />
                <TechStackCard title="Frontend" items={frontend} />
                <TechStackCard title="Backend" items={backend} />
                <TechStackCard title="AWS" items={aws} />
            </HStack>
        </>
    );
};

export default TechStack;
