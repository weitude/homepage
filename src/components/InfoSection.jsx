import { Flex, StackDivider, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import InfoCard from "@/components/InfoCard";

const InfoSection = ({ title, infos }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex gap="5" flexDir={isMobile ? "column" : "row"}>
      <Text minW="20vw" fontSize="3xl">
        {title}
      </Text>
      <VStack
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
