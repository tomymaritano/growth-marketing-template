
import {
  // Aunque no las uses directamente, las importamos para que Chakra reconozca sus tipados.
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  useColorModeValue,
  Box as ChakraBox,
  Heading as ChakraHeading,
  Text as ChakraText,
  Table as ChakraTable,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import MarketSegmentationChart from '../../components/charts/market-segment'
// Creamos versiones “motion” de componentes Chakra:
const MotionBox = motion(ChakraBox);
const MotionHeading = motion(ChakraHeading);
const MotionText = motion(ChakraText);
const MotionTable = motion(ChakraTable);

export default function XopePage() {
  // Si quisieras cambiar el fondo según light/dark mode:
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <MotionBox
      // Contenedor principal
      maxW="800px"
      mx="auto"
      my={8}
      p={[4, 6, 8]}
      bg={bgColor}
      borderRadius="md"
      // Animación inicial de fade in
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Título principal (Sección principal) */}
      {/* <MotionHeading
        as="h1"
        mb={6}
        fontWeight="semibold"
        color="teal.600"
        size="lg"
        // Efecto de aparición
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Navegando por las estrellas: Un análisis integral para la conquista del mercado
      </MotionHeading> */}

      {/* Sección 1 */}
      <MotionHeading
        as="h2"
        size="md"
        mt={8}
        mb={3}
        color="teal.700"
        // Efecto scroll reveal
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        1. Introducción
      </MotionHeading>

      <MotionText
        mb={6}
        lineHeight="tall"
        // Aparece con un pequeño fade y desplazamiento
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        En un contexto empresarial dinámico y altamente competitivo, las startups tecnológicas
        enfrentan desafíos significativos para escalar sus operaciones de manera eficiente.{" "}
        <strong>XOPE.io</strong> se posiciona como una consultora especializada en{" "}
        <strong>
          growth hacking, automatización con inteligencia artificial (IA) y desarrollo de productos
          digitales
        </strong>
        , proporcionando soluciones innovadoras para optimizar el crecimiento y la validación de
        productos en el mercado. Este documento ofrece un análisis estructurado de la propuesta de
        valor, el modelo de negocio y la estrategia de crecimiento de XOPE.io, alineado con las
        mejores prácticas de innovación y emprendimiento.
      </MotionText>
      <Divider mb={8} />

      {/* Sección 2 */}
      <MotionHeading
        as="h2"
        size="md"
        mt={8}
        mb={3}
        color="teal.700"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        2. Propuesta de Valor y Mercado Objetivo
      </MotionHeading>

      {/* 2.1 Definición del Negocio */}
      <MotionHeading
        as="h3"
        size="sm"
        mt={4}
        mb={2}
        color="teal.800"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        2.1 Definición del Negocio
      </MotionHeading>

      <MotionText
        mb={6}
        lineHeight="tall"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        XOPE.io se especializa en la intersección entre{" "}
        <strong>automatización, desarrollo de producto y estrategias de crecimiento</strong>,
        brindando consultoría y soluciones digitales a startups tecnológicas, empresas de blockchain y fintechs.
      </MotionText>

      {/* 2.2 Oferta de Valor */}
      <MotionHeading
        as="h3"
        size="sm"
        mt={4}
        mb={2}
        color="teal.800"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        2.2 Oferta de Valor
      </MotionHeading>
      <motion.ul
        style={{ marginBottom: "1.5rem", marginLeft: "1.5rem" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <li>
          <strong>Automatización de procesos</strong> mediante IA para optimizar la eficiencia operativa.
        </li>
        <li>
          <strong>Desarrollo de productos digitales</strong> con metodologías ágiles y validación de mercado.
        </li>
        <li>
          <strong>Optimización del crecimiento</strong> mediante estrategias de adquisición y retención de clientes.
        </li>
      </motion.ul>

      {/* 2.3 Segmentación del Mercado */}
      <MotionHeading
        as="h3"
        size="sm"
        mt={4}
        mb={2}
        color="teal.800"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        2.3 Segmentación del Mercado
      </MotionHeading>

      <MotionText
        mb={2}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Nuestro mercado objetivo incluye:
      </MotionText>

      <motion.ul
        style={{ marginBottom: "1.5rem", marginLeft: "1.5rem" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <li>
          <strong>Startups tecnológicas</strong> en etapas iniciales y de escalamiento.
        </li>
        <li>
          <strong>Empresas del sector fintech y blockchain</strong> que buscan optimizar su go-to-market strategy.
        </li>
        <li>
          <strong>Departamentos de innovación y growth</strong> en empresas establecidas que requieren metodologías ágiles.
        </li>
      </motion.ul>

      {/* 2.4 Problemática Identificada */}
      <MotionHeading
        as="h3"
        size="sm"
        mt={4}
        mb={2}
        color="teal.800"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        2.4 Problemática Identificada
      </MotionHeading>

      <MotionText
        mb={4}
        lineHeight="tall"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Las startups tecnológicas enfrentan barreras significativas para lograr un crecimiento
        sostenible, incluyendo:
      </MotionText>

      <motion.ul
        style={{ marginBottom: "1.5rem", marginLeft: "1.5rem" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <li>Altos costos de adquisición de clientes (CAC).</li>
        <li>Falta de validación de producto antes de la escalabilidad.</li>
        <li>Procesos de growth hacking no estructurados ni automatizados.</li>
      </motion.ul>


      <MotionText
        mb={6}
        lineHeight="tall"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        XOPE.io aborda estas problemáticas combinando inteligencia artificial con estrategias de
        mercado validadas, optimizando costos y maximizando la eficiencia operativa.
      </MotionText>

      <MarketSegmentationChart />

      <Divider mt={8} mb={8} />

      {/* Sección 3 */}
      <MotionHeading
        as="h2"
        size="md"
        mt={8}
        mb={3}
        color="teal.700"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        3. Análisis Competitivo y Market Fit
      </MotionHeading>

      <MotionHeading
        as="h3"
        size="sm"
        mt={4}
        mb={2}
        color="teal.800"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        3.1 Benchmarking
      </MotionHeading>

      <MotionText
        mb={4}
        lineHeight="tall"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        El ecosistema de <strong>growth hacking y automatización</strong> cuenta con diversos actores clave:
      </MotionText>

      <MotionTable
        variant="striped"
        colorScheme="gray"
        mb={6}
        // Animación de scale-in
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Thead>
          <Tr>
            <Th>Competidor</Th>
            <Th>Fortalezas</Th>
            <Th>Debilidades</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>GrowthHackers.com</Td>
            <Td>Metodologías de growth hacking bien documentadas</Td>
            <Td>No ofrece soluciones de automatización</Td>
          </Tr>
          <Tr>
            <Td>Zapier</Td>
            <Td>Amplia integración con herramientas digitales</Td>
            <Td>No proporciona estrategia de crecimiento personalizada</Td>
          </Tr>
          <Tr>
            <Td>HubSpot</Td>
            <Td>Solución integral de marketing y ventas</Td>
            <Td>Costos elevados para startups emergentes</Td>
          </Tr>
        </Tbody>
      </MotionTable>

      <MotionText
        mb={6}
        lineHeight="tall"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        XOPE.io se diferencia por ofrecer una combinación única de{" "}
        <strong>growth hacking automatizado, validación de producto y consultoría especializada en escalabilidad.</strong>
      </MotionText>

      <MotionHeading
        as="h3"
        size="sm"
        mt={4}
        mb={2}
        color="teal.800"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        3.2 Product-Market Fit
      </MotionHeading>

      <motion.ul
        style={{ marginBottom: "1.5rem", marginLeft: "1.5rem" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <li>
          <strong>Segmentos de clientes:</strong> Startups, fintechs y empresas blockchain.
        </li>
        <li>
          <strong>Jobs to be Done:</strong> Escalar operaciones sin aumentar significativamente los costos operativos.
        </li>
        <li>
          <strong>Diferenciadores clave:</strong> Estrategias basadas en datos, automatización con IA y un enfoque integral en el desarrollo de producto.
        </li>
      </motion.ul>

      <Divider mb={8} />

      {/* Sección 4 */}
      <MotionHeading
        as="h2"
        size="md"
        mt={8}
        mb={3}
        color="teal.700"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        4. Modelo de Negocio y Métricas Clave
      </MotionHeading>

      <MotionHeading
        as="h3"
        size="sm"
        mt={4}
        mb={2}
        color="teal.800"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        4.1 Business Model Canvas
      </MotionHeading>

      <motion.ul
        style={{ marginBottom: "1.5rem", marginLeft: "1.5rem" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <li>
          <strong>Propuesta de valor:</strong> Crecimiento escalable mediante automatización y desarrollo de productos digitales.
        </li>
        <li>
          <strong>Canales:</strong> Web, redes sociales, asociaciones con incubadoras y aceleradoras.
        </li>
        <li>
          <strong>Fuentes de ingresos:</strong> Modelo de suscripción, consultoría estratégica y desarrollo de productos.
        </li>
        <li>
          <strong>Recursos clave:</strong> Infraestructura tecnológica, talento experto en IA y growth marketing.
        </li>
      </motion.ul>

      <MotionHeading
        as="h3"
        size="sm"
        mt={4}
        mb={2}
        color="teal.800"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        4.2 North Star Metric (NSM)
      </MotionHeading>

      <MotionText
        mb={4}
        lineHeight="tall"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        El crecimiento del negocio se mide a través de la <strong>tasa de escalabilidad de clientes</strong>, determinada por:
      </MotionText>

      <motion.ul
        style={{ marginBottom: "1.5rem", marginLeft: "1.5rem" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <li>
          <strong>Crecimiento porcentual mensual</strong> de startups que utilizan XOPE.io.
        </li>
        <li>
          <strong>Nivel de automatización</strong> implementado por los clientes en sus operaciones.
        </li>
        <li>
          <strong>Validación y escalabilidad</strong> de productos digitales desarrollados con XOPE.io.
        </li>
      </motion.ul>

      <Divider mb={8} />

      {/* Sección 5 */}
      <MotionHeading
        as="h2"
        size="md"
        mt={8}
        mb={3}
        color="teal.700"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        5. Buyer Persona y Buyer Journey
      </MotionHeading>

      <MotionHeading
        as="h3"
        size="sm"
        mt={4}
        mb={2}
        color="teal.800"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        5.1 Buyer Persona: CEO de Startup Tecnológica
      </MotionHeading>

      <MotionTable
        variant="striped"
        colorScheme="gray"
        mb={6}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Thead>
          <Tr>
            <Th>Característica</Th>
            <Th>Descripción</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <strong>Nombre Ficticio</strong>
            </Td>
            <Td>Javier Ramírez</Td>
          </Tr>
          <Tr>
            <Td>
              <strong>Edad</strong>
            </Td>
            <Td>30-40 años</Td>
          </Tr>
          <Tr>
            <Td>
              <strong>Ubicación</strong>
            </Td>
            <Td>América Latina, Estados Unidos, Europa</Td>
          </Tr>
          <Tr>
            <Td>
              <strong>Cargo</strong>
            </Td>
            <Td>CEO / Fundador de una startup tech</Td>
          </Tr>
          <Tr>
            <Td>
              <strong>Objetivos</strong>
            </Td>
            <Td>Validar y escalar su producto digital de manera eficiente</Td>
          </Tr>
          <Tr>
            <Td>
              <strong>Desafíos</strong>
            </Td>
            <Td>
              Alto CAC, dificultad para estructurar estrategias de growth hacking, falta de
              automatización en procesos clave
            </Td>
          </Tr>
          <Tr>
            <Td>
              <strong>Comportamiento digital</strong>
            </Td>
            <Td>Activo en LinkedIn, Twitter, foros de emprendimiento y growth hacking</Td>
          </Tr>
          <Tr>
            <Td>
              <strong>Cómo XOPE.io le ayuda</strong>
            </Td>
            <Td>
              Estructurando su estrategia de crecimiento con automatización y validación de producto
            </Td>
          </Tr>
        </Tbody>
      </MotionTable>

      <MotionHeading
        as="h3"
        size="sm"
        mt={4}
        mb={2}
        color="teal.800"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        5.2 Buyer Journey
      </MotionHeading>

      <motion.ul
        style={{ marginBottom: "1.5rem", marginLeft: "1.5rem" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <li>
          <strong>Conciencia:</strong> Identifica dificultades para escalar su negocio y aumentar su base de clientes.
          Detecta ineficiencias en su estrategia de growth y adquisición de usuarios.
        </li>
        <li>
          <strong>Investigación:</strong> Explora herramientas de automatización y metodologías de
          growth hacking. XOPE.io aparece en foros especializados y redes profesionales.
        </li>
        <li>
          <strong>Consideración:</strong> Evalúa el contenido educativo y los estudios de caso de XOPE.io.
          Participa en webinars y prueba una demo de los servicios ofrecidos.
        </li>
        <li>
          <strong>Decisión:</strong> Se suscribe a una consultoría inicial y adopta herramientas de
          automatización. Implementa un MVP de validación de producto con XOPE.io.
        </li>
        <li>
          <strong>Expansión y Retención:</strong> Mide el impacto positivo en sus métricas de crecimiento.
          Expande su uso de XOPE.io a nuevas áreas de su startup. Se convierte en un embajador de la marca,
          recomendando los servicios a su red.
        </li>
      </motion.ul>

      <Divider mb={8} />

      {/* Sección 6 */}
      <MotionHeading
        as="h2"
        size="md"
        mt={8}
        mb={3}
        color="teal.700"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        6. Conclusión
      </MotionHeading>

      <MotionText
        mb={4}
        lineHeight="tall"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        El panorama de las startups tecnológicas exige una combinación de{" "}
        <strong>automatización, estrategias de crecimiento eficientes y validación estructurada de productos</strong>.
        XOPE.io ofrece una propuesta de valor única al unir estos tres pilares fundamentales,
        brindando a las startups una plataforma escalable que optimiza la adquisición y retención de
        clientes.
      </MotionText>

      <MotionText
        mb={6}
        lineHeight="tall"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        A través de metodologías basadas en datos, XOPE.io proporciona soluciones innovadoras que
        permiten un crecimiento sostenible y acelerado, convirtiéndose en un aliado estratégico para
        empresas que buscan escalar con eficiencia y precisión.
      </MotionText>

      <Divider />
    </MotionBox>
  );
}
