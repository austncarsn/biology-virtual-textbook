
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  // Global design tokens and background overrides (loaded after Tailwind-generated index.css
  // so these custom properties take precedence where needed)
  import "./styles/globals.css";

  createRoot(document.getElementById("root")!).render(<App />);
  