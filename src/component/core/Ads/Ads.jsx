import { Box, Img } from "@chakra-ui/react";
import React from "react";

const Ads = () => {
  return (
    <>
      <Box
        w={{ base: "100%", md: "100%", lg: "42%" }}
        display="flex"
        flexDirection={"column"}
      >
        <Box
          mb="40px"
          bg={"white"}
          p="10px"
          position={"relative"}
          // maxHeight="600px"
          height="100%"
          boxShadow={"0px 0px 12px #BCC6D0"}
        >
          <Box
            // h={{ base: "auto", md: "600px" }}
            boxShadow={"0px 0px 12px #BCC6D0"}
          >
            <Img w="100%" src="/coins.png"></Img>
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"flex-end"}
              color="black"
              fontSize={"14px"}
              fontWeight="600"
              lineHeight={"170%"}
              position={"absolute"}
              bottom="-24px"
              right={"0px"}
              gap="7px"
            >
              Sponsored
              <Box as="span">
                <Img src="/indo.svg" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          mb="40px"
          bg={"white"}
          p="10px"
          position={"relative"}
          minHeight={{ base: "auto", md: "auto" }}
          height="100%"
          boxShadow={"0px 0px 12px #BCC6D0"}
        >
          <Box>
            <Img
              w="100%"
              src="/dash.png"
              objectFit={"cover"}
              objectPosition="center"
              minHeight={{ base: "auto", md: "auto", lg: "401px" }}
              h="100%"
            ></Img>
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"flex-end"}
              color="black"
              fontSize={"14px"}
              fontWeight="600"
              lineHeight={"170%"}
              position={"absolute"}
              bottom="-24px"
              right={"0px"}
              gap="7px"
            >
              Sponsored
              <Box as="span">
                <Img src="/indo.svg" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Ads;
