import React, { useState } from "react";
import { ReactDOM } from "react";
import { Box, Img } from "@chakra-ui/react";
import "@fontsource/poppins";
import { ChevronDownIcon } from "@chakra-ui/icons";
function DropDownenoch({ Name }) {
  const [state, setstate] = useState(false);
  const [rotate, setrotate] = useState(false);
  const [isbg, setbg] = useState(false);
  const Toggle = () => {
    setstate(!state);
    setrotate(!rotate);
    setbg(!isbg);
  };

  return (
    <Box w={"100%"} position={"relative"}>
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
        {Name}

        <ChevronDownIcon
          transform={rotate ? "rotate(180deg)" : "rotate(0deg)"}
          h="32px"
          w={"32px"}
          bg={isbg ? "#FFA500" : "transparent"}
        />
      </Box>
      {state ? (
        <Box
          onClick={Toggle}
          position="absolute"
          top="58px"
          bg="#252945"
          w="100%"
          p="24px"
          borderRadius={"2px"}
          zIndex="999"
        >
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="13px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
            borderBottom={"1px solid #4A5284"}
            paddingBottom="13px"
          >
            Ethereum Mainnet
          </Box>

          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="13px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
            borderBottom={"1px solid #4A5284"}
            paddingBottom="13px"
          >
            Polygon Mainnet
          </Box>
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="13px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
            borderBottom={"1px solid #4A5284"}
            paddingBottom="13px"
          >
            Avalanche Mainnet
          </Box>
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="13px"
            px="16px"
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
            borderBottom={"1px solid #4A5284"}
            paddingBottom="13px"
          >
            Binance smart Chain network
          </Box>
          <Box
            color="white"
            display={"flex"}
            alignItems="center"
            py="13px"
            px="16px"
            paddingBottom={"0px"}
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "rgba(48, 53, 90, 0.6)" }}
            cursor="pointer"
          >
            Solana Mainnet
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}
export default DropDownenoch;
