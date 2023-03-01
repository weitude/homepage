import { Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import avatar from "@/img/avatar.jpg";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.location.href = "/#/";
  }, []);

  return (
    <HStack w="60vw" spacing="70px">
      <Image borderRadius="full" boxSize="40vh" src={avatar} alt="Eric" />
      <Flex flexDirection="column" gap="5">
        <Heading as="h1" size="4xl" noOfLines={1} align="left">
          Hello!
        </Heading>
        <Text fontSize="3xl" align="start">
          I'm Eric.
        </Text>
        <Text>
          A proficient Taiwanese 🇹🇼 developer. I am experienced in DevOps, Full Stack Development,
          and Cyber Security. Recently, I've been working on C++, Python and JavaScript.
        </Text>
      </Flex>
    </HStack>
  );
};

export default HomePage;
