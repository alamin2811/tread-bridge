import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const LayoutWrapper = ({ children }) => {
  return (
    <Box
      backgroundImage="url('/trade-bg.png')"
      backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <Header/>
      {children}
      <Footer/>
    </Box>
  );
};

export default LayoutWrapper;