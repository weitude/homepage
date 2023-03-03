import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";

const InfoCard = ({ info }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { title, subtitle, period, content, buttons } = info;

  return (
    <Flex gap="2" flexDir={isMobile ? "column" : "row"}>
      <Text minW="180px" mt="1">
        {period}
      </Text>
      <Flex flexDir="column" gap="2" minW="35vw" w={isMobile ? "100%" : "35vw"}>
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
