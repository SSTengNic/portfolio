import {
    Flex,
    Heading,
    Spacer,
    HStack,
    Link as ChakraLink,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    VStack,
    useDisclosure,
    useMediaQuery,
    IconButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import themeColors from "./Colors";
import { GiHamburgerMenu } from "react-icons/gi";
const HomeHeader = ({ HomeHeaderText }) => {
    const [isShrunk, setIsShrunk] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsShrunk(scrollTop > 20);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        { name: "Home", to: "/portfolio" },
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

    // Find the index of the LinkedIn link
    const linkedInIndex = links.findIndex((link) => link.name === "LinkedIn");

    // Determine the additional links to add
    const additionalLinks = [];
    if (HomeHeaderText === "Internships") {
        additionalLinks.push(
            { name: "Web Applications", to: "/WebappProjects" },
            { name: "Startups & Misc", to: "/StartupMisc" }
        );
    } else if (HomeHeaderText === "Web Application Projects") {
        additionalLinks.push(
            { name: "Startups & Misc", to: "/StartupMisc" },
            { name: "Internships", to: "/Internships" }
        );
    } else if (HomeHeaderText === "Startups & Misc") {
        additionalLinks.push(
            { name: "Web Applications", to: "/WebappProjects" },
            { name: "Internships", to: "/Internships" }
        );
    }

    // Insert the additional links before the LinkedIn link
    if (linkedInIndex !== -1) {
        links.splice(linkedInIndex, 0, ...additionalLinks);
    }

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
                    as={RouterLink}
                    to={link.to}
                    _hover={{
                        textDecoration: "none",
                        borderBottom: "2px solid black",
                    }}
                    onClick={isMobile ? onClose : undefined}
                >
                    {link.name}
                </ChakraLink>
            )
        );

    return (
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
                {HomeHeaderText}
            </Heading>
            <Spacer />

            {isLargerThan768 ? (
                <HStack spacing={5} mr={5}>
                    {renderLinks()}
                </HStack>
            ) : (
                <>
                    <IconButton
                        aria-label="Open menu"
                        icon={<GiHamburgerMenu />}
                        onClick={onOpen}
                        variant="outline"
                        mr={2}
                        borderWidth="1px"
                        borderColor="black"
                    />
                    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>{HomeHeaderText}</DrawerHeader>
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
    );
};

export default HomeHeader;
