import { Button, Flex, ListItem, Text, UnorderedList, useMediaQuery } from "@chakra-ui/react";

const InfoCard = ({ info }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { title, subtitle, period, content, buttons } = info;

  return (
    <Flex gap="3" flexDir={isMobile ? "column" : "row"}>
      <Text minW={["90px", "120px", "200px"]} mt="1">
        {period}
      </Text>
      <Flex flexDir="column" gap="2" w="100%">
        <Text as="b" fontSize="xl">
          {title}
        </Text>
        <Text as="b" fontSize="md">
          {subtitle}
        </Text>
        <UnorderedList>
          {content?.map((text, idx) => (
            <ListItem mb="2" key={idx}>
              {text}
            </ListItem>
          ))}
        </UnorderedList>
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
