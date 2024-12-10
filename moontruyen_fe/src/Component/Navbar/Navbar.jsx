import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import logoLight from "../../assets/logoLight.png";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import TranslateIcon from "@mui/icons-material/Translate";

import DesktopMenu from "./DesktopMenu";
import PersonIcon from "@mui/icons-material/Person";
import { MobMenu } from "./MobMenu";
import DarkMode from "./DarkMode";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const navbarRef = useRef(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup khi component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const links = [
    {
      name: "Danh sách",
      subMenu: [
        { name: "Tìm kiếm nâng cao", icon: <SearchIcon /> },
        { name: "Truyện sáng tác", icon: <EditIcon /> },
        { name: "Truyện Dịch/Edit", icon: <TranslateIcon /> },
      ],
    },
    {
      name: "Thể loại",
      subMenu: [
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách Hợp" },
        { name: "Bách" },
      ],
    },
    {
      name: "Phân loại theo chương",
      subMenu: [
        { name: "Dưới 100 chương" },
        { name: "100 - 500 chương" },
        { name: "500 - 1000 chương" },
        { name: "Trên 1000 chương" },
      ],
    },
  ];
  return (
    <div
      ref={navbarRef}
      className="relative py-5 bg-primary flex items-center h-16 inset-0 dark:bg-black dark:text-white duration-200"
    >
      <div className="px-3.5 flex items-center mx-auto w-full max-w-7xl">
        <div className="flex items-center gap-x-3 z-[999] relative">
          <img
            src={logo}
            alt=""
            className="w-44 sm:cursor-pointer dark:hidden"
            onClick={() => navigate("/")}
          />
          <img
            src={logoLight}
            alt=""
            className="w-44 sm:cursor-pointer hidden dark:block"
            onClick={() => navigate("/")}
          />
        </div>

        {/* menu */}
        {/* Desktop */}
        <ul className="lg:flex hidden items-center sm:flex-row flex-col gap-x-1">
          {links.map((link, index) => (
            <DesktopMenu
              key={index}
              link={link}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </ul>

        {/* navbar right */}
        <div className="flex items-center gap-x-5 z-[999] relative ml-auto ">
          <div className="hidden sm:block group mr-10 relative">
            <input
              type="text"
              placeholder="Nhập Tên Truyện..."
              className="dark:text-black w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:border-1 focus:border-blue-400 pl-10"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon className="text-gray-500 group-hover:text-primary" />
            </div>
          </div>

          <div>
          <DarkMode theme={theme} setTheme={setTheme} />
          </div>
          {true ? (
            <Avatar
              onClick={() => navigate("/account/profile")}
              className="cursor-pointer"
              sizes="small"
            >
              <img src="https://down-vn.img.susercontent.com/file/2258ea71783dd3f4d5e729437f24c406_tn" alt="" />
            </Avatar>
          ) : (
            <IconButton
              onClick={() => navigate("/user/login")}
              className="cursor-pointer"
            >
              <PersonIcon
                className="dark:text-white"
                sx={{ fontSize: "33px" }}
              />
            </IconButton>
          )}
        </div>
      </div>
      <div className="lg:hidden z-10">
        <MobMenu links={links} />
      </div>
    </div>
  );
};
