// src/layouts/SidebarLayout.tsx
import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: Props) {
  return (
    <Flex>
      <Sidebar />
      <Box ml="130px" p={6} w="full" bg="white">
        {children}
      </Box>
    </Flex>
  );
}