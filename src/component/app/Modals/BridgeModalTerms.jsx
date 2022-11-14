import {
  Box,
  Button,
  Checkbox,
  Img,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function WaitingSignature() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#161A2D" borderRadius="8px" m="40px 20px">
          <Box borderBottom={"1px solid #d4d8dd47"}>
            <ModalHeader
              fontFamily={"poppins"}
              color={"white"}
              fontWeight="700"
              fontSize={"16px"}
              lineHeight="24px"
            >
              Welcome
            </ModalHeader>
            <ModalCloseButton
              color="#BBC1CA"
              p="2px"
              borderRadius="50%"
              top="16px"
              right="26px"
            />
          </Box>

          <ModalBody>
            <Text
              color={"white"}
              fontSize="14px"
              fontWeight={"400"}
              lineHeight="25px"
              fontFamily={"poppins"}
            >
              Befor you can get started, you will need to Read & Accept out
              Terms of Service
            </Text>
            <Box display={"flex"} gap="5px" py={"15px"}>
              <Link
                color={"#2F80ED"}
                fontFamily="poppins"
                fontWeight={"600"}
                fontSize="14px"
                lineHeight={"21px"}
              >
                View Terms of Service
              </Link>
              <Img src="Colordrive.svg" />
            </Box>
            <Checkbox
              color={"white"}
              fontSize="14px"
              fontWeight={"400"}
              lineHeight="25px"
              fontFamily={"poppins"}
            >
              I have Read & Accept the Terms of Service
            </Checkbox>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"#E8E9EB"}
              colorScheme="#E8E9EB"
              fontFamily={"poppins"}
              fontSize="15px"
              lineHeight={"22px"}
              fontWeight="600"
              color={"#8A9099"}
              onClick={onClose}
              borderRadius="0px"
              py={"8px"}
              px="25px"
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default WaitingSignature;
