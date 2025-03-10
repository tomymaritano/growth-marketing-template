// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarLayout from "../components/SidebarLayout";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/homepage";
import XopePage from "./pages/entrega1";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        {/* El Layout con el sidebar */}
        <SidebarLayout>
          {/* Dentro del layout, definimos rutas */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/entrega1" element={<XopePage />} />
            {/* <Route path="/entrega2" element={<Entrega2 />} /> */}
            {/* etc */}
          </Routes>
        </SidebarLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;