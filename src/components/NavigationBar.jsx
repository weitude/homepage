import { Circle, Flex, HStack, Link, Text, useMediaQuery } from "@chakra-ui/react";

import { FaDownload } from "react-icons/fa";

const NavigationBar = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const links = ["Experience", "Projects", "Contact"];

  const NavLink = ({ link }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{ color: "orange.600" }}
      href={`/#/${link.toLowerCase()}`}
    >
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
            <Circle size="30" bg="tomato" color="white" />
          </Link>

          <Text fontSize="md" fontWeight="600">
            Chia Wei (Eric) Lin
          </Text>
        </HStack>
        <HStack mr="36" spacing={4}>
          {links.map((link) => (
            <NavLink key={link} link={link} />
          ))}
          <Link
            href="https://weitude.tech/chia_wei_lin_resume.pdf"
            isExternal
            _hover={{ color: "orange.600" }}
          >
            <HStack>
              <Text fontSize="md" fontWeight="600">
                resume
              </Text>
              <FaDownload />
            </HStack>
          </Link>
        </HStack>
      </Flex>
    );
  }
};

export default NavigationBar;
