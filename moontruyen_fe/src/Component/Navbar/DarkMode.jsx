import React, { useEffect, useState } from "react";
import DarkPng from "../../assets/dark-mode.png";
import LightPng from "../../assets/light-mode.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative">
      {theme === "light" ? (
        <img
          src={LightPng}
          alt="Light Mode"
          className="w-16 pt-1 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
          onClick={toggleTheme}
        />
      ) : (
        <img
          src={DarkPng}
          alt="Dark Mode"
          className="w-16 pt-1 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};

export default DarkMode;
