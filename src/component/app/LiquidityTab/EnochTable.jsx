import { Box, Img, Table, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins";

export const EnochTable = () => {
  return (
    <Box
      w="100%"
      overflowX={{ base: "scroll", md: "scroll", lg: "scroll", xl: "hidden" }}
    >
      <Table
        w={{ base: "900px", md: "900px", lg: "100%" }}
        bg={"#282E4A"}
        size="md"
        border={"none"}
        mb={"16px"}
      >
        <Thead></Thead>
        <Tbody>
          <Tr
            paddingBottom={"24px"}
            borderBottom="16px solid #161A2D"
            borderRadius={"2px"}
          >
            <Td
              p="22px"
              color={"#A1A8C9"}
              fontSize="14px"
              fontWeight={"500"}
              lineHeight="24px"
            >
              <Box display={"flex"}>Composition</Box>
            </Td>
            <Td
              color={"#A1A8C9"}
              fontSize="14px"
              fontWeight={"500"}
              lineHeight="24px"
              p="22px"
            >
              Pool value
            </Td>
            <Td
              color={"#A1A8C9"}
              fontSize="14px"
              fontWeight={"500"}
              lineHeight="24px"
              p="22px"
            >
              24hrs Volume
            </Td>
            <Td
              color={"#A1A8C9"}
              fontSize="14px"
              fontWeight={"500"}
              lineHeight="24px"
              p="22px"
            >
              Fees
            </Td>
            <Td color={"white"} p="22px"></Td>
            <Td p="22px"></Td>
          </Tr>
          <Tr
            paddingBottom={"24px"}
            borderBottom="16px solid #161A2D"
            borderRadius={"2px"}
          >
            <Td p="22px">
              <Box display={"flex"}>
                <Img src="/pinkheart.svg" opacity={"7"} zIndex="9999" />
                <Img src="/bluecoins.svg" opacity={"7"} ml="-7px" />
              </Box>
            </Td>
            <Td color={"white"} p="22px">
              $ 2,000,456
            </Td>
            <Td color={"white"} p="22px">
              $ 21,456
            </Td>
            <Td color={"white"} p="22px">
              12.3%
            </Td>
            <Td color={"white"} p="22px"></Td>
            <Td p="22px">
              <Box
                display="flex"
                border={"1px solid white"}
                borderRadius="50px"
                h={"30px"}
                width="114px"
                color="white"
                letterSpacing={"-0.011em"}
                fontSize="14px"
                fontWeight={"400"}
                justifyContent="center"
                alignItems={"center"}
              >
                + Liquidity
              </Box>
            </Td>
          </Tr>
          <Tr
            paddingBottom={"24px"}
            borderBottom="16px solid #161A2D"
            borderRadius={"2px"}
          >
            <Td p="22px">
              <Box display={"flex"}>
                <Img src="/pinkheart.svg" opacity={"7"} zIndex="9999" />
                <Img src="/greentee.svg" opacity={"7"} ml="-7px" />
              </Box>
            </Td>
            <Td color={"white"} p="22px">
              $ 2,000,456
            </Td>
            <Td color={"white"} p="22px">
              $ 21,456
            </Td>
            <Td color={"white"} p="22px">
              12.3%
            </Td>
            <Td color={"white"} p="22px"></Td>
            <Td p="22px">
              <Box
                display="flex"
                border={"1px solid white"}
                borderRadius="50px"
                h={"30px"}
                width="114px"
                color="white"
                letterSpacing={"-0.011em"}
                fontSize="14px"
                fontWeight={"400"}
                justifyContent="center"
                alignItems={"center"}
              >
                + Liquidity
              </Box>
            </Td>
          </Tr>
          <Tr
            paddingBottom={"24px"}
            borderBottom="16px solid #161A2D"
            borderRadius={"2px"}
          >
            <Td p="22px">
              <Box display={"flex"}>
                <Img src="/pinkheart.svg" opacity={"7"} zIndex="9999" />
                <Img src="/yellowlabel.svg" opacity={"7"} ml="-7px" />
              </Box>
            </Td>
            <Td color={"white"} p="22px">
              $ 2,000,456
            </Td>
            <Td color={"white"} p="22px">
              $ 21,456
            </Td>
            <Td color={"white"} p="22px">
              12.3%
            </Td>
            <Td color={"white"} p="22px"></Td>
            <Td p="22px">
              <Box
                display="flex"
                border={"1px solid white"}
                borderRadius="50px"
                h={"30px"}
                width="114px"
                color="white"
                letterSpacing={"-0.011em"}
                fontSize="14px"
                fontWeight={"400"}
                justifyContent="center"
                alignItems={"center"}
              >
                + Liquidity
              </Box>
            </Td>
          </Tr>
          <Tr
            paddingBottom={"24px"}
            borderBottom="16px solid #161A2D"
            borderRadius={"2px"}
          >
            <Td p="22px">
              <Box display={"flex"}>
                <Img src="/groupcoins.svg" opacity={"7"} />
              </Box>
            </Td>
            <Td color={"white"} p="22px">
              $ 2,000,456
            </Td>
            <Td color={"white"} p="22px">
              $ 21,456
            </Td>
            <Td color={"white"} p="22px">
              12.3%
            </Td>
            <Td color={"white"} p="22px"></Td>
            <Td p="22px">
              <Box
                display="flex"
                border={"1px solid white"}
                borderRadius="50px"
                h={"30px"}
                width="114px"
                color="white"
                letterSpacing={"-0.011em"}
                fontSize="14px"
                fontWeight={"400"}
                justifyContent="center"
                alignItems={"center"}
              >
                + Liquidity
              </Box>
            </Td>
          </Tr>
          <Tr
            paddingBottom={"24px"}
            borderBottom="16px solid #161A2D"
            borderRadius={"2px"}
          >
            <Td p="22px">
              <Box display={"flex"}>
                <Img src="/pinkheart.svg" opacity={"7"} zIndex="9999" />
                <Img src="/yellowlabel.svg" opacity={"7"} ml="-7px" />
              </Box>
            </Td>
            <Td color={"white"} p="22px">
              $ 2,000,456
            </Td>
            <Td color={"white"} p="22px">
              $ 21,456
            </Td>
            <Td color={"white"} p="22px">
              12.3%
            </Td>
            <Td color={"white"} p="22px"></Td>
            <Td p="22px">
              <Box
                display="flex"
                border={"1px solid white"}
                borderRadius="50px"
                h={"30px"}
                width="114px"
                color="white"
                letterSpacing={"-0.011em"}
                fontSize="14px"
                fontWeight={"400"}
                justifyContent="center"
                alignItems={"center"}
              >
                + Liquidity
              </Box>
            </Td>
          </Tr>
          <Tr
            paddingBottom={"24px"}
            borderBottom="16px solid #161A2D"
            borderRadius={"2px"}
          >
            <Td p="22px">
              <Box display={"flex"}>
                <Img src="/groupcoins.svg" opacity={"7"} />
              </Box>
            </Td>
            <Td color={"white"} p="22px">
              $ 2,000,456
            </Td>
            <Td color={"white"} p="22px">
              $ 21,456
            </Td>
            <Td color={"white"} p="22px">
              12.3%
            </Td>
            <Td color={"white"} p="22px"></Td>
            <Td p="22px">
              <Box
                display="flex"
                border={"1px solid white"}
                borderRadius="50px"
                h={"30px"}
                width="114px"
                color="white"
                letterSpacing={"-0.011em"}
                fontSize="14px"
                fontWeight={"400"}
                justifyContent="center"
                alignItems={"center"}
              >
                + Liquidity
              </Box>
            </Td>
          </Tr>
          <Tr
            paddingBottom={"24px"}
            borderBottom="5px solid #161A2D"
            borderRadius={"2px"}
          >
            <Td p="22px">
              <Box display={"flex"}>
                <Img src="/pinkheart.svg" opacity={"7"} zIndex="9999" />
                <Img src="/yellowlabel.svg" opacity={"7"} ml="-7px" />
              </Box>
            </Td>
            <Td color={"white"} p="22px">
              $ 2,000,456
            </Td>
            <Td color={"white"} p="22px">
              $ 21,456
            </Td>
            <Td color={"white"} p="22px">
              12.3%
            </Td>
            <Td color={"white"} p="22px"></Td>
            <Td p="22px">
              <Box
                display="flex"
                border={"1px solid white"}
                borderRadius="50px"
                h={"30px"}
                width="114px"
                color="white"
                letterSpacing={"-0.011em"}
                fontSize="14px"
                fontWeight={"400"}
                justifyContent="center"
                alignItems={"center"}
              >
                + Liquidity
              </Box>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default EnochTable;
