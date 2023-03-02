import { Flex, Heading, VStack } from "@chakra-ui/react";
import { contactButtons } from "@/data/Infos.jsx";
import ContactButton from "@/components/ContactButton.jsx";

const ContactPage = () => {
  return (
    <Flex w="100%" flexDir="column" px="10" pt="8">
      <Heading mb="10vh" align="center">
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
