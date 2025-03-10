// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 1) Configuración del modo de color y breakpoints
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 2) Breakpoints recomendados (puedes ajustarlos según tu proyecto)
const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1536px",
};

// 3) Estilos globales: cuerpo, titulares, enlaces, etc.
const styles = {
  global: {
    "html, body": {
      bg: "white", // Blanco off-white, muy claro
      color: "#1F1F1F", // Texto principal en gris oscuro
      fontFamily: "'Noto Sans JP', sans-serif",
      lineHeight: "1.6",
      margin: 0,
      padding: 0,
    },
    "h1, h2, h3, h4, h5, h6": {
      fontWeight: "normal",
      color: "#2C2C2C",
      marginTop: "1em",
      marginBottom: "0.5em",
    },
    a: {
      color: "#C15E5C", // Rosado sutil (puedes ajustarlo)
      textDecoration: "none",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
};

// 4) Tipografías por defecto para <Heading> y <Text>
const fonts = {
  heading: "'Noto Sans JP', sans-serif",
  body: "'Noto Sans JP', sans-serif",
};

// 5) Espaciados base (opcional) — útil si quieres usar p={4}, p={5}, etc.
const space = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  // etc. según tus necesidades
};

// 6) Colores de marca (brand) y "accent" para un look minimalista + rosado
const colors = {
  brand: {
    50: "#FAF9F7",
    100: "#F2F1EE",
    200: "#EAE9E5",
    300: "#E2E1DD",
    400: "#DAD9D4",
    500: "#D2D1CC",
    600: "#A7A5A3",
    700: "#7C7A7A",
    800: "#525151",
    900: "#272727",
  },
  accent: {
    50: "#FEE7EA", // Un toque de rosa claro (Sakura)
    100: "#FDD0D5",
    200: "#FBB9BF",
    300: "#FAA2AA",
    400: "#F88B94",
    500: "#F7747F",
    600: "#C95C66",
    700: "#9B454E",
    800: "#6C2D35",
    900: "#3E161C",
  },
};

// 7) Overwrites a componentes específicos (botones, etc.)
const components = {
  Button: {
    baseStyle: {
      borderRadius: "0", // Sin curvatura para un aspecto minimal
      fontWeight: "normal",
    },
    variants: {
      solid: {
        bg: "accent.500",
        color: "white",
        _hover: {
          bg: "accent.600",
        },
      },
      outline: {
        borderColor: "accent.500",
        color: "accent.500",
        _hover: {
          bg: "accent.50",
        },
      },
    },
    defaultProps: {
      // Esto te permite no especificar colorScheme="accent" en cada Button
      colorScheme: "accent",
    },
  },
};

// 8) Extiende el tema con todas las secciones definidas arriba
const theme = extendTheme({
  config,
  breakpoints,
  styles,
  fonts,
  space,
  colors,
  components,
});

export default theme;