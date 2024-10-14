import React, { useEffect, useState } from "react";
import { FaLinkedin, FaMailBulk, FaGithub } from "react-icons/fa";
import ScrollProgressBar from "./ScrollProgressBar";
import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";

function NavBar() {
    const [isShrunk, setIsShrunk] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        // Adjust this value to change when the navbar should shrink
        setIsShrunk(scrollTop > 20); // Shrink if scrolled more than 20 pixels
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        console.log("Hello");
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Flex
                w="100%"
                position="sticky" // Makes the header sticky
                top={0} // Sticks the header to the top
                boxShadow="md" // Optional: add a shadow for separation
                p={isShrunk ? 2 : 4} // Adjust padding based on shrunk state
                bg="#fff8da"
                zIndex="1000"
                transition="padding 0.3s ease" // Smooth transition for padding change
            >
                <Heading
                    style={{ fontSize: isShrunk ? "20px" : "25px" }} // Change font size
                    fontWeight="semibold"
                    mt="5px"
                    transition="font-size 0.3s ease" // Smooth transition for font size change
                >
                    Nicholas Teng
                </Heading>
                <Spacer></Spacer>

                <IconButton
                    ml={5}
                    icon={<FaMailBulk style={{ fontSize: "20px" }} />}
                    isRound="true"
                    onClick={() => scrollToSection("section4")}
                ></IconButton>

                <a
                    href="https://www.linkedin.com/in/nicholas-teng/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <IconButton
                        ml={5}
                        icon={<FaLinkedin style={{ fontSize: "22px" }} />}
                        isRound="true"
                        onClick={null}
                    ></IconButton>
                </a>
                <a
                    href="https://github.com/SSTengNic"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <IconButton
                        ml={5}
                        icon={<FaGithub style={{ fontSize: "22px" }} />}
                        isRound="true"
                        onClick={null}
                    ></IconButton>
                </a>
            </Flex>
            <ScrollProgressBar />
        </>
    );
}

export default NavBar;
