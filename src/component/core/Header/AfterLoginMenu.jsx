import { TriangleDownIcon } from "@chakra-ui/icons";
import {
    Button,
    Box,
    Image,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Badge,
    Flex,
    UnorderedList, 
    ListItem
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  
  const AfterLoginMenu = () => {
    return (
      <>
        <Box
          position="relative"
          width="24px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Popover placement="top-end">
            <PopoverTrigger>
              <Box
                bg="transparent"
                color="#FFF"
                as={Button}
                p="0"
                rightIcon={
                  <TriangleDownIcon color={"#3F434A"} fontSize={"10px"} />
                }
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
              >
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  fontSize="14px"
                  gap="8px"
                >
                  <Box
                    border="1px solid #FFFFFF"
                    borderRadius="50%"
                    height={{ sm: "32px", base: "26px" }}
                    width={{ sm: "32px", base: "26px" }}
                    background="#C4C4C4"
                    position="relative"
                  >
                    <Image
                      src="/header/user-avater-img.png"
                      alt="img"
                      h="100%"
                      w="100%"
                    />
                    <Badge
                      position="absolute"
                      bg="#86CE23"
                      border="1px solid #FFFFFF"
                      borderRadius="50%"
                      top="-2px"
                      right="-2px"
                      h="12px"
                      w="12px"
                    ></Badge>
                  </Box>
                </Box>
              </Box>
            </PopoverTrigger>
            <PopoverContent borderRadius={"0px"} top={"15px"} maxW="248px">
              <PopoverBody p={"0px"} borderRadius={"0px"} bg="#F7F7F7">
                <Flex
                  p="16px"
                  bg="#F9FAFC"
                  boxShadow="0px 4px 4px rgba(226, 226, 226, 0.25)"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Flex gap="8px" alignItems="center">
                    <Box
                      border="1px solid #FFFFFF"
                      borderRadius="50%"
                      height={{ sm: "30px", base: "26px" }}
                      width={{ sm: "30px", base: "26px" }}
                      background="#C4C4C4"
                      position="relative"
                    >
                      <Image
                        src="/header/user-avater-img.png"
                        alt="img"
                        h="100%"
                        w="100%"
                      />
                      <Badge
                        position="absolute"
                        bg="#86CE23"
                        border="1px solid #FFFFFF"
                        borderRadius="50%"
                        top="-2px"
                        right="-2px"
                        h="9.5px"
                        w="9.5px"
                      ></Badge>
                    </Box>
                    <Link
                      fontWeight="500"
                      fontSize="14px"
                      lineHeight="170.23%"
                      color="#142233"
                      _hover={{ textDecoration: "none", opacity: "0.8" }}
                    >
                      @Hulk
                    </Link>
                  </Flex>

                  <Link
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="170.23%"
                    color="#1386F0"
                    textDecoration="underline"
                    _hover={{ opacity: "0.8" }}
                  >
                    Change
                  </Link>
                </Flex>

                <Box
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="260%"
                  color="#142233"
                  px="16px"
                  pb="8px"
                >
                  <Box
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    flexDirection="column"
                    pb="13px"
                    borderBottom="1px solid #688DB3"
                    pt="6px"
                  >
                    <Link href="#" _hover={{textDecoration: "none", opacity: "0.8"}} w="100%">Your Public Profile</Link>
                    <Link href="#" _hover={{textDecoration: "none", opacity: "0.8"}} w="100%">Your shop</Link>
                    <Link href="#" _hover={{textDecoration: "none", opacity: "0.8"}} w="100%" position="relative">Follower Requests <Badge position="absolute" top="10px" right="0px" bg="#42CE1F" h="20px" w="20px" display="flex" alignItems="center" justifyContent="center" borderRadius="50%" fontSize="14px" fontWeight="700" color="#FFFFFF">9</Badge> </Link>
                    <Link href="#" _hover={{textDecoration: "none", opacity: "0.8"}} w="100%">Invite a Friend</Link>
                  </Box>

                  <Box
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    flexDirection="column"
                    pb="13px"
                    pt="6px"
                  >
                    <Link href="#" _hover={{textDecoration: "none", opacity: "0.8"}} w="100%">Setting</Link>
                    <Link href="#" _hover={{textDecoration: "none", opacity: "0.8"}} w="100%">Private Profile </Link>
                    <Link href="#" _hover={{textDecoration: "none", opacity: "0.8"}} w="100%">Help Center</Link>
                    <Link href="#" _hover={{textDecoration: "none", opacity: "0.8"}} w="100%" color="#FF5C00">Logout</Link>
                  </Box>
                </Box>

                <Box
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="170.23%"
                  textTransform="uppercase"                  
                  color="#142233"
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  flexDirection="column"
                  gap="1px"
                >
                  <Link bg="#EBEBEB" px="16px" py="6px" _hover={{ textDecoration: "none", color: "#FFFFFF", bgGradient: "linear(97.3deg, #1386F0 0%, #1673FF 100%)"}} w="100%">GO TO MarketPlace</Link>
                  <Link bg="#EBEBEB" px="16px" py="6px" _hover={{ textDecoration: "none", color: "#FFFFFF", bgGradient: "linear(97.3deg, #1386F0 0%, #1673FF 100%)"}} w="100%">Switch to Enoch Website</Link>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </>
    );
  };
  
  export default AfterLoginMenu;
  