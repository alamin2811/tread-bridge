import {
  Button,
  Box,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MenuCollapseComponent from "./MenuCollapse";
import MenuMainLink from './MenuMainLink';

const tradeLinks = [
  {
    id: 1,
    text: "Swap",
    link: "#",
  },
  {
    id: 2,
    text: "Liquidity",
    link: "#",
  },
  {
    id: 3,
    text: "Liquidity",
    link: "#",
  },
]
const FinancialPools  = [
  {
    id: 1,
    text: "Entertainment Pools",
    link: "#",
  },
  {
    id: 2,
    text: "Bonanza Pools",
    link: "#",
  },
  {
    id: 3,
    text: "Ranking Pools",
    link: "#",
  },
  {
    id: 3,
    text: "Cerberus pools",
    link: "#",
  },
]
const Entertainment  = [
  {
    id: 1,
    text: "Popular",
    link: "#",
  },
  {
    id: 2,
    text: "Wheels",
    link: "#",
  },
  {
    id: 3,
    text: "Slots",
    link: "#",
  },
  {
    id: 3,
    text: "Games",
    link: "#",
  },
  {
    id: 3,
    text: "Keno",
    link: "#",
  },
  {
    id: 3,
    text: "Promotions",
    link: "#",
  },
]

const MenuComponent = () => {
  const [isImgColor, setisImgcolor] = useState(false)
  const handleHoverColor = () => {
    setisImgcolor(prev=>!prev)
  }
  return (
    <>
      <Box
        position="relative"
        width="24px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Popover placement="top-start">
          <PopoverTrigger>
            <Button
              p={"0px"}
              m={"0px"}
              bg={"transparent"}
              _hover={{ bg: "transparent", opacity: "0.8" }}
              _focus={{ bg: "transparent" }}
            >
              <Image src="/header/menu-icon.svg" alt="" />
            </Button>
          </PopoverTrigger>
          <PopoverContent borderRadius={"0px"} top={"15px"}>
            <PopoverBody p={"0px"} borderRadius={"0px"}>
              <MenuMainLink menuLinkImg="/header/dashboard.svg" menuItem="Dashboard" menuUrl="#"/>
              <MenuCollapseComponent links={tradeLinks} btnText="Trade" btnImg="/header/trade-icon.svg"/>
              <MenuCollapseComponent links={FinancialPools} btnText="Financial Pools" btnImg="/header/financial-pools-icon.svg"/>
              <MenuCollapseComponent links={Entertainment} btnText="Entertainment" btnImg="/header/entertainment-icon.svg"/>
              <MenuMainLink menuLinkImg="/header/calendar.svg" menuItem="Calendar" menuUrl="#"/>
              <MenuMainLink menuLinkImg="/header/calendar.svg" menuItem="Membership" menuUrl="#"/>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default MenuComponent;
