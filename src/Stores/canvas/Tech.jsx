import React from "react";

import { Card, Flex, Box } from "@chakra-ui/react";
import BallCanvas from "./Ball";
import SectionWrapper from "./SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
    return (
        <Card bg="transparent" boxShadow="none">
            <Flex
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
            >
                {technologies.map((technology) => (
                    <Box key={technology.name} w="100px" h="100px" m="2">
                        <BallCanvas icon={technology.icon} />
                    </Box>
                ))}
            </Flex>
        </Card>
    );
};
export default SectionWrapper(Tech, "");
