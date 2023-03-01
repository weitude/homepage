import { Flex, Text } from "@chakra-ui/react";

const InfoCard = ({ info }) => {
  const { title, subtitle, period, content } = info;

  return (
    <Flex gap="2">
      <Text minW="180px" mt="1">
        {period}
      </Text>

      <Flex flexDir="column" gap="2" minW="35vw" w="35vw">
        <Text as="b" fontSize="xl">
          {title}
        </Text>
        <Text as="b" fontSize="md">
          {subtitle}
        </Text>
        <Text>{content}</Text>
      </Flex>
    </Flex>
  );
};

export default InfoCard;
