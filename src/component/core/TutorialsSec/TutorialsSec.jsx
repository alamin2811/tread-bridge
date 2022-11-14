import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import TutorialsCards from "../../core/TutorialsSec/TutorialsCards";
export const TutorialsSec = () => {
  return (
    <Box bg="#161A2D" p="24px" borderRadius={"4px"}>
      <Text
        as="h3"
        fontSize={"24px"}
        color="white"
        fontFamily={"poppins"}
        fontWeight="600"
        lineHeight={"24px"}
        mb={"32px"}
      >
        Tutorials
      </Text>
      <Flex flexDirection={{ base: "column", md: "row" }} gap="24px">
        <TutorialsCards
          CardsHeading="What is Paradigm swap and how it works"
          ImageCard="/bigwish.png"
          Paragraph="A swap allows you to trade your one crypto with another. To complete the trade, certain percentage (~ 3 USD) of your asset will be ..."
        />
        <Box
          p="24px"
          bg="#323756"
          w={{ base: "100%", md: "33%" }}
          display="flex"
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Box
            bg="#454B6F"
            display="flex"
            justifyContent={"center"}
            textAlign={"center"}
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent={"center"}
              flexDirection="column"
              textAlign={"center"}
              alignItems="center"
              p="46px"
            >
              <Img mb="9px" src="/video.svg"></Img>
              <Text
                as="p"
                color="white"
                fontSize={"15px"}
                mb="14px"
                textAlign={"center"}
              >
                A swap allows you to trade your one crypto with another. To
                complete the trade, certain percentage (~ 3 USD) of your asset
                will be ...
              </Text>
            </Box>
          </Box>
        </Box>
        <TutorialsCards
          CardsHeading="Swap Crypto Like a Pro"
          ImageCard="/cdfropy.png"
          Paragraph="You are in complete control of your own assets. The gas fees is the price you pay to stay in full control."
        />
      </Flex>
    </Box>
  );
};
