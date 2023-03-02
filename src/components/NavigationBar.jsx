import { Circle, Flex, HStack, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const NavigationBar = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const links = ["Experience", "Projects", "Contact"];

  const NavLink = ({ link }) => (
    <Link _hover={{ color: "cyan.600" }} href={`/#/${link.toLowerCase()}`}>
      {link}
    </Link>
  );

  if (isMobile) {
    return <div>hi</div>;
  } else {
    return (
      <Flex w="100%" h="100px" justifyContent="space-between" position="fixed" bg="white">
        <HStack ml="36">
          <Link href={"."}>
            <Circle size="30" bg="cyan.300" />
          </Link>

          <Text fontWeight="600">Chia Wei (Eric) Lin</Text>
        </HStack>
        <HStack mr="36" spacing={8}>
          {links.map((link) => (
            <NavLink key={link} link={link} />
          ))}
          <Link
            href="https://weitude.tech/chia_wei_lin_resume.pdf"
            isExternal
            _hover={{ color: "cyan.600" }}
          >
            <HStack>
              <Text>Resume</Text>
              <FaDownload />
            </HStack>
          </Link>
        </HStack>
      </Flex>
    );
  }
};

export default NavigationBar;
