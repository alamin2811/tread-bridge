import {
  TriangleDownIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Link,
  Image,
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import MenuComponent from './Menu';
import SearchBox from "./Search";
import MenuItemList from './MenuList';
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import AfterLoginMenu from "./AfterLoginMenu";

const Header = () => {
  return (
    <>
      <Box py="12px" bg="#FFFFFF">
        <Container maxW={"1360px"} px="20px">
          <Flex justifyContent="space-between" alignItems="center" gap="20px">
            <Flex alignItems="center">
              <MenuComponent/>
              <Link href="#" maxW={{sm: "140px", base: "120px"}} minw={{sm: "140px", base: "120px"}} ml={{sm: "20px", base: "15px"}}>
                <Image src="/Logo.svg" alt="logo" />
              </Link>
              <Box ml={{xl: "54px", md: "40px"}} display={{md: "block", base: "none"}}>
                <SearchBox/>
              </Box>
            </Flex>
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <Box display={{lg: "block", base: "none"}}>
                <MenuItemList/>
              </Box>
              <Flex>
                <Button
                  bg={"transparent"}
                  px={"0px"}
                  mr={{sm: "8px", base: "0px"}}
                  _hover={{ bg: "transparent", opacity: "0.8" }}
                  _focus={{ bg: "transparent" }}
                >
                  <Image src="/header/headphone.svg" alt="icon" />
                </Button>
                <Button
                  bg={"transparent"}
                  mr={{md: "20px", sm: "10px", base: "0px"}}
                  px={"0px"}
                  _hover={{ bg: "transparent", opacity: "0.8" }}
                  _focus={{ bg: "transparent" }}
                >
                  <Image src="/header/notification.svg" alt="icon" />
                </Button>
                <Box>
                  {/* <UserMenu/> */}
                  <AfterLoginMenu/>
                </Box>
              </Flex>
              <Box display={{lg: "none", base: "block"}}>
                <MobileMenu/>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
