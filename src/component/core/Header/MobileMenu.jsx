import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Link,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import MenuItemList from './MenuList';
import SearchBox from './Search';

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        color="#FFF"
        as={Button}
        p="0"
        ml="8px"
        _hover={{ bg: "transparent" }}
        _focus={{ bg: "transparent" }}
      >
        <HamburgerIcon color="#44566C" fontSize="22px" fontWeight="600" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="rgba(18, 26, 33, 0.8)" backdropFilter="blur(2px)" />
        <DrawerContent bg="#FFFFFF" minW={{ base: "100%", sm: "50%" }}>
          <DrawerCloseButton color="#44566C" fontSize="20px" />
          <DrawerHeader pt={"30px"} pb={"20px"}>
            <Link
              href="#"
              height={"80px"}
              width={"140px"}
              mx={"auto"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src="/Logo.svg" alt="logo" w={"100%"} />
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              flexDirection="column"
              gap="25px"
              alignItems="center"
              justifyContent="center"
            >
              <SearchBox/>
              <MenuItemList />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
