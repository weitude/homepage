import { useEffect } from "react";
import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import avatar from "@/img/avatar.webp";
import Introduction from "@/components/Introduction";

const HomePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    window.location.href = "/#/";
  }, []);

  if (isMobile) {
    return (
      <Flex flexDir="column" gap="3" alignItems="center">
        <Introduction />
        <Image mt="5" borderRadius="full" boxSize="70vw" src={avatar} alt="Eric" />
      </Flex>
    );
  }

  return (
    <Flex minH="400px" gap="40px" justifyContent="center" alignItems="center">
      <Image borderRadius="full" boxSize="22vw" src={avatar} alt="Eric" />
      <Flex flexDir="column" gap="5">
        <Introduction />
      </Flex>
    </Flex>
  );
};

export default HomePage;
