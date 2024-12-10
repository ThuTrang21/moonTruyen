import React from "react";
import DarkPng from "../../assets/dark-mode.png";
import LightPng from "../../assets/light-mode.png";

const DarkMode = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme); // Cập nhật theme ngay lập tức
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
