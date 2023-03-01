import { Button } from "@chakra-ui/react";

const ContactButton = ({ contactButton }) => {
  const { title, icon, url, color } = contactButton;

  return (
    <Button
      size="lg"
      w="25vw"
      leftIcon={icon}
      color="white"
      bg={color}
      _hover={{ bg: "gray.200", color: "gray.600" }}
      onClick={() => window.open(url, "_blank")}
    >
      {title}
    </Button>
  );
};

export default ContactButton;
