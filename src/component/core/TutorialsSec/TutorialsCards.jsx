import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const TutorialsCards = ({ CardsHeading, Paragraph, ImageCard }) => {
  return (
    <>
      <Box p="24px" bg="#323756" w={{ base: "100%", md: "33%" }}>
        <Box mb="24px">
          <Image src={ImageCard}></Image>
        </Box>
        <Text
          as="h4"
          color="white"
          fontSize={"20px"}
          fontWeight="500"
          lineHeight={"30px"}
          mb="8px"
        >
          {CardsHeading}
        </Text>
        <Text
          as="p"
          color="white"
          fontSize={"15px"}
          mb="14px"
          fontWeight={"400"}
          lineHeight="28px"
          letterSpacing={"-0.011em"}
          fontFamily="poppins"
        >
          {Paragraph}
        </Text>
        <Text
          as="span"
          color="white"
          fontSize={"16px"}
          fontWeight="500"
          textDecoration="underline"
          fontFamily={"poppins"}
        >
          Read More
        </Text>
      </Box>
    </>
  );
};

export default TutorialsCards;
