import { Button, useMediaQuery } from "@chakra-ui/react";

const ContactButton = ({ contact }) => {
  const { title, icon, url, color } = contact;
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Button
      size="lg"
      w={isMobile ? "250px" : "330px"}
      leftIcon={icon}
      color="white"
      bg={color}
      _hover={{ bg: "gray.200", color: "gray.600" }}
      onClick={() => window.open(url, "_blank")}
      zIndex="-1"
    >
      {title}
    </Button>
  );
};

export default ContactButton;
