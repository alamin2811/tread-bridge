import React, { useState } from "react";
import { Box, Button, Img, Text } from "@chakra-ui/react";
export default function MinMaxValue() {
  const [count, setCount] = useState(4000); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <Box>
      <Box display={"flex"} justifyContent="space-between" py={"10px"}>
        <Box>
          <Img src="/increase.svg" onClick={increment} cursor="pointer" />
        </Box>

        <Box
          color={"white"}
          fontWeight={"700"}
          fontSize="48px"
          lineHeight={"48px"}
        >
          {count}
        </Box>
        <Box>
          {" "}
          <Img src="/decrease.svg" onClick={decrement} cursor="pointer" />
        </Box>
      </Box>
    </Box>
  );
}
