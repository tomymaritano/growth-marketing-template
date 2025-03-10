import React from "react";
import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="white" py={4} px={8} boxShadow="sm">
      <Flex maxW="container.lg" mx="auto" align="center">
        <Heading size="md" color="primary">
          XOPE.io
        </Heading>
        <Spacer />
        <Button variant="ghost" color="primary">
          Contacto
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;