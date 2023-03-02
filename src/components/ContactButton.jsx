import { Button, useMediaQuery } from "@chakra-ui/react";

const ContactButton = ({ contact }) => {
  const { title, icon, url, color } = contact;
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Button
      size="lg"
      w={isMobile ? "60vw" : "25vw"}
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
