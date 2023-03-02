import { HStack, Link } from "@chakra-ui/react";
import links from "@/data/links";
import Resume from "@/components/Resume";

const DesktopLinks = () => {
  return (
    <HStack spacing={8}>
      {links.map((link, idx) => (
        <Link key={idx} href={`/#/${link.toLowerCase()}`} _hover={{ color: "blue.600" }}>
          {link}
        </Link>
      ))}
      <Resume />
    </HStack>
  );
};

export default DesktopLinks;
