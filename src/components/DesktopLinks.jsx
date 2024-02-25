import { HStack, Link, Text } from "@chakra-ui/react";
import links from "@/data/links";
import { FiLink } from "react-icons/fi";

const DesktopLinks = () => {
  return (
    <HStack spacing={8}>
      {links.map((link, idx) => (
        <Link key={idx} href={`/#/${link.toLowerCase()}`} _hover={{ color: "blue.600" }}>
          {link}
        </Link>
      ))}
      <Link
        href="https://weitude.com/chia_wei_lin_resume.pdf"
        _hover={{ color: "blue.600" }}
        isExternal
      >
        <HStack>
          <Text>Resume</Text>
          <FiLink />
        </HStack>
      </Link>
    </HStack>
  );
};

export default DesktopLinks;
