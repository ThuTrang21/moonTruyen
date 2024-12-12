import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { lightTheme } from "./Theme/lightTheme";
import { darkTheme } from "./Theme/darkTheme";
import CustomerRoute from "./Routers/CustomerRoute";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    return savedTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <CustomerRoute theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
