import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex w="100%" bottom="7" position="absolute" justifyContent="center">
      <Link href={"https://weitude.tech"} _hover={{ color: "blue.600" }}>
        <Text>Copyright © {new Date().getFullYear()} Eric Lin.</Text>
      </Link>
    </Flex>
  );
};

export default Footer;
