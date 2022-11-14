import {
  Box,
  HStack,
  Img,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Tooltip,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { TabPanel } from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins";
import EnochTable from "../../app/LiquidityTab/EnochTable";
import LikeHeart from "../../core/Like-views/LikeHeart";
export const Liquidity = () => {
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
          <Box>
            <Tabs>
              <TabList borderBottom="none">
                <Tab
                  _selected={{ color: "#258CEC" }}
                  color="white"
                  fontFamily="Poppins"
                  fontSize="16px"
                  fontWeight={600}
                  paddingBottom="4px"
                >
                  TOP PAIRS{" "}
                </Tab>
                <Tab
                  _selected={{ color: "#258CEC" }}
                  color="white"
                  fontFamily="Poppins"
                  fontSize="16px"
                  fontWeight={600}
                  paddingBottom="4px"
                >
                  Your Positions
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel gap={6} py="16px" px={"0px"}>
                  <EnochTable />
                </TabPanel>

                <TabPanel>555</TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </TabPanel>
      </Box>
      <LikeHeart />
    </Box>
  );
};

export default Liquidity;
