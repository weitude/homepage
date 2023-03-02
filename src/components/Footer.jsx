import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex w="100%" bottom="7" position="absolute" justifyContent="center">
      <Text>Copyright © {new Date().getFullYear()} Eric Lin.</Text>
    </Flex>
  );
};

export default Footer;
