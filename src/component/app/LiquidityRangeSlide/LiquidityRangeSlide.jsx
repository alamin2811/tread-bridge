import { Box, Container, Flex, Img, TabPanel } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";

import "@fontsource/poppins";
import { TutorialsSec } from "../../core/TutorialsSec/TutorialsSec";
import Banner from "../../core/Banner/Banner";
import Ads from "../../core/Ads/Ads";
import { LiquidityRange } from "../../app/LiquidityRangeSlide/LiquidityRange";
export default function Home() {
  return (
    <>
      <Box>
        <Container maxW={"1320px"} px="20px" py={"34px"}>
          <Banner />
          <Flex
            spacing="24px"
            direction={{ base: "column", md: "column", lg: "row" }}
            mb="40px"
          >
            <Box
              w={{ base: "100%", md: "100%", lg: "67%" }}
              bg="#161A2D"
              borderRadius={"4px"}
              mr="24px"
              height={"100%"}
              dropShadow={"(-4px 8px 24px rgba(44, 63, 88, 0.02))"}
            >
              <Tabs defaultIndex={1}>
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
                  <TabPanel p={"0px"}></TabPanel>
                  <TabPanel p={"0px"}>
                    <LiquidityRange />
                  </TabPanel>
                  <TabPanel p={"0px"}></TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Ads />
          </Flex>
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
        </Container>
      </Box>
    </>
  );
}
