import { Flex, Heading, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <>
      <Heading as="h1" size="4xl" noOfLines={1}>
        Hello!
      </Heading>
      <Text fontSize="3xl">I'm Eric.</Text>
      <Flex flexDir="column" gap="2">
        <Text fontSize="lg">A proficient Taiwanese 🇹🇼 developer.</Text>
        <Text fontSize="lg">I am experienced in Full-Stack, DevOps, and Quant.</Text>
        <Text fontSize="lg">Recently, I've been working on C++, Python and TypeScript.</Text>
      </Flex>
    </>
  );
};

export default Introduction;
