import { Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import avatar from "@/img/avatar.webp";
import { useEffect } from "react";

const HomePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    window.location.href = "/#/";
  }, []);

  if (isMobile) {
    return (
      <Flex flexDir="column" gap="3" alignItems="center">
        <Heading as="h1" size="4xl" noOfLines={1}>
          Hello!
        </Heading>
        <Text fontSize="3xl">I'm Eric.</Text>
        <Flex flexDir="column" gap="2">
          <Text fontSize="lg">A proficient Taiwanese 🇹🇼 developer.</Text>
          <Text fontSize="lg">I am experienced in Full-Stack, DevOps, and Cyber Security.</Text>
          <Text fontSize="lg">Recently, I've been working on C++, Python and JavaScript.</Text>
        </Flex>
        <Image mt="5" borderRadius="full" boxSize="70vw" src={avatar} alt="Eric" />
      </Flex>
    );
  }

  return (
    <Flex minH="400px" gap="40px" justifyContent="center" alignItems="center">
      <Image borderRadius="full" boxSize="22vw" src={avatar} alt="Eric" />
      <Flex flexDir="column" gap="5">
        <Heading as="h1" size="4xl" noOfLines={1}>
          Hello!
        </Heading>
        <Text fontSize="3xl">I'm Eric.</Text>
        <Flex flexDir="column" gap="2">
          <Text fontSize="lg">A proficient Taiwanese 🇹🇼 developer.</Text>
          <Text fontSize="lg">I am experienced in Full-Stack, DevOps, and Cyber Security.</Text>
          <Text fontSize="lg">Recently, I've been working on C++, Python and JavaScript.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePage;
