import React, { useState } from "react";
import { ReactDOM } from "react";
import { Box, Img, transform } from "@chakra-ui/react";
import "@fontsource/poppins";
import { ChevronDownIcon } from "@chakra-ui/icons";
function DropDownTax() {
  const [state, setstate] = useState(false);
  const [rotate, setrotate] = useState(false);
  const [isbg, setbg] = useState(false);
  const Toggle = () => {
    setstate(!state);
    setrotate(!rotate);
    setbg(!isbg);
  };

  return (
    <Box
      maxW={{ base: "100%", md: "180px", lg: "180px" }}
      w="100%"
      position={"relative"}
    >
      <Box
        onClick={Toggle}
        borderRadius="8px"
        p="17px"
        bg="#424970"
        color="white"
        fontFamily={"Poppins"}
        fontSize="16px"
        fontWeight={500}
        display="flex"
        justifyContent="space-between"
        alignItems={"center"}
        cursor="pointer"
      >
        Select Token
        <ChevronDownIcon
          transform={rotate ? "rotate(180deg)" : "rotate(0deg)"}
          h="32px"
          w={"32px"}
          bg={isbg ? "#FFA500" : "transparent"}
        />
      </Box>
      {state && (
        <Box
          position="absolute"
          top="58px"
          bg="#252945"
          maxW={{ base: "100%", md: "180px", lg: "180px" }}
          zIndex={{ base: "1000", md: "999", lg: "999" }}
          w="100%"
          py="9px"
          borderRadius={"2px"}
        >
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="6px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
          >
            <Img mr="9px" src="/CD.svg"></Img>
            USDC
          </Box>
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="6px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
          >
            <Img mr="9px" src="/Teh.svg"></Img>
            USDT
          </Box>
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="6px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
            bg="rgba(24, 24, 24, 0.01)"
            opacity={"0.2"}
          >
            <Img mr="9px" src="/ETH.svg"></Img>
            ETH
          </Box>
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="6px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
          >
            <Img mr="9px" src="/DAI.svg"></Img>
            DAI
          </Box>
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="6px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
          >
            <Img mr="9px" src="/WBTC.svg"></Img>
            WBTC
          </Box>
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="6px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
          >
            <Img mr="9px" src="/ENOCH.svg"></Img>
            ENOCH
          </Box>
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="6px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
          >
            <Img mr="9px" src="/Love.svg"></Img>
            LOVE
          </Box>
        </Box>
      )}
    </Box>
  );
}
export default DropDownTax;
