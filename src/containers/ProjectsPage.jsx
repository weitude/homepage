import { Flex, Heading, StackDivider, VStack } from "@chakra-ui/react";
import { projects } from "@/data/Infos";
import InfoSection from "@/components/InfoSection";

const ProjectsPage = () => {
  return (
    <Flex w="100%" flexDir="column" px="10" pt="8">
      <Heading mb="10vh" align="center">
        Projects
      </Heading>
      <VStack spacing="10" divider={<StackDivider borderColor="gray.200" />}>
        <InfoSection title="Projects" infos={projects} />
      </VStack>
    </Flex>
  );
};
export default ProjectsPage;
