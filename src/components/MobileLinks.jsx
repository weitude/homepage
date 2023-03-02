import { IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import links from "@/data/links";
import Resume from "@/components/Resume";

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
            <MenuItem>
              <Resume />
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MobileLinks;
