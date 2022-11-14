import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { TabPanel } from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins";
import DropDownTax from "./Dropdown-tax/DropDownTax";
import LikeHeart from "../../core/Like-views/LikeHeart";
export const SwapTab = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <TabPanel
        spacing="0px"
        px={{ base: "20px", md: "40px", lg: "40px" }}
        py="38px"
      >
        <Flex
          pb="30px"
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
        <Box px="21px" py="23px" bg="#31385F" borderRadius="2px" mb="23px">
          <Text
            as="p"
            color="white"
            fontSize={"15px"}
            fontWeight={"400"}
            lineHeight="26px"
          >
            <Text
              as={"span"}
              color="#FFEF9B"
              fontWeight={"700"}
              fontSize="15px"
            >
              Tip:
            </Text>{" "}
            When you swap one token with another, you make the trade in a
            decentralised manner. The Enoch platform has no control over your
            assets and the trade is carried out by preprogramed pieces of code.
          </Text>
        </Box>
        <Box>
          <Box
            bg=" #22263C"
            mb={"-20px"}
            p={{
              base: "10px 15px 40px",
              md: "16px 30px 30px 30px",
              lg: "16px 30px 30px 30px",
            }}
          >
            <Text
              as="h5"
              color="white"
              fontFamily={"Poppins"}
              fontWeight="600"
              fontSize={"16px"}
              mb={{ base: "18px", md: "10px", lg: "10px" }}
            >
              From
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
              <DropDownTax />

              <Box w={{ base: "100%", md: "57.3%" }}>
                <Box
                  borderBottom="1px solid #FFFFFF"
                  color="white"
                  textAlign="right"
                  fontFamily={"Poppins"}
                  fontWeight="700"
                  fontSize={{ base: "20px", md: "24px", lg: "24px" }}
                >
                  00.00
                </Box>
                <Flex
                  gap={{ base: "0px", md: "12px", lg: "12px" }}
                  pt="12px"
                  justifyContent={{
                    base: "space-between",
                    md: "flex-end",
                    lg: "flex-end",
                  }}
                >
                  <Text
                    as="span"
                    color="white"
                    fontFamily={"Poppins"}
                    fontWeight="600"
                    fontSize={{ base: "12px", md: "18px", lg: "18px" }}
                    display={"flex"}
                    justifyContent="flex-start"
                    alignItems={"center"}
                  >
                    Balance: 1.2 ETH
                  </Text>
                  <Box
                    as="span"
                    color="white"
                    bg="#6943FF"
                    borderRadius="20px"
                    p="2px 20px 4px 20px"
                    fontFamily={"Poppins"}
                    fontWeight="600"
                    fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                    w="76px"
                    h="30px"
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    max
                  </Box>
                  <Text
                    as="span"
                    color="white"
                    fontFamily={"Poppins"}
                    fontWeight="500"
                    fontSize={{ base: "20px", md: "24px", lg: "24px" }}
                  >
                    ~ $ 0.00
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            w="100%"
            mb={"-45px"}
            zIndex="999"
            position={"relative"}
          >
            <Box
              bg="#363B52"
              w={{ base: "100px", md: "120px" }}
              h={{ base: "100px", md: "120px" }}
              borderRadius={"150px"}
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            >
              <Img src="/Frame.svg"></Img>
            </Box>
          </Box>

          <Box
            p={{
              base: "10px 15px 40px",
              md: "16px 30px 30px 30px",
              lg: "16px 30px 30px 30px",
            }}
            bg=" #22263C"
            mb="26px"
          >
            <Text
              as="h5"
              color="white"
              fontFamily={"Poppins"}
              fontWeight="600"
              fontSize={"16px"}
              mb={{ base: "18px", md: "10px", lg: "10px" }}
            >
              To
            </Text>
            <Flex
              gap={{ base: "20px", md: "49px", lg: "49px" }}
              direction={{ base: "column", md: "row" }}
            >
              <DropDownTax />
              <Box w={{ base: "100%", md: "67%" }}>
                <Box
                  borderBottom="1px solid #FFFFFF"
                  color="white"
                  textAlign="right"
                  fontFamily={"Poppins"}
                  fontWeight="700"
                  fontSize={"24px"}
                >
                  00.00
                </Box>
                <Flex justifyContent="flex-end" gap="12px" pt="12px">
                  <Text
                    as="span"
                    color="white"
                    fontFamily={"Poppins"}
                    fontWeight="500"
                    fontSize={"16px"}
                  >
                    ~ $ 0.00
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box
          borderBottom="1px solid #FFFFFF"
          pb="18px"
          display="flex"
          gap="27px"
        >
          <Text
            as="span"
            color="white"
            fontFamily={"Poppins"}
            fontWeight="500"
            fontSize={"16px"}
          >
            Enoch (ENOCH): $ 1.66
          </Text>
          <Img src="/red.svg"></Img>
        </Box>
        <Box
          borderBottom="1px solid #FFFFFF"
          pb="18px"
          display="flex"
          gap="27px"
          pt="18px"
          mb="57px"
        >
          <Text
            as="span"
            color="white"
            fontFamily={"Poppins"}
            fontWeight="500"
            fontSize={"16px"}
          >
            Enoch (ENOCH): $ 1.66
          </Text>
          <Img src="/green.svg"></Img>
        </Box>
        <Button
          w="100%"
          py="24px"
          colorScheme="#363B52"
          bg="#363B52"
          width="100%"
          color="#4E5370"
          fontSize="18px"
          height="70px"
          size="lg"
          mr="2"
          onClick={onOpen}
        >
          SWAP
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent bg="#161A2D" borderRadius="8px" p="24px" m="40px 20px">
            <ModalHeader
              p="0px"
              color="white"
              fontSize={{ base: "16px", md: "24px", lg: "24px" }}
              mb="19px"
              fontFamily="Poppins"
              fontWeight={"600"}
            >
              Confirm Swap
            </ModalHeader>
            <ModalCloseButton
              color="#7B7B7B"
              p="2px"
              border="2px solid #7B7B7B"
              borderRadius="50%"
              top="16px"
              right="26px"
            />
            <ModalBody p="0px">
              <Flex
                flexDirection={"column"}
                gap="16px"
                position={"relative"}
                mb="16px"
              >
                <Box
                  p="16px 44px 16px 28px"
                  bg="#323756"
                  borderRadius={"4px"}
                  w="100%"
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Text
                    as="h1"
                    color="white"
                    fontWeight={"600"}
                    fontSize={{ base: "16px", md: "24px", lg: "24px" }}
                  >
                    740.73
                  </Text>
                  <Box display={"flex"} alignItems="center">
                    <Img mr="7px" src="/Enoche.svg"></Img>
                    <Text
                      as="h1"
                      fontSize={{ base: "16px", md: "24px", lg: "24px" }}
                      color="white"
                      fontWeight={"600"}
                    >
                      ENOCH
                    </Text>
                  </Box>
                </Box>
                <Box
                  p="16px 44px 16px 28px"
                  bg="#323756"
                  borderRadius={"4px"}
                  w="100%"
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Text
                    as="h1"
                    color="white"
                    fontWeight={"600"}
                    fontSize={{ base: "16px", md: "24px", lg: "24px" }}
                  >
                    0.5
                  </Text>
                  <Box display={"flex"} alignItems="center">
                    <Img mr="7px" src="/arrrow.svg"></Img>
                    <Text
                      as="h1"
                      fontSize={{ base: "16px", md: "24px", lg: "24px" }}
                      color="white"
                      fontWeight={"600"}
                    >
                      ETH
                    </Text>
                  </Box>
                </Box>
                <Box
                  w="42px"
                  h="42px"
                  position={"absolute"}
                  top="54px"
                  right="50%"
                  bg=" #1D1D23"
                  borderRadius={"8px"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <Img src="/topdown.svg"></Img>
                </Box>
              </Flex>
              <Text as="p" color="white" fontSize={"16px"} fontWeight="600">
                1 ETH = 1481.46 ENOCH
              </Text>
              <Box bg="#323756" borderRadius={"#323756"} mt="16px" mb="17px">
                <Box
                  p="24px 24px 13px 24px"
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Text color="white" fontSize={"16px"} fontWeight="500">
                    Expected Output
                  </Text>
                  <Text color="white" fontSize={"16px"} fontWeight="700">
                    0.49 ETH
                  </Text>
                </Box>
                <Box
                  p="0px 24px 18px 24px"
                  borderBottom={"1px solid #55575C"}
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Text color="white" fontSize={"16px"} fontWeight="500">
                    Price Impact
                  </Text>
                  <Text color="white" fontSize={"16px"} fontWeight="700">
                    0.3%
                  </Text>
                </Box>
                <Box
                  p="15px 24px 10px 24px"
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box>
                    <Text
                      color="#B5B6C4"
                      fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                      fontWeight="500"
                    >
                      Minimum received after slippage
                    </Text>
                    <Text
                      color="#B5B6C4"
                      fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                      fontWeight="500"
                    >
                      (0.30%)
                    </Text>
                  </Box>

                  <Text
                    color="#B5B6C4"
                    fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                    fontWeight="700"
                  >
                    0.49 ETH
                  </Text>
                </Box>
                <Box
                  p="0px 24px 9px 24px"
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Text
                    color="#B5B6C4"
                    fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                    fontWeight="500"
                  >
                    Estimated gas cost
                  </Text>
                  <Text
                    color="#B5B6C4"
                    fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                    fontWeight="700"
                  >
                    00.00
                  </Text>
                </Box>
              </Box>
              <Text as="p" color="#9B9EC7" fontSize={"14px"} fontWeight="400">
                Output is estimated. You will receive at least 0.49 ETH or the
                transaction will revert.
              </Text>
              <Button
                colorScheme={"#3B41D8"}
                bg="#3B41D8"
                mt="21px"
                color="white"
                p="24px"
                w="100%"
              >
                CONFIRM SWAP
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </TabPanel>
      <LikeHeart />
    </Box>
  );
};

export default SwapTab;
