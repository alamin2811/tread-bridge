import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box pb={{xl: "81px", md: "50px", base: "30px"}}>
      <Container maxW={"1360px"} px="20px">
        <Box bg="#323756" borderRadius="4px" minH="160px" py="40px" px="40px" display="flex" alignItems="center">
          <Text
            fontWeight={"600"}
            fontSize={"24px"}
            lineHeight={"36px"}
            letterSpacing={"-0.011em"}
            color={"#FFFFFF"}
          >
            Footer
          </Text>
        </Box>
      </Container>
      </Box>
    </>
  )
}

export default Footer