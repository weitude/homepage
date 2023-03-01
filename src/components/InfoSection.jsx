import { Flex, Text, VStack } from "@chakra-ui/react";
import InfoCard from "@/components/InfoCard";

const InfoSection = ({ title, infos }) => {
  return (
    <Flex>
      <Text minW="25vw" fontSize="3xl">
        {title}
      </Text>
      <VStack spacing="10" my="3">
        {infos.map((info, idx) => (
          <InfoCard key={idx} info={info} />
        ))}
      </VStack>
    </Flex>
  );
};

export default InfoSection;
