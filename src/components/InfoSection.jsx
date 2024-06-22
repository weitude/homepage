import { Flex, StackDivider, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import InfoCard from "@/components/InfoCard";

const InfoSection = ({ title, infos }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex gap="5" flexDir={isMobile ? "column" : "row"} w="100%" px="5%">
      <Text minW="190px" fontSize="3xl">
        {title}
      </Text>
      <VStack
        w="100%"
        spacing="8"
        my="2"
        divider={<StackDivider borderColor="gray.200" />}
        alignItems="start"
      >
        {infos.map((info, idx) => (
          <InfoCard key={idx} info={info} />
        ))}
      </VStack>
    </Flex>
  );
};

export default InfoSection;
