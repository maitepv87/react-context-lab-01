import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NavigationProvider } from "./context/navigate.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
);
