import { Flex, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";
import ExperienceCard from "@/components/ExperienceCard.jsx";
import { Education, Experiences } from "@/data/Experiences.jsx";

const ExperiencePage = () => {
  return (
    <Flex w="100%" flexDir="column" px="10" pt="8">
      <Heading mb="10">Experience</Heading>
      <VStack spacing="10" divider={<StackDivider borderColor="gray.200" />}>
        <Flex>
          <Text minW="25vw" fontSize="3xl">
            Education
          </Text>
          <VStack spacing="10" my="5">
            <ExperienceCard Experience={Education} />
          </VStack>
        </Flex>
        <Flex>
          <Text minW="25vw" fontSize="3xl">
            Experience
          </Text>
          <VStack spacing="10" mt="5">
            {Experiences.map((Experience, idx) => (
              <ExperienceCard key={idx} Experience={Experience} />
            ))}
          </VStack>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ExperiencePage;
