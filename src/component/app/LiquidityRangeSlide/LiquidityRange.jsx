import { Box, HStack, Img, Tooltip, Text, Flex } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { TabPanel } from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins";
import LikeHeart from "../../core/Like-views/LikeHeart";
import MinMaxValue from "../../core/MinMaxValue/MinMaxValue";
import BridgeButtons from "../../core/Buttons/BridgeButtons";
export const LiquidityRange = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        px={{ base: "15px", md: "24px", lg: "40px" }}
        py={{ base: "20px", md: "20px", lg: "38px" }}
      >
        <TabPanel p={"0px"}>
          <Flex
            pb="30px"
            justifyContent={{ base: "center", md: "space-between" }}
            alignItems={{ base: "center", md: "center", lg: "center" }}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "15px", md: "0px", lg: "0px" }}
            borderBottom="1px solid #FFFFFF"
          >
            <HStack>
              <Img src="/rino.png"></Img>
              <Text as="span" color={"white"}>
                {" "}
                POWERED BY <strong>UNISWAP</strong>{" "}
              </Text>
            </HStack>
            <HStack>
              <Tooltip
                label="Todays gas price"
                hasArrow
                arrowSize={15}
                placement="top-start"
                color="#3F434A"
                bg="white"
                borderRadius={"120px"}
                p="15px"
                fontFamily={"Poppins"}
                fontWeight="600"
                fontSize={"18px"}
              >
                <Box
                  px="17px"
                  py="8px"
                  border="1px solid #6874AF"
                  borderRadius="80px"
                  display="flex"
                  mr="8px"
                  cursor={"pointer"}
                >
                  <Img src="/pump.svg" mr="9px"></Img>
                  <Text as="span" color={"white"}>
                    {" "}
                    95{" "}
                  </Text>
                </Box>
              </Tooltip>
              <Box>
                <Img src="/pink.svg"></Img>
              </Box>
            </HStack>
          </Flex>
          <Box
            display={"flex"}
            justifyContent="space-between"
            pt={"16px"}
            pb="48px"
          >
            <Box
              display={"flex"}
              gap="12px"
              justifyContent={"center"}
              alignItems="center"
            >
              <Img src="/arrow-left-circle-line.svg" alt="" />
              <Text
                as={"span"}
                color="white"
                fontSize={"20px"}
                lineHeight="24px"
                fontWeight={"600"}
              >
                Set Price Range
              </Text>
            </Box>
            <Box
              display={"flex"}
              gap="12px"
              justifyContent={"center"}
              alignItems="center"
            >
              <Img src="/minimize.svg" cursor={"pointer"} />
              <Img src="zoom-in-fill.svg" cursor={"pointer"} />
            </Box>
          </Box>
          <Box>
            <Text
              display={"flex"}
              justifyContent="center"
              align={"center"}
              color="white"
              fontSize={"24px"}
              lineHeight="24px"
              letterSpacing={"-0.011em"}
              fontWeight="500"
            >
              Current Price: 1637.42 USDT per ETH
            </Text>
          </Box>
          <Box display={"flex"} justifyContent="center" pt={"40px"}>
            <Box position="relative">
              <Img src="/slide.svg" />
              <Box
                position={"absolute"}
                left="161px"
                top={"0"}
                w={"0"}
                height="100%"
                border="3px solid white"
                _before={{
                  content: '""',
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignContent={"center"}
            color="white"
            w={"76%"}
            margin="auto"
            fontSize={"21px"}
            lineHeight="24px"
            fontWeight="700"
            letterSpacing={"-0.011em"}
            pt="12px"
          >
            <Box>0</Box>
            <Box>1000</Box>
            <Box>2000</Box>
            <Box>3000</Box>
            <Box>4000</Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            width={"100%"}
            py="32px"
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "20px", md: "0px" }}
            alignItems={{ base: "center" }}
          >
            <Box
              border={"1px solid #C6C6C6"}
              borderRadius="10px"
              py={"15px"}
              px="24px"
              maxWidth={"326px"}
              w="100%"
            >
              <Text
                color={"#969696"}
                textAlign="center"
                fontWeight={"700"}
                fontSize="21px"
                lineHeight={"24px"}
              >
                Min Price
              </Text>
              <MinMaxValue />
              <Text
                color={"#969696"}
                textAlign="center"
                fontWeight={"700"}
                fontSize="21px"
                lineHeight={"24px"}
              >
                USDT per ETH
              </Text>
            </Box>
            <Box
              border={"1px solid #C6C6C6"}
              borderRadius="10px"
              py={"15px"}
              px="24px"
              maxWidth={"326px"}
              w="100%"
            >
              <Text
                color={"#969696"}
                textAlign="center"
                fontWeight={"700"}
                fontSize="21px"
                lineHeight={"24px"}
              >
                Min Price
              </Text>
              <MinMaxValue />
              <Text
                color={"#969696"}
                textAlign="center"
                fontWeight={"700"}
                fontSize="21px"
                lineHeight={"24px"}
              >
                USDT per ETH
              </Text>
            </Box>
          </Box>
          <Box>
            <BridgeButtons ButtonText="Full Range" />
          </Box>
        </TabPanel>
      </Box>
      <LikeHeart />
    </Box>
  );
};

export default LiquidityRange;
