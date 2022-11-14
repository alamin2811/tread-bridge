import { Box, Button } from "@chakra-ui/react";
import React from "react";

const BridgeButtons = ({ ButtonText }) => {
  return (
    <>
      <Box>
        <Button
          w="100%"
          py="24px"
          colorScheme="#3B5DD8"
          bg="#3B5DD8"
          width="100%"
          color="white"
          fontFamily={"poppins"}
          fontSize="18px"
          height="70px"
          size="lg"
          mr="2"
        >
          {ButtonText}
        </Button>
      </Box>
    </>
  );
};

export default BridgeButtons;
