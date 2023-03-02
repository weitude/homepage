import {
  Circle,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const NavigationBar = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const links = ["Experience", "Projects", "Contact"];

  if (isMobile) {
    return (
      <Flex
        w="100%"
        h="100px"
        position="fixed"
        bg="white"
        justifyContent="space-around"
        alignItems="center"
      >
        <HStack spacing="3">
          <Link href={"."}>
            <Circle size="30" bg="#7CC1F1" />
          </Link>
          <Text fontWeight="600">Chia Wei (Eric) Lin</Text>
        </HStack>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={IconButton}
                icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              />
              <MenuList>
                {links.map((link, idx) => (
                  <Link key={idx} href={`/#/${link.toLowerCase()}`} _hover={{ color: "blue.600" }}>
                    <MenuItem _focus={{ boxShadow: "none" }}>{link}</MenuItem>
                  </Link>
                ))}
                <MenuItem>
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
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    );
  }

  return (
    <Flex w="100%" h="100px" justifyContent="space-around" position="fixed" bg="white">
      <HStack spacing="4">
        <Link href={"."}>
          <Circle size="30" bg="#7CC1F1" />
        </Link>
        <Text fontWeight="600">Chia Wei (Eric) Lin</Text>
      </HStack>
      <HStack spacing={8}>
        {links.map((link, idx) => (
          <Link key={idx} href={`/#/${link.toLowerCase()}`} _hover={{ color: "blue.600" }}>
            {link}
          </Link>
        ))}
        <Link
          href="https://weitude.tech/chia_wei_lin_resume.pdf"
          _hover={{ color: "blue.600" }}
          isExternal
        >
          <HStack>
            <Text>Resume</Text>
            <FaDownload />
          </HStack>
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavigationBar;
