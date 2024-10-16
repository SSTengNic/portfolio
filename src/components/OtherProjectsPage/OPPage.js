import { React, useRef, useEffect, useState } from "react";
import { useInViewport } from "react-in-viewport";

import SchoolProjectBody from "../SchoolProjectPage/SchoolProjectBody";
import StartupBody from "../StartupPage/StartupBody";
import SectionContainer from "../Shared/SectionContainer";
import PageWithHeader from "../Shared/PageWithHeader";
function OPPage() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const { inViewport: inViewport1 } = useInViewport(ref1, { threshold: 0.4 });
    const { inViewport: inViewport2 } = useInViewport(ref2, { threshold: 0.4 });

    const fadeInVariants = {
        hidden: { opacity: 0 }, // Start completely transparent
        visible: { opacity: 1, transition: { duration: 0.5 } }, // Fade in
    };

    const [hasAppeared1, setHasAppeared1] = useState(false);
    const [hasAppeared2, setHasAppeared2] = useState(false);

    useEffect(() => {
        if (inViewport1 && !hasAppeared1) setHasAppeared1(true);
        if (inViewport2 && !hasAppeared2) setHasAppeared2(true);
    }, [inViewport1, inViewport2, hasAppeared1, hasAppeared2]);

    return (
        <PageWithHeader HomeHeaderText={"Startups & Misc"}>
            <SectionContainer
                id="section1"
                refProp={ref1}
                animate={hasAppeared1 ? "visible" : "hidden"}
                variants={fadeInVariants}
                marginT="2rem"
            >
                <StartupBody />
            </SectionContainer>
            <SectionContainer
                id="section2"
                refProp={ref2}
                animate={hasAppeared2 ? "visible" : "hidden"}
                variants={fadeInVariants}
                marginT="6rem"
                marginB="3rem"
            >
                <SchoolProjectBody />
            </SectionContainer>
        </PageWithHeader>
    );
}

export default OPPage;
