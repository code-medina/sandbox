import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { CarritoProvider } from "./contexts/CarritoProvider.tsx";
import { AuthProvider } from "./contexts/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <CarritoProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </CarritoProvider>
    </AuthProvider>
  </BrowserRouter>,
);
