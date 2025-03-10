// src/components/FeatureCard.tsx

import React from "react";
import {
  Box,
  Text,
  Stack,
  Icon,
  useColorModeValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const MotionBox = motion(Box);

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <MotionBox
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="sm"
      bg={useColorModeValue("white", "gray.700")}
      // Ojo con la transición
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.4 }} //  <-- Fijamos type: "tween"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Stack direction="row" spacing={4} align="center">
        <Icon as={icon} boxSize={6} color="teal.400" />
        <Box>
          <Text fontWeight="semibold" mb={1} color="teal.600">
            {title}
          </Text>
          <Text fontSize="sm" lineHeight="tall">
            {description}
          </Text>
        </Box>
      </Stack>
    </MotionBox>
  );
}