import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";

const LikeHeart = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        p="11px"
        bg={"rgb(4 16 57 / 0.3)"}
        borderRadius="0px 0px 8px 8px"
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          bg="rgba(255, 255, 255, 0.1)"
          py={"10px"}
          px="22px"
          borderRadius={"70px"}
        >
          <Box>
            <Text
              as={"span"}
              color="white"
              display={"flex"}
              gap="5px"
              mr={"10px"}
              fontSize={"14px"}
              fontWeight="600"
              lineHeight={"26px"}
            >
              <Img src="/Like.svg" />
              516k
            </Text>
          </Box>
          <Box borderRight={"1px solid white"} mr={"6px"} position="relative">
            <Text
              as={"span"}
              color="white"
              display={"flex"}
              gap="5px"
              pr="6px"
              fontSize={"14px"}
              fontWeight="600"
              lineHeight={"26px"}
            >
              <Img src="/eyeslike.svg" />
              516k
            </Text>
          </Box>

          <Box as={"span"} color="white">
            <Img src="/cor.svg" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LikeHeart;
