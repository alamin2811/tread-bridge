import { Link, Image } from '@chakra-ui/react'
import React, { useState } from "react";

const MenuMainLink = ({menuLinkImg , menuItem, menuUrl }) => {
    const [isImgColor, setisImgcolor] = useState(false);
    const handleHoverColor = () => {
      setisImgcolor((prev) => !prev);
    };
  return (
    <>
      <Link href={menuUrl}
        onMouseEnter={handleHoverColor}
        onMouseLeave={handleHoverColor}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        h="61px"
        borderBottom="1px solid #D8CEED"
        px="18px"
        py="16px"
        fontWeight="600"
        fontSize="18px"
        lineHeight="170.23%"
        color="#354A65"
        _hover={{
          bgGradient: "linear(97.3deg, #1386F0 0%, #1673FF 100%)",
          color: "#FFFFFF",
        }}
      >
        {!isImgColor ? (
          <Image src={menuLinkImg} alt="icon" mr={"17px"} />
        ) : (
          <Image
            src={menuLinkImg}
            alt="icon"
            mr={"17px"}
            filter="auto"
            brightness="100"
          />
        )}
        {menuItem}
      </Link>
    </>
  );
}

export default MenuMainLink