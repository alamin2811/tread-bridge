import { Box, HStack, Img, Tooltip, Text, Flex } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { TabPanel } from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins";
import LikeHeart from "../../core/Like-views/LikeHeart";
import MinMaxValue from "../../core/MinMaxValue/MinMaxValue";
import BridgeButtons from "../../core/Buttons/BridgeButtons";
import RangeSliderComponent from "./RangeSlider";
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
                    95
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
              color="#FFFFFF"
              fontSize={{md: "24px", sm: "20px", base: "16px"}}
              lineHeight="24px"
              letterSpacing={"-0.011em"}
              fontWeight="500"
              mb="8px"
            >
              Current Price: 1637.42 USDT per ETH
            </Text>
          </Box>

          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            maxW="582px"
            mx="auto"
            mb="8px"
          >
            <Box
              h="24px"
              w="65px"
              bg="#343646"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="700"
              fontSize="16px"
              lineHeight="24px"
              letterSpacing="-0.011em"
              color="#FFFFFF"
              borderRadius="2px"
            >
              <Text>0%</Text>
            </Box>
            <Box
              h="24px"
              w="65px"
              bg="#343646"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="700"
              fontSize="16px"
              lineHeight="24px"
              letterSpacing="-0.011em"
              color="#FFFFFF"
              borderRadius="2px"
            >
              <Text>100%</Text>
            </Box>
          </Flex>
          <Box maxW="600px" px="15px" w="100%" mx="auto">
            <RangeSliderComponent w="100%" />
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignContent={"center"}
            color="white"
            maxW="612px"
            w="100%"
            px="15px"
            margin="auto"
            fontSize={{md: "21px", sm: "18px", base: "16px"}}
            lineHeight="24px"
            fontWeight="700"
            letterSpacing={"-0.011em"}
            pt="12px"
          >
            <Text>0</Text>
            <Text>1000</Text>
            <Text>2000</Text>
            <Text>3000</Text>
            <Text>4000</Text>
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
