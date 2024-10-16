import { VStack, Flex } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import { useInViewport } from "react-in-viewport";

import NavBar from "./NavBar";
import Profile from "./Profile";
import ContactMe from "./ContactMe";
import TechStackAndJourney from "./TechStackAndJourney";
import TechStack from "./TechStack";
import SectionContainer from "../Shared/SectionContainer";
import ScrollProgressBar from "./ScrollProgressBar";
import AboutMe from "./AboutMe";
import Project from "./Project";
import themeColors from "../Shared/Colors";

function HomePage() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);

    const { inViewport: inViewport1 } = useInViewport(ref1, { threshold: 0.7 });
    const { inViewport: inViewport2 } = useInViewport(ref2, { threshold: 0.4 });
    const { inViewport: inViewport3 } = useInViewport(ref3, { threshold: 0.2 });
    const { inViewport: inViewport4 } = useInViewport(ref4, { threshold: 0.2 });
    const { inViewport: inViewport5 } = useInViewport(ref5, {
        threshold: 0.05,
    });
    const { inViewport: inViewport6 } = useInViewport(ref6, { threshold: 0.2 });
    const { inViewport: inViewport7 } = useInViewport(ref7, { threshold: 0.2 });

    const fadeInVariants = {
        hidden: { opacity: 0 }, // Start completely transparent
        visible: { opacity: 1, transition: { duration: 0.5 } }, // Fade in
    };

    const [hasAppeared1, setHasAppeared1] = useState(false);
    const [hasAppeared2, setHasAppeared2] = useState(false);
    const [hasAppeared3, setHasAppeared3] = useState(false);
    const [hasAppeared4, setHasAppeared4] = useState(false);
    const [hasAppeared5, setHasAppeared5] = useState(false);
    const [hasAppeared6, setHasAppeared6] = useState(false);
    const [hasAppeared7, setHasAppeared7] = useState(false);

    useEffect(() => {
        if (inViewport1 && !hasAppeared1) setHasAppeared1(true);
        if (inViewport2 && !hasAppeared2) setHasAppeared2(true);
        if (inViewport3 && !hasAppeared3) setHasAppeared3(true);
        if (inViewport4 && !hasAppeared4) setHasAppeared4(true);
        if (inViewport5 && !hasAppeared5) setHasAppeared5(true);
        if (inViewport6 && !hasAppeared6) setHasAppeared6(true);
        if (inViewport7 && !hasAppeared7) setHasAppeared7(true);
    }, [
        inViewport1,
        inViewport2,
        inViewport3,
        inViewport4,
        inViewport5,
        inViewport6,
        inViewport7,
        hasAppeared1,
        hasAppeared2,
        hasAppeared3,
        hasAppeared4,
        hasAppeared5,
        hasAppeared6,
        hasAppeared7,
    ]);

    return (
        <>
            <NavBar />
            <ScrollProgressBar />
            <VStack
                // p="8rem"
                width="100vw"
                height="100%"
                // spacing="8rem"
                align="stretch"
                bg={themeColors.sunnyYellow}
                p={3}
            >
                <SectionContainer
                    id="section1"
                    refProp={ref1}
                    animate={hasAppeared1 ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    marginT="8rem"
                >
                    <Flex
                        height="100%" // Make Flex take the full height of SectionContainer
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Profile />
                    </Flex>
                </SectionContainer>
                <SectionContainer
                    id="section2"
                    refProp={ref2}
                    animate={hasAppeared2 ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    <AboutMe />
                </SectionContainer>

                <SectionContainer
                    id="section3"
                    refProp={ref3}
                    animate={hasAppeared3 ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    <TechStack />
                </SectionContainer>

                <SectionContainer
                    id="section4"
                    refProp={ref4}
                    animate={hasAppeared4 ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    <Project />
                </SectionContainer>

                <SectionContainer
                    id="section5"
                    refProp={ref5}
                    animate={hasAppeared5 ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    marginT="10rem"
                >
                    <TechStackAndJourney />
                </SectionContainer>

                <SectionContainer
                    id="section6"
                    refProp={ref6}
                    animate={hasAppeared6 ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    <ContactMe />
                </SectionContainer>
            </VStack>
        </>
    );
}

export default HomePage;
