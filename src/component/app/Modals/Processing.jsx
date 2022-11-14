import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Processing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w="100%"
        py="24px"
        colorScheme="#363B52"
        bg="#363B52"
        width="100%"
        color="#4E5370"
        fontSize="18px"
        height="70px"
        size="lg"
        mr="2"
        onClick={onOpen}
      >
        SWAP
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="#161A2D" borderRadius="8px" p="24px" m="40px 20px">
          <ModalCloseButton
            color="#7B7B7B"
            p="2px"
            border="2px solid #7B7B7B"
            borderRadius="50%"
            top="16px"
            right="26px"
          />
          <ModalBody px="62px" py="70px">
            <Box display={"flex"} justifyContent={"center"} pb="15px">
              <Image src="/Loader.svg" />
            </Box>
            <Box textAlign={"center"}>
              <Text
                as={"h2"}
                fontSize="18px"
                lineHeight={"27px"}
                fontFamily="poppins"
                fontWeight={"700"}
                color="white"
                mt="7px"
              >
                Processing
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Processing;
