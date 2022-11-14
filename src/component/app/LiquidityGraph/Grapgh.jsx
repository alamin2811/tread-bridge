import { Box, Img, Text, Link } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins";
export const Grapgh = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        px={{ base: "15px", md: "24px", lg: "40px" }}
        py={{ base: "20px", md: "20px", lg: "38px" }}
      >
        <Box
          bg={"#20253E"}
          borderRadius="8px"
          pt={"10px"}
          px={{ base: "10px", md: "24px", lg: "32px" }}
          pb={"32px"}
        >
          <Box>
            <Link
              color={"#1386F0"}
              fontSize="18px"
              fontWeight={"600"}
              fontFamily="poppins"
              lineHeight={"28px"}
              textDecoration="underline"
              cursor={"pointer"}
            >
              Back
            </Link>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            pt="15px"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"flex-start"}
              gap="11px"
              mb={{ base: "15px", md: "0px" }}
            >
              <Box display={"flex"}>
                <Img src="/pinkheart.svg" opacity={"7"} zIndex="9999" />
                <Img src="/bluecoins.svg" opacity={"7"} ml="-7px" />
              </Box>
              <Text
                as={"span"}
                color="white"
                fontSize={"20px"}
                lineHeight="30px"
                fontWeight={"600"}
              >
                LOVE/USDT
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
              gap="11px"
            >
              <Box bg={"#36407D"} borderRadius="40px">
                <Text
                  as={"span"}
                  display="flex"
                  justifyContent={"center"}
                  align="center"
                  fontFamily={"poppins"}
                  fontWeight="600"
                  fontSize={"16px"}
                  lineHeight="170.23%"
                  color={"white"}
                  px="20px"
                >
                  0.03%
                </Text>
              </Box>
              <Box
                bg={"#36407D"}
                borderRadius="40px"
                px="20px"
                py="4px"
                display="flex"
                justifyContent={"center"}
                align="center"
                gap={"16px"}
              >
                <Img src="/greencircle.svg" />
                <Text
                  as="span"
                  color="white"
                  fontSize={"15px"}
                  lineHeight="22x"
                  fontWeight={"600"}
                >
                  In range
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            p={"28px"}
            borderRadius="8px"
            mt={"13px"}
            display="flex"
            gap={{ base: "20px", md: "85px", lg: "85px" }}
            bgGradient={
              "linear-gradient(259.46deg, #D87E15 -19.86%, #C4465C 95.75%)"
            }
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box>
              <Text
                as={"h1"}
                fontFamily="poppins"
                fontSize={{ base: "24px", md: "40px", lg: "40px" }}
                fontWeight="700"
                lineHeight={"140.23%"}
                color="white"
              >
                LOVE/USDT
              </Text>
              <Text
                as={"h2"}
                fontFamily="poppins"
                fontSize={{ base: "24px", md: "40px", lg: "40px" }}
                fontWeight="700"
                lineHeight={"170.23%"}
                color="white"
              >
                0.3%
              </Text>

              <Text
                as={"p"}
                fontFamily="poppins"
                fontSize={"18px"}
                fontWeight="500"
                lineHeight={"180.23%"}
                color="white"
              >
                ID : 298922
              </Text>
              <Text
                as={"p"}
                fontFamily="poppins"
                fontSize={"18px"}
                fontWeight="500"
                lineHeight={"180.23%"}
                color="white"
              >
                MIN tick : -208560
              </Text>
              <Text
                as={"p"}
                fontFamily="poppins"
                fontSize={"18px"}
                fontWeight="500"
                lineHeight={"180.23%"}
                color="white"
              >
                Max Tick: -197520
              </Text>
            </Box>
            <Box>
              <Img src="/vaves.svg" />
            </Box>
          </Box>
        </Box>
        <Box
          my={"24px"}
          bg="#22263C"
          backdropBlur={"21px"}
          borderRadius="8px"
          pt={"21px"}
          px={{ base: "10px", md: "32px", lg: "32px" }}
          pb={"29px"}
        >
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Box>
              <Text
                fontFamily={"poppins"}
                fontSize={{ base: "14px", md: "20px", lg: "20px" }}
                lineHeight={"170%"}
                fontWeight="600"
                color={"white"}
              >
                Liquidity
              </Text>
            </Box>
            <Box>
              <Text
                fontFamily={"poppins"}
                fontSize="32px"
                lineHeight={"170%"}
                fontWeight="400"
                color={"white"}
              >
                $89.66
              </Text>
            </Box>
          </Box>
          <Box bg={"#424970"} mt="26px" p="18px" borderRadius={"8px"}>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                justifyContent="flex-start"
                alignItems={"flex-start"}
                gap="11px"
              >
                <Box display={"flex"}>
                  <Img src="/pinkheart.svg" opacity={"7"} zIndex="9999" />
                </Box>
                <Text
                  as={"span"}
                  color="white"
                  fontSize={{ base: "14px", md: "20px", lg: "20px" }}
                  lineHeight="30px"
                  fontWeight={"600"}
                >
                  LOVE
                </Text>
              </Box>
              <Box
                display={"flex"}
                justifyContent="flex-start"
                alignItems={"center"}
                gap="11px"
              >
                <Box
                  display="flex"
                  justifyContent={"center"}
                  align="center"
                  gap={"16px"}
                >
                  <Text
                    as="span"
                    color="white"
                    fontSize={{ base: "16px", md: "24px", lg: "24px" }}
                    lineHeight="170%"
                    fontWeight={"400"}
                    fontFamily={"poppins"}
                  >
                    0.02424
                  </Text>
                </Box>
                <Box bg={"#1F2028"} borderRadius="40px">
                  <Text
                    as={"span"}
                    display="flex"
                    justifyContent={"center"}
                    align="center"
                    fontFamily={"poppins"}
                    fontWeight="600"
                    fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                    lineHeight="170.23%"
                    color={"white"}
                    px="20px"
                  >
                    44%
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              pt="20px"
            >
              <Box
                display={"flex"}
                justifyContent="flex-start"
                alignItems={"flex-start"}
                gap="11px"
              >
                <Box display={"flex"}>
                  <Img src="/greentee.svg" opacity={"7"} zIndex="9999" />
                </Box>
                <Text
                  as={"span"}
                  color="white"
                  fontSize={{ base: "14px", md: "20px", lg: "20px" }}
                  lineHeight="30px"
                  fontWeight={"600"}
                >
                  USDT
                </Text>
              </Box>
              <Box
                display={"flex"}
                justifyContent="flex-start"
                alignItems={"center"}
                gap="11px"
              >
                <Box
                  display="flex"
                  justifyContent={"center"}
                  align="center"
                  gap={"16px"}
                >
                  <Text
                    as="span"
                    color="white"
                    fontSize={{ base: "16px", md: "24px", lg: "24px" }}
                    lineHeight="170%"
                    fontWeight={"400"}
                    fontFamily={"poppins"}
                  >
                    49.99
                  </Text>
                </Box>
                <Box bg={"#1F2028"} borderRadius="40px">
                  <Text
                    as={"span"}
                    display="flex"
                    justifyContent={"center"}
                    align="center"
                    fontFamily={"poppins"}
                    fontWeight="600"
                    fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                    lineHeight="170.23%"
                    color={"white"}
                    px="20px"
                  >
                    56%
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          my={{ base: "6px", md: "26px", lg: "26px" }}
          bg="#22263C"
          backdropBlur={"21px"}
          borderRadius="8px"
          pt={"21px"}
          px={{ base: "10px", md: "32px", lg: "32px" }}
          pb={{ base: "16px", md: "29px", lg: "29px" }}
        >
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Box>
              <Text
                fontFamily={"poppins"}
                fontSize={{ base: "14px", md: "20px", lg: "20px" }}
                lineHeight={"170%"}
                fontWeight="600"
                color={"white"}
              >
                Unclaimed fees
              </Text>
            </Box>
            <Box>
              <Text
                fontFamily={"poppins"}
                fontSize={{ base: "20px", md: "32px", lg: "32px" }}
                lineHeight={"170%"}
                fontWeight="400"
                color={"white"}
              >
                $-
              </Text>
            </Box>
          </Box>
          <Box bg={"#424970"} mt="26px" p="18px" borderRadius={"8px"}>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                justifyContent="flex-start"
                alignItems={"flex-start"}
                gap="11px"
              >
                <Box display={"flex"}>
                  <Img src="/pinkheart.svg" opacity={"7"} zIndex="9999" />
                </Box>
                <Text
                  as={"span"}
                  color="white"
                  fontSize={{ base: "14px", md: "20px", lg: "20px" }}
                  lineHeight="30px"
                  fontWeight={"600"}
                >
                  LOVE
                </Text>
              </Box>
              <Box
                display={"flex"}
                justifyContent="flex-start"
                alignItems={"center"}
                gap="11px"
              >
                <Box
                  display="flex"
                  justifyContent={"center"}
                  align="center"
                  gap={"16px"}
                >
                  <Text
                    as="span"
                    color="white"
                    fontSize={"24px"}
                    lineHeight="170%"
                    fontWeight={"400"}
                  >
                    0
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              pt="20px"
            >
              <Box
                display={"flex"}
                justifyContent="flex-start"
                alignItems={"flex-start"}
                gap="11px"
              >
                <Box display={"flex"}>
                  <Img src="/greentee.svg" opacity={"7"} zIndex="9999" />
                </Box>
                <Text
                  as={"span"}
                  color="white"
                  fontSize={{ base: "14px", md: "20px", lg: "20px" }}
                  lineHeight="30px"
                  fontWeight={"600"}
                >
                  USDT
                </Text>
              </Box>
              <Box
                display={"flex"}
                justifyContent="flex-start"
                alignItems={"center"}
                gap="11px"
              >
                <Box
                  display="flex"
                  justifyContent={"center"}
                  align="center"
                  gap={"16px"}
                >
                  <Text
                    as="span"
                    color="white"
                    fontSize={"24px"}
                    lineHeight="170%"
                    fontWeight={"400"}
                  >
                    0
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Grapgh;
