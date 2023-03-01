import { Box, Flex, Text } from "@chakra-ui/react";

const ExperienceCard = ({ Experience }) => {
  const { title, subtitle, period, content } = Experience;

  return (
    <>
      <Flex gap="2">
        <Box minW="180px">
          <Text mt="1">{period}</Text>
        </Box>

        <Flex flexDir="column" gap="2" minW="35vw">
          <Text as="b" fontSize="xl">
            {title}
          </Text>
          <Text as="b" fontSize="md">
            {subtitle}
          </Text>
          <Text>{content}</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default ExperienceCard;
