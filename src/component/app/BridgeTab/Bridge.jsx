import {
  Flex,
  HStack,
  Img,
  Text,
  Tooltip,
  Box,
  Input,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import BridgeButtons from "../../core/Buttons/BridgeButtons";
import DropDownenoch from "../../core/Dropdown-enoch/DropDownenoch";
import LikeHeart from "../../core/Like-views/LikeHeart";
export const Bridge = () => {
  return (
    <>
      <Box>
        <Box>
          <TabPanel
            spacing="0px"
            // py={"0px"}
            pt="0px"
            px={{ base: "20px", md: "40px", lg: "40px" }}
            py={{ base: "20px", md: "20px", lg: "38px" }}
          >
            <Flex
              pb="0px"
              justifyContent={{ base: "center", md: "space-between" }}
              alignItems={{ base: "center", md: "center", lg: "center" }}
              flexDirection={{ base: "column", md: "row" }}
              gap={{ base: "15px", md: "0px", lg: "0px" }}
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
                  placement="top"
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
            <Box position={"relative"}>
              <Box mb="24px">
                <Text
                  as="h5"
                  color="white"
                  fontFamily={"Poppins"}
                  fontWeight="600"
                  fontSize={"16px"}
                  mb="10px"
                >
                  Assets
                </Text>
                <Flex
                  gap={{ base: "20px", md: "49px", lg: "49px" }}
                  direction={{ base: "column", md: "row" }}
                  alignItems={{
                    base: "flex-start",
                    md: "flex-start",
                    lg: "center",
                  }}
                  justifyContent={"flex-start"}
                >
                  <DropDownenoch Name="Select Assests" />
                </Flex>
              </Box>

              <Box
                mb={"24px"}
                display="flex"
                gap={"8px"}
                position="relative"
                flexDirection={{ base: "column", md: "column", lg: "row" }}
              >
                <Box
                  color="#22263C"
                  bg={"#22263C"}
                  borderRadius={"2px"}
                  py="16px"
                  px={"24px"}
                  w={{ base: "100%", md: "100%", lg: "50%" }}
                >
                  <Text
                    fontFamily={"poppins"}
                    fontSize="16px"
                    lineHeight={"24px"}
                    fontWeight="600"
                    letterSpacing={"-0.011em"}
                    color="white"
                  >
                    From
                  </Text>
                  <Box>
                    <Box py={"27px"}>
                      <Box
                        w={"90px"}
                        height="90px"
                        borderRadius={"50%"}
                        bg="#3A4063"
                      ></Box>
                    </Box>
                    <DropDownenoch Name="Select Token" />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    bg={"#363B52"}
                    borderRadius="50%"
                    height={"50px"}
                    w="50px"
                  >
                    <Img src="/arrowdots.svg" />
                  </Box>
                </Box>

                <Box
                  color="#22263C"
                  bg={"#22263C"}
                  borderRadius={"2px"}
                  py="16px"
                  px={"24px"}
                  w={{ base: "100%", md: "100%", lg: "50%" }}
                >
                  <Text
                    fontFamily={"poppins"}
                    fontSize="16px"
                    lineHeight={"24px"}
                    fontWeight="600"
                    letterSpacing={"-0.011em"}
                    color="white"
                  >
                    To
                  </Text>
                  <Box>
                    <Box py={"27px"}>
                      <Box
                        w={"90px"}
                        height="90px"
                        borderRadius={"50%"}
                        bg="#3A4063"
                      ></Box>
                    </Box>
                    <DropDownenoch Name="Select Token" />
                  </Box>
                </Box>
              </Box>
              <Box bg={"#22263C"} borderRadius="4px" p="24px" mb={"40px"}>
                <Box>
                  <Text
                    color={"white"}
                    mb="12px"
                    fontFamily={"poppins"}
                    fontSize="16px"
                    lineHeight={"24px"}
                    fontWeight="600"
                  >
                    Amount
                  </Text>
                  <Box
                    bg={"#424970"}
                    borderRadius="8px"
                    py={{ base: "16px", md: "24px", lg: "24px" }}
                    px={{ base: "24px", md: "32px", lg: "32px" }}
                  >
                    <Box
                      display={"flex"}
                      justifyContent="space-between"
                      alignItems={"center"}
                    >
                      <Input
                        placeholder="0.00"
                        border={"none"}
                        outline="none"
                        _focusVisible={"hidden"}
                        fontFamily="poopins"
                        fontWeight={"600"}
                        fontSize={{ base: "30px", md: "48px", lg: "48px" }}
                        color={"white"}
                      />
                      <Box bg={"#F03B31"} opacity="0.1" py={"1px"} px="10px">
                        <Text
                          fontSize={"16px"}
                          lineHeight="26px"
                          fontWeight={"600"}
                          color="white"
                        >
                          MAX
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Text
                    color={"white"}
                    mb="16px"
                    mt="24px"
                    fontFamily={"poppins"}
                    fontSize="16px"
                    lineHeight={"24px"}
                    fontWeight="600"
                  >
                    Amount
                  </Text>
                  <Box bg={"#424970"} borderRadius="8px" py={"12px"} px="24px">
                    <Input
                      placeholder="Destination"
                      border={"none"}
                      outline="none"
                      _focusVisible={"hidden"}
                      fontWeight={"500"}
                      lineHeight="30px"
                      fontSize="16px"
                    />
                  </Box>
                  <Box>
                    <Text
                      fontWeight={"500"}
                      lineHeight="21px"
                      fontSize="14px"
                      color={"#7D8194"}
                      letterSpacing="-0.022em"
                      mt="9px"
                      mb={"16px"}
                    >
                      This is the destination address of the To network
                    </Text>
                  </Box>
                </Box>
              </Box>
              <BridgeButtons ButtonText="CONNECT WALLET" />
            </Box>
          </TabPanel>
        </Box>

        <LikeHeart />
      </Box>
    </>
  );
};

export default Bridge;
