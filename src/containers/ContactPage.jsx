import { Flex, Heading, useMediaQuery, VStack } from "@chakra-ui/react";
import ContactButton from "@/components/ContactButton";
import contacts from "@/data/contacts";

const ContactPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex w="100%" flexDir="column" pt={isMobile ? "4" : "8"} h="50%">
      <Heading mb="8vh" align="center">
        Contact
      </Heading>
      <VStack spacing={7}>
        {contacts.map((contact, idx) => (
          <ContactButton key={idx} contact={contact} />
        ))}
      </VStack>
    </Flex>
  );
};

export default ContactPage;
