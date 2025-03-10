// Section.tsx
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <Box as="section" py={6}>
      <Heading size="lg" mb={4}>
        {title}
      </Heading>
      <Text>{children}</Text>
    </Box>
  );
};

export default Section;
