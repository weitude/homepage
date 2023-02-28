import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import avatar from "@/img/avatar.jpg";

const Home = () => {
  return (
    <Flex h="100vh" p="100px" justifyContent="center">
      <HStack w="60vw">
        <Image borderRadius="full" boxSize="500px" src={avatar} alt="Eric" />
        <VStack>
          <Heading as="h1" size="4xl" noOfLines={1}>
            Hello
          </Heading>
          <Text fontSize="2xl">A Bit About Me</Text>
          <Text>Hi 👋 I'm Eric. A proficient Taiwanese 🇹🇼 developer.</Text>
          <Text>I am experienced in DevOps, Full Stack Development, and Cyber Security.</Text>
          <Text>Recently, I've been working on C++, Python and JavaScript.</Text>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default Home;
