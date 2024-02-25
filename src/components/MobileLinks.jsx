import {
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import links from "@/data/links";
import { FiLink } from "react-icons/fi";

const MobileLinks = () => {
  return (
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
            <Link
              href="https://weitude.com/chia_wei_lin_resume.pdf"
              _hover={{ color: "blue.600" }}
              isExternal
            >
              <MenuItem _focus={{ boxShadow: "none" }}>
                <HStack>
                  <Text>Resume</Text>
                  <FiLink />
                </HStack>
              </MenuItem>
            </Link>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MobileLinks;
