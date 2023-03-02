import { Flex, Heading, useMediaQuery, VStack } from "@chakra-ui/react";
import { contactButtons } from "@/data/Infos.jsx";
import ContactButton from "@/components/ContactButton.jsx";

const ContactPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex w="100%" flexDir="column" pt={isMobile ? "4" : "8"} h="50%">
      <Heading mb="8vh" align="center">
        Contact
      </Heading>
      <VStack spacing={7}>
        {contactButtons.map((contactButton, idx) => (
          <ContactButton key={idx} contactButton={contactButton} />
        ))}
      </VStack>
    </Flex>
  );
};

export default ContactPage;
