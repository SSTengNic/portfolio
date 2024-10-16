import React, { useEffect, useState } from "react";
import ScrollProgressBar from "./ScrollProgressBar";
import {
    Flex,
    Heading,
    Spacer,
    Link as ChakraLink,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    DrawerHeader,
    VStack,
    HStack,
    useMediaQuery,
} from "@chakra-ui/react";
import themeColors from "../Shared/Colors";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar({ headerText = "Nicholas Teng" }) {
    const [isShrunk, setIsShrunk] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsShrunk(scrollTop > 20);
    };

    const scrollToSectionOffset = (sectionId) => {
        const section = document.getElementById(sectionId);
        console.log("section: ", section);
        let offset;
        if (section) {
            const sectionTop =
                section.getBoundingClientRect().top + window.scrollY;
            if (sectionId === "section1") {
                offset = 220;
            } else {
                offset = 100;
            }
            window.scrollTo({
                top: sectionTop - offset,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        { name: "Projects", sectionId: "section4" },
        { name: "Milestones", sectionId: "section5" },
        { name: "Contact Me", sectionId: "section6" },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/nicholas-teng/",
            external: true,
        },
        {
            name: "Github",
            href: "https://github.com/SSTengNic",
            external: true,
        },
    ];

    const renderLinks = (isMobile = false) =>
        links.map((link) =>
            link.external ? (
                <ChakraLink
                    key={link.name}
                    href={link.href}
                    isExternal
                    _hover={{
                        textDecoration: "none",
                        borderBottom: "2px solid black",
                    }}
                    onClick={isMobile ? onClose : undefined}
                >
                    {link.name}
                </ChakraLink>
            ) : (
                <ChakraLink
                    key={link.name}
                    as="button"
                    onClick={() => {
                        scrollToSectionOffset(link.sectionId);
                        if (isMobile) onClose();
                    }}
                    _hover={{
                        textDecoration: "none",
                        borderBottom: "2px solid black",
                    }}
                >
                    {link.name}
                </ChakraLink>
            )
        );

    return (
        <>
            <Flex
                w="100%"
                position="sticky"
                top={0}
                boxShadow="md"
                p={isShrunk ? 2 : 4}
                bg={themeColors.sunnyYellow}
                zIndex="1000"
                transition="padding 0.3s ease"
                justifyContent="center"
                alignItems="center"
            >
                <Heading
                    style={{ fontSize: isShrunk ? "20px" : "25px" }}
                    fontWeight="semibold"
                    mt="5px"
                    transition="font-size 0.3s ease"
                >
                    <ChakraLink
                        onClick={() => scrollToSectionOffset("section1")}
                        _hover={{
                            textDecoration: "none",
                            borderBottom: "2px solid black",
                        }}
                    >
                        {headerText}
                    </ChakraLink>
                </Heading>
                <Spacer />
                {isLargerThan768 ? (
                    <HStack spacing={5} mr={5}>
                        {renderLinks()}
                    </HStack>
                ) : (
                    <>
                        <IconButton
                            aria-label="Open Menu"
                            icon={<GiHamburgerMenu />}
                            display={{ base: "flex", md: "none" }}
                            onClick={onOpen}
                            variant="outline"
                            mr={2}
                        />
                        <Drawer
                            isOpen={isOpen}
                            placement="right"
                            onClose={onClose}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader>{headerText}</DrawerHeader>
                                <DrawerBody>
                                    <VStack spacing={4} align="start">
                                        {renderLinks(true)}
                                    </VStack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </>
                )}
            </Flex>
            <ScrollProgressBar />
        </>
    );
}

export default NavBar;
