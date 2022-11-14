import {
  Box,
  Button,
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
              It looks like you’re new to{" "}
              <Text fontWeight={"bold"} as={"span"}>
                Enoch App
              </Text>{" "}
              or using a new device to connect. For added Security, Please Sign
              a Message with your wallet to continue.
            </Text>
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
            >
              Waiting for signature
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default WaitingSignature;
