import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { ThemeWrapper } from "./contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeWrapper>
      <Router>
        <App />
      </Router>
    </ThemeWrapper>
  </StrictMode>
);
