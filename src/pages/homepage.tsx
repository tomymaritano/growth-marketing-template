// src/pages/HomePage.tsx


import {
  useColorModeValue,
  Box as ChakraBox,
  Heading as ChakraHeading,
  Text as ChakraText,
  Divider,
  Button,
  Stack,
} from "@chakra-ui/react"; 
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaClipboardList } from "react-icons/fa";
import FeatureCard from "../../components/FeaturedCard";

// Creamos versiones “motion” de componentes Chakra
const MotionBox = motion(ChakraBox);
const MotionHeading = motion(ChakraHeading);
const MotionText = motion(ChakraText);

export default function HomePage() {
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <MotionBox
      maxW="container.lg"
      mx="auto"
      my={8}
      p={[4, 6, 8]}
      bg={bgColor}
      borderRadius="md"
      // Fade in inicial
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // <-- Forzamos la transición con un casting
      transition={{ duration: 0.8 } as any}
    >
      {/* Sección Hero */}
      <MotionBox
        mb={8}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 } as any}
        viewport={{ once: true, amount: 0.2 }}
      >
        <MotionHeading
          as="h1"
          size="lg"
          fontWeight="semibold"
          color="teal.600"
          mb={4}
        >
          ¡Bienvenido a XOPE.io!
        </MotionHeading>
        <MotionText
          fontSize="md"
          color="teal.700"
          mb={4}
          lineHeight="tall"
        >
          Donde la automatización, el growth hacking y la innovación se unen
          para impulsar el crecimiento de tu startup.
        </MotionText>
        <Stack direction="row" spacing={4}>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() => {}}
          >
            Ver Entregas
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => {}}
          >
            Contacto
          </Button>
        </Stack>
      </MotionBox>

      <Divider mb={8} />

      {/* Sección Sobre el Proyecto */}
      <MotionHeading
        as="h2"
        size="md"
        mt={8}
        mb={3}
        color="teal.700"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 } as any}
        viewport={{ once: true, amount: 0.2 }}
      >
        Sobre el Proyecto
      </MotionHeading>
      <MotionText
        mb={6}
        lineHeight="tall"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 } as any}
        viewport={{ once: true, amount: 0.2 }}
      >
        Este trabajo explora la propuesta de valor de <strong>XOPE.io</strong>,
        mostrando cómo fusionamos estrategias de 
        <strong> automatización</strong>, <strong>desarrollo de producto</strong> 
        y <strong>growth hacking</strong> para ayudar a las startups a 
        escalar eficientemente...
      </MotionText>

      <Divider mb={8} />

      {/* Sección Características Clave */}
      <MotionHeading
        as="h2"
        size="md"
        mt={8}
        mb={3}
        color="teal.700"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 } as any}
        viewport={{ once: true, amount: 0.2 }}
      >
        Características Clave
      </MotionHeading>
      <MotionText
        mb={4}
        lineHeight="tall"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 } as any}
        viewport={{ once: true, amount: 0.2 }}
      >
        Conoce los pilares fundamentales que hacen de XOPE.io una opción 
        única...
      </MotionText>

      <Stack
        spacing={4}
        mb={6}
        // OJO: con as={motion.div} => conflict con transition
        as={motion.div}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 } as any}
        viewport={{ once: true, amount: 0.2 }}
      >
        <FeatureCard
          icon={FaRocket}
          title="Automatización Inteligente"
          description="Implementamos procesos automatizados con IA..."
        />
        <FeatureCard
          icon={FaLightbulb}
          title="Enfoque en Innovación"
          description="Basamos el crecimiento en metodologías ágiles..."
        />
        <FeatureCard
          icon={FaClipboardList}
          title="Estrategia Basada en Datos"
          description="Todo se fundamenta en la analítica..."
        />
      </Stack>

      <Divider mb={8} />

      {/* Sección Cómo Navegar */}
      <MotionHeading
        as="h2"
        size="md"
        mt={8}
        mb={3}
        color="teal.700"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 } as any}
        viewport={{ once: true, amount: 0.2 }}
      >
        ¿Cómo Navegar Este Proyecto?
      </MotionHeading>
      <MotionText
        mb={6}
        lineHeight="tall"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 } as any}
        viewport={{ once: true, amount: 0.2 }}
      >
        En el menú lateral, encontrarás un apartado de <strong>Entregas</strong>...
      </MotionText>

      <Divider />
    </MotionBox>
  );
}