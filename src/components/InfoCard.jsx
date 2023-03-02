import { Button, Flex, Text } from "@chakra-ui/react";

const InfoCard = ({ info }) => {
  const { title, subtitle, period, content, buttons } = info;

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
        <Flex mt="2" gap="4">
          {buttons?.map((button, idx) => (
            <Button
              key={idx}
              size="xs"
              fontSize="sm"
              leftIcon={button.icon}
              color="white"
              bg="gray.500"
              _hover={{ bg: "gray.600" }}
              onClick={() => window.open(button.link, "_blank")}
            >
              {button.title}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InfoCard;
