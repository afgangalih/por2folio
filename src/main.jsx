import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "remixicon/fonts/remixicon.css";

AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

import { LanguageProvider } from "./context/LanguageContext.jsx";

const Root = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);