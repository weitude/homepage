import { HStack, Link, Text } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <Link
      href="https://weitude.tech/chia_wei_lin_resume.pdf"
      isExternal
      _hover={{ color: "blue.600" }}
    >
      <HStack>
        <Text>Resume</Text>
        <FaDownload />
      </HStack>
    </Link>
  );
};

export default Resume;
