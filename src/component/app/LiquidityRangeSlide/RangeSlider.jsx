import {
    Box,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Badge,
  } from "@chakra-ui/react";
  import React from "react";
  import "@fontsource/poppins";
  export const RangeSliderComponent = () => {
    return (
      <>
        <Box>
          <RangeSlider
            width="100%"
            aria-label={["min", "max"]}
            defaultValue={[0, 100]}
            h={{sm: "258px", base: "150px"}}
            borderBottom={"1px solid #161A2D"}
          >
            <RangeSliderTrack bg="transparent" h="100%">
              <RangeSliderFilledTrack bg={"linear-gradient(90deg, rgba(41, 95, 201, 0.2) 0%, rgba(99, 191, 56, 0.09) 100%);"} h="100%" />
            </RangeSliderTrack>
            <RangeSliderThumb w="6px" bg="#0069E0" h="100%" borderRadius="0px" index={0} position="relative" _focusVisible={{outline: "none"}}>
              <Box bg="#0069E0" display="flex" alignItems="center" justifyContent="center" gap="5px" h={"48px"} w={"28px"} position="absolute" right="0px" top="-1px" borderRadius="4px">
                <Box bg="rgba(255, 255, 255, 0.2)" borderRadius="3px" w="3px" h="32px"></Box>
                <Box bg="rgba(255, 255, 255, 0.2)" borderRadius="3px" w="3px" h="32px"></Box>
              </Box>
            </RangeSliderThumb>
            <Box
                position={"absolute"}
                left="38%"
                top="0%"
                w="3px"
                height="100%"
                bg="#FFFFFF"
              ></Box>
            <RangeSliderThumb w="6px" bg="#1FAD7D" h="100%" borderRadius="0px" index={1} position="relative" _focusVisible={{outline: "none"}}>
              <Box bg="#1FAD7D" display="flex" alignItems="center" justifyContent="center" gap="5px" h={"48px"} w={"28px"} position="absolute" left="0px" top="-1px" borderRadius="4px">
                <Box bg="rgba(255, 255, 255, 0.2)" borderRadius="3px" w="3px" h="32px"></Box>
                <Box bg="rgba(255, 255, 255, 0.2)" borderRadius="3px" w="3px" h="32px"></Box>
              </Box>
            </RangeSliderThumb>
          </RangeSlider>
        </Box>
      </>
    );
  };
  
  export default RangeSliderComponent;
  