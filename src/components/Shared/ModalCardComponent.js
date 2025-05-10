import themeColors from "./Colors";
import {
  Card,
  CardBody,
  Box,
  Stack,
  Heading,
  Image,
  Center,
  Text,
} from "@chakra-ui/react";
const ModalCardComponent = ({
  children,
  onModalOpen,
  thumbnailPic,
  heading,
  subheading,
}) => {
  return (
    <Center flexDirection="column" p={5}>
      <Card
        borderRadius="xl"
        maxW="sm"
        mx="auto"
        backgroundColor={themeColors.justWhite}
        borderColor="black"
        borderWidth="2px"
        _hover={{ boxShadow: "xl" }}
      >
        <CardBody p={0} onClick={onModalOpen} cursor="pointer">
          <Image
            src={thumbnailPic}
            alt="Pic"
            borderTopRadius="xl"
            h="350px"
            w="100%"
            objectFit="cover"
          />
          <Box
            w="100%"
            h="2px" // Adjust height as needed
            bg="black" // Use any color you like
            borderRadius="full" // Make it rounded
          />
          <Stack mt="2" spacing="3">
            <Heading
              ml={2}
              textAlign="left"
              fontSize="lg"
              fontWeight="bold"
              mt={1}
            >
              {heading}
            </Heading>
            <Text fontSize="0.825rem" textAlign="left" ml={2} mt={-2}>
              {subheading}
            </Text>
            {children}
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};

export default ModalCardComponent;
