import React, { useEffect, useState } from "react";
import { Progress } from "@chakra-ui/react";

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Progress
            value={scrollProgress}
            size="sm" // Change size as needed
            colorScheme="blue" // Change to desired color scheme
            position="fixed"
            // top="65px"
            left="0"
            width="100%"
            zIndex="999" // Lower than the header's zIndex
            hasStripe // Optional: add striped effect
            isAnimated // Optional: add animation
        />
    );
};

export default ScrollProgressBar;
