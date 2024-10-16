import { VStack } from "@chakra-ui/react";
import HomeHeader from "./HomeHeader";

import themeColors from "./Colors";

const PageWithHeader = ({ children, HomeHeaderText }) => {
    return (
        <VStack
            width="100vw"
            height="100%"
            // spacing="8rem"
            align="stretch"
            bg={themeColors.sunnyYellow}
        >
            <HomeHeader HomeHeaderText={HomeHeaderText} />
            {children}
        </VStack>
    );
};

export default PageWithHeader;
