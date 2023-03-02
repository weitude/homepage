import { Box, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import avatar from "@/img/avatar.webp";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.location.href = "/#/";
  }, []);

  return (
    <Flex minH="400px" gap="40px" justifyContent="center" alignItems="center">
      <Image borderRadius="full" boxSize="25vw" src={avatar} alt="Eric" />
      <Flex flexDir="column" gap="5">
        <Heading as="h1" size="4xl" noOfLines={1}>
          Hello!
        </Heading>
        <Text fontSize="3xl">I'm Eric.</Text>
        <Flex flexDir="column" gap="2">
          <Text fontSize="lg">A proficient Taiwanese 🇹🇼 developer.</Text>
          <Text fontSize="lg">
            I am experienced in DevOps, Full Stack Development, and Cyber Security.
          </Text>
          <Text fontSize="lg">Recently, I've been working on C++, Python and JavaScript.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePage;
