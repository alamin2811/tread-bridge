import { Box, Container, Flex, Img, TabPanel, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";

import "@fontsource/poppins";
import BridgeModalTerms from "../Modals/BridgeModalTerms";
import { TutorialsSec } from "../../core/TutorialsSec/TutorialsSec";
import SwapTab from "../SwapTab/SwapTab";
import Banner from "../../core/Banner/Banner";
import Bridge from "../BridgeTab/Bridge";
import { Liquidity } from "../../app/LiquidityTab/Liquidity";
import Ads from "./../../core/Ads/Ads";
export default function TradeMain() {
  return (
    <>
      <Box
        backgroundImage="url('/trade-bg.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
      >
        <Container maxW={"1360px"} px="20px" py={"34px"}>
          <Banner />
          <Flex
            spacing="24px"
            direction={{ base: "column", md: "column", lg: "row" }}
            mb="40px"
          >
            <Box
              w={{ base: "100%", md: "100%", lg: "59%" }}
              bg="#161A2D"
              borderRadius={"4px"}
              mr="24px"
              height={"100%"}
              dropShadow={"(-4px 8px 24px rgba(44, 63, 88, 0.02))"}
            >
              <Tabs>
                <TabList
                  p="0px"
                  borderBottom={"none"}
                  justifyContent="space-between"
                  bg="#20253E"
                >
                  <Tab
                    mb={"0px"}
                    fontSize={{ base: "12px", md: "20px" }}
                    bg="#20253E"
                    fontFamily={"poppins"}
                    fontWeight="600"
                    p={{
                      base: "17px 15px 15px 15px",
                      md: "17px 20px 15px 20px",
                      lg: "17px 32px 15px 32px",
                    }}
                  >
                    SWAP <Img ml="5px" src="/ice.svg" />
                  </Tab>
                  <Tab
                    mb={"0px"}
                    fontSize={{ base: "12px", md: "20px" }}
                    bg="#20253E"
                    fontFamily={"poppins"}
                    fontWeight="600"
                    p={{
                      base: "17px 15px 15px 15px",
                      md: "17px 20px 15px 20px",
                      lg: "17px 32px 15px 32px",
                    }}
                  >
                    LIQUIDITY <Img ml="5px" src="/ice.svg" />
                  </Tab>
                  <Tab
                    mb={"0px"}
                    fontSize={{ base: "12px", md: "20px" }}
                    bg="#20253E"
                    fontFamily={"poppins"}
                    fontWeight="600"
                    p={{
                      base: "17px 15px 15px 15px",
                      md: "17px 20px 15px 20px",
                      lg: "17px 32px 15px 32px",
                    }}
                  >
                    Bridge <Img ml="5px" src="/ice.svg" />
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel p={"0px"}>
                    <SwapTab />
                  </TabPanel>
                  <TabPanel p={"0px"}>
                    <Liquidity />
                  </TabPanel>
                  <TabPanel p={"0px"}>
                    <Bridge />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Ads />
          </Flex>
          <Box
            bg={"#545979"}
            borderRadius="4px"
            py={"34px"}
            px="24px"
            mt={"55px"}
            mb="40px"
          >
            <Text
              color={"#CDD0E1"}
              fontSize="14px"
              lineHeight={"26px"}
              fontWeight="400"
              fontFamily={"poppins"}
            >
              This Interface is an open source software portal to Wormhole, a
              cross chain messaging protocol. THIS INTERFACE AND THE WORMHOLE
              PROTOCOL ARE PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT
              WARRANTIES OF ANY KIND. By using or accessing this Interface or
              Wormhole, you agree that no developer or entity involved in
              creating, deploying, maintaining, operating this Interface or
              Wormhole, or causing or supporting any of the foregoing, will be
              liable in any manner for any claims or damages whatsoever
              associated with your use, inability to use, or your interaction
              with other users of, this Interface or Wormhole, or this Interface
              or Wormhole themselves, including any direct, indirect,
              incidental, special, exemplary, punitive or consequential damages,
              or loss of profits, cryptocurrencies, tokens, or anything else of
              value. By using or accessing this Interface, you represent that
              you are not subject to sanctions or otherwise designated on any
              list of prohibited or restricted parties or excluded or denied
              persons, including but not limited to the lists maintained by the
              United States' Department of Treasury's Office of Foreign Assets
              Control, the United Nations Security Council, the European Union
              or its Member States, or any other government authority.
            </Text>
          </Box>
          <Accordion allowMultiple mb={"40px"}>
            <AccordionItem bg="#22263C">
              <AccordionButton px="24px" py="28px" bg="#22263C">
                <Box
                  flex="1"
                  textAlign="left"
                  color="white"
                  fontFamily={"poppins"}
                  fontSize="24px"
                  lineHeight={"24px"}
                  fontWeight="600"
                >
                  FAQs for Bridge
                </Box>
                <AccordionIcon color="white" />
              </AccordionButton>
              <AccordionPanel pb={4} color="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <TutorialsSec />
          <Box mt={"40px"}>
            <BridgeModalTerms />
          </Box>
        </Container>
      </Box>
    </>
  );
}
