import {
    ChevronRightIcon,
  } from "@chakra-ui/icons";
  import {
    Image,
    Button,
    Flex,
    Text,
  } from "@chakra-ui/react";
import React from "react";

const MenuItemList = () => {
  return (
    <>
      <Flex gap={"12px"} mr={{lg: "40px", base: "0px"}} flexDirection={{lg: "row", base: "column"}}>
        <Button
          bg={{lg: "#7521E208", base: "#E2E8F0"}}
          fontWeight={"500"}
          fontSize={"12px"}
          lineHeight={"170.23%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"6px"}
          py={"3px"}
          px={"12px"}
          color={"#7521E2"}
        >
          <Image src="/header/ethereum.svg" alt="eth" />
          <Text>ETH Mainnet</Text>
          <ChevronRightIcon fontSize={"18px"} />
        </Button>

        <Button
          bg={{lg: "#7521E208", base: "#E2E8F0"}}
          fontWeight={"500"}
          fontSize={"12px"}
          lineHeight={"170.23%"}
          py={"3px"}
          px={"12px"}
          color={"#474CD5"}
        >
          <Text>Connect Wallet</Text>
        </Button>

        <Button
          bg={{lg: "#7521E208", base: "#E2E8F0"}}
          fontWeight={"500"}
          fontSize={"12px"}
          lineHeight={"170.23%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"6px"}
          py={"3px"}
          px={"12px"}
          color={"#3F434A"}
        >
          <Image src="/header/cart.svg" alt="cart" />
          <Text>Cart</Text>
        </Button>
      </Flex>
    </>
  );
};

export default MenuItemList;
