// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarLayout from "../components/SidebarLayout";
import App from './App'
// Opcional: si tienes un theme minimalista
import theme from "../components/theme";

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SidebarLayout>
        <App />
      </SidebarLayout>
    </ChakraProvider>
  </React.StrictMode>
);