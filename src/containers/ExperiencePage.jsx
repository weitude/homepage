import { Flex, Heading, StackDivider, VStack } from "@chakra-ui/react";
import { education, infos } from "@/data/Infos.jsx";
import InfoSection from "@/components/InfoSection";

const ExperiencePage = () => {
  return (
    <Flex w="100%" flexDir="column" px="10" pt="8">
      <Heading mb="10vh" align="center">
        Experience
      </Heading>
      <VStack spacing="10" divider={<StackDivider borderColor="gray.200" />}>
        <InfoSection title="Education" infos={education} />
        <InfoSection title="Experience" infos={infos} />
      </VStack>
    </Flex>
  );
};

export default ExperiencePage;
