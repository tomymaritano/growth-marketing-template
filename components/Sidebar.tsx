// src/components/Sidebar.tsx

import {
  Box,
  Text,
  Flex,
  Icon,
  Image,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Link,
  List,
  ListItem
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Iconos de ejemplo
import { MdFolder, MdOutlineMenuBook, MdHome } from "react-icons/md";
// Agregamos iconos para LinkedIn y GitHub
import { FaLinkedin, FaGithub } from "react-icons/fa";

const MotionBox = motion(Box);

export default function Sidebar() {
  // Color de fondo negro en modo claro, teal.800 en modo oscuro
  const bgColor = useColorModeValue("#1F2023", "#1F2023");
  const textColor = useColorModeValue("white", "whiteAlpha.900");
  const borderColor = useColorModeValue("gray.100", "gray.700");

  return (
    <MotionBox
      as="nav"
      position="fixed"
      left="0"
      top="0"
      width="260px"
      height="100vh"
      px={6}
      py={4}
      bg={bgColor}
      color={textColor}
      boxShadow="lg"
      borderRightWidth="1px"
      borderRightColor={borderColor}
      zIndex={10}
      // Animación de entrada
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Flex direction="column" h="100%">
        {/* Cabecera con imagen */}
        <Box mb={8} textAlign="center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_blackbg.png"
            alt="XOPE.io Logo"
            mx="auto"
            mb={2}
          />
          <Text fontSize="sm" opacity={0.8}>
            Growth Marketing
          </Text>
        </Box>

        {/* Un link de "Inicio" como ejemplo (opcional) */}
        <Box mb={4}>
          <List spacing={1}>
            <ListItem>
              <Link
                href="/"
                display="flex"
                alignItems="center"
                px={3}
                py={2}
                borderRadius="md"
                _hover={{
                  bg: "whiteAlpha.200",
                  textDecoration: "none",
                }}
              >
                <Icon as={MdHome} boxSize={5} mr={2} />
                Inicio
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* Acordeón: Entregas */}
        <Box flex="1">
          <Accordion allowMultiple>
            <AccordionItem border="none">
              <AccordionButton
                px={3}
                py={2}
                borderRadius="md"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                <Icon as={MdFolder} boxSize={5} mr={2} />
                <Box flex="1" textAlign="left" fontWeight="medium">
                  Entregas
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel px={0}>
                <Accordion allowMultiple>
                  {/* Entrega 1 */}
                  <AccordionItem border="none">
                    <AccordionButton
                      px={3}
                      py={2}
                      borderRadius="md"
                      _hover={{ bg: "whiteAlpha.200" }}
                    >
                      <Icon as={MdOutlineMenuBook} boxSize={5} mr={2} />
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        Entrega 1
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel px={2}>
                      <List spacing={1}>
                        <ListItem>
                          <Link
                            href="introduccion"
                            display="block"
                            px={3}
                            py={2}
                            borderRadius="md"
                            _hover={{
                              bg: "whiteAlpha.200",
                              textDecoration: "none",
                            }}
                          >
                            1. Introducción
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="#propuesta"
                            display="block"
                            px={3}
                            py={2}
                            borderRadius="md"
                            _hover={{
                              bg: "whiteAlpha.200",
                              textDecoration: "none",
                            }}
                          >
                            2. Propuesta de Valor
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="#analisis"
                            display="block"
                            px={3}
                            py={2}
                            borderRadius="md"
                            _hover={{
                              bg: "whiteAlpha.200",
                              textDecoration: "none",
                            }}
                          >
                            3. Análisis Competitivo
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="#modelo"
                            display="block"
                            px={3}
                            py={2}
                            borderRadius="md"
                            _hover={{
                              bg: "whiteAlpha.200",
                              textDecoration: "none",
                            }}
                          >
                            4. Modelo de Negocio
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="#buyer"
                            display="block"
                            px={3}
                            py={2}
                            borderRadius="md"
                            _hover={{
                              bg: "whiteAlpha.200",
                              textDecoration: "none",
                            }}
                          >
                            5. Buyer Persona
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="#conclusion"
                            display="block"
                            px={3}
                            py={2}
                            borderRadius="md"
                            _hover={{
                              bg: "whiteAlpha.200",
                              textDecoration: "none",
                            }}
                          >
                            6. Conclusión
                          </Link>
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>

                  {/* Entrega 2 */}
                  <AccordionItem border="none">
                    <AccordionButton
                      px={3}
                      py={2}
                      borderRadius="md"
                      _hover={{ bg: "whiteAlpha.200" }}
                    >
                      <Icon as={MdOutlineMenuBook} boxSize={5} mr={2} />
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        Entrega 2
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel px={2}>
                      <Text fontSize="sm" opacity={0.7} p={2}>
                        Aquí podrías poner secciones de la Entrega 2.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  {/* Entrega 3 */}
                  <AccordionItem border="none">
                    <AccordionButton
                      px={3}
                      py={2}
                      borderRadius="md"
                      _hover={{ bg: "whiteAlpha.200" }}
                    >
                      <Icon as={MdOutlineMenuBook} boxSize={5} mr={2} />
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        Entrega 3
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel px={2}>
                      <Text fontSize="sm" opacity={0.7} p={2}>
                        Contenido o secciones de la Entrega 3.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  {/* Entrega 4 */}
                  <AccordionItem border="none">
                    <AccordionButton
                      px={3}
                      py={2}
                      borderRadius="md"
                      _hover={{ bg: "whiteAlpha.200" }}
                    >
                      <Icon as={MdOutlineMenuBook} boxSize={5} mr={2} />
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        Entrega 4
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel px={2}>
                      <Text fontSize="sm" opacity={0.7} p={2}>
                        Contenido o secciones de la Entrega 4.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        {/* Leyenda final con redes */}
        <Box mt={6} textAlign="center">
          <Text fontSize="sm" opacity={0.8}>
            Alumno: Tomás Maritano - Comisión 1231
          </Text>

          {/* Enlaces a LinkedIn y GitHub */}
          <Flex justify="center" align="center" mt={2} gap={3}>
            <Link
              href="https://www.linkedin.com/in/tomasmaritano"
              isExternal
              _hover={{ textDecoration: "none", color: "whiteAlpha.800" }}
            >
              <Icon as={FaLinkedin} boxSize={5} />
            </Link>
            <Link
              href="https://github.com/tomasmaritano"
              isExternal
              _hover={{ textDecoration: "none", color: "whiteAlpha.800" }}
            >
              <Icon as={FaGithub} boxSize={5} />
            </Link>
          </Flex>

          {/* Si deseas el link específico al repositorio del proyecto: */}
          <Link
            href="https://github.com/tomasmaritano/NombreDelProyecto"
            isExternal
            fontSize="xs"
            color="whiteAlpha.600"
            _hover={{ color: "whiteAlpha.800" }}
            display="inline-block"
            mt={2}
          >
            Ver repositorio del proyecto
          </Link>
        </Box>
      </Flex>
    </MotionBox>
  );
}