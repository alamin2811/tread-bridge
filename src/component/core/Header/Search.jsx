import { Search2Icon } from "@chakra-ui/icons";
import { Box, Input, Button } from "@chakra-ui/react";
import React from "react";

const SearchBox = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        bg={{ md: "#F4F6F9", base: "#E2E8F0" }}
        borderRadius={"4px"}
        h={"42px"}
        maxW={"292px"}
        w={"100%"}
        py={"10px"}
        pl={"8px"}
        pr={"16px"}
      >
        <Button
          bg={"transparent"}
          border={"none"}
          outline={"none"}
          px={"0px"}
          py={"0px"}
          _hover={{ bg: "transparent", opacity: "0.8" }}
          _focus={{ bg: "transparent" }}
        >
          <Search2Icon color={"#8A9099"} fontSize={"22px"} />
        </Button>
        <Input
          placeholder="Search Enoch"
          bg={"transparent"}
          border={"none"}
          outline={"none"}
          pl={"5px"}
          _focusVisible={{ outline: "none" }}
        />
      </Box>
    </>
  );
};

export default SearchBox;
