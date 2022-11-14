import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Link, useDisclosure, Button, Collapse, Box, Image, background } from "@chakra-ui/react";
import React, {useState} from "react";
import MenuLinks from './MenuLink';

const MenuCollapseComponent = ({links, btnText, btnImg}) => {
  const [isImgColor, setisImgcolor] =  useState(true)
  const [isToggleOpen, setisToggleOpen] = useState(false)
  const [isTrueColor, setisTrueColor] = useState(false)
  const { isOpen, onToggle } = useDisclosure();
  const handleToggle = () => {
    setisTrueColor(!isTrueColor)
    setisToggleOpen(prev=>!prev)
    onToggle()
  }
  const handleHover = () => {
    setisImgcolor(prev=>!prev)
  }
  return (
    <>
      <Button onClick={handleToggle}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        h={"61px"}
        bg={!isTrueColor ? "#FFFFFF" : "linear-gradient(97.3deg, #1386F0 0%, #1673FF 100%)" }
        width={"100%"}
        borderRadius={"0px"}
        borderBottom={"1px solid #D8CEED"}
        fontWeight={"600"}
        fontSize={"18px"}
        lineHeight={"170.23%"}
        color={!isTrueColor ? "#354A65" : "#FFFFFF" }
        px={"18px"}
        py={"16px"}
        position={"relative"}
        _hover={{bgGradient: "linear(97.3deg, #1386F0 0%, #1673FF 100%)", color: "#FFFFFF"}}
      >
        {!isToggleOpen & isImgColor ? <Image src={btnImg} alt="icon" mr={"17px"} /> : <Image src={btnImg} alt="icon" mr={"17px"} filter='auto' brightness='100' /> }
        
        {btnText}

        {!isToggleOpen ? <TriangleDownIcon position={"absolute"} right={"14px"} fontSize={"13px"} /> : <TriangleUpIcon position={"absolute"} right={"14px"} fontSize={"13px"} /> }
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          py={"7px"}
          px={"16px"}
          bg={"#F7F7F7"}
        >
            {links.map(link=>(
                <MenuLinks key={link.id} MenuLink={link.link} MenuText={link.text} />
            ))}
        </Box>
      </Collapse>
    </>
  );
};

export default MenuCollapseComponent;
