import { Flex, Heading, StackDivider, useMediaQuery, VStack } from "@chakra-ui/react";
import InfoSection from "@/components/InfoSection";
import education from "@/data/education";
import infos from "@/data/infos";

const ExperiencePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex w="100%" flexDir="column" pt={isMobile ? "4" : "8"}>
      <Heading mb={isMobile ? "4vh" : "8vh"} align="center">
        Experience
      </Heading>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing="6"
        alignItems={isMobile ? "start" : "center"}
      >
        <InfoSection title="Education" infos={education} />
        <InfoSection title="Experience" infos={infos} />
      </VStack>
    </Flex>
  );
};

export default ExperiencePage;
