import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";

const Accordians = () => {
  return (
    <>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Accordians;
