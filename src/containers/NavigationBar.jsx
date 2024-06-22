import { Circle, Flex, HStack, Link, Text, useMediaQuery } from "@chakra-ui/react";
import MobileLinks from "@/components/MobileLinks";
import DesktopLinks from "@/components/DesktopLinks";

const NavigationBar = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      w="100%"
      h="100px"
      bg="white"
      position="fixed"
      justifyContent="space-around"
      alignItems="center"
      zIndex="1014"
    >
      <HStack spacing="3">
        <Link href="/#/" mb="2px">
          <Circle size="30" bg="#7CC1F1" />
        </Link>
        <Link href="/#/" fontWeight="600">
          Chia Wei (Eric) Lin
        </Link>
      </HStack>
      {isMobile ? <MobileLinks /> : <DesktopLinks />}
    </Flex>
  );
};

export default NavigationBar;
