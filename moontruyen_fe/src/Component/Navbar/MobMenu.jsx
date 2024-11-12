import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

export const MobMenu = ({ links }) => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  const menuDrawer = {
    enter: {
      opacity: 1,
      visibility: "visible",
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      visibility: "hidden",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div >
      <button onClick={toggleDrawer}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      <motion.div
        initial="exit"
        animate={open ? "enter" : "exit"}
        variants={menuDrawer}
        className="fixed left-0 right-0 top-16  overflow-y-auto bg-[#e8f9fb] backdrop-blur text-gray-500 p-6
        dark:bg-black dark:text-white"
        style={{
          maxHeight: "calc(100vh - 64px)",
        }}
      >
        <div className="pb-5">
          <ul>
            {links?.map(({ name, subMenu }, i) => {
              const hasSubMenu = subMenu?.length > 0;
              const isClicked = clicked === i;
              return (
                <li key={name}>
                  <span
                    className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {name}
                    {hasSubMenu && (
                      <ArrowDropDownIcon
                        className={`ml-auto ${isClicked && "rotate-180"}`}
                      />
                    )}
                  </span>
                  {hasSubMenu && (
                    <motion.ul
                      initial="exit"
                      animate={isClicked ? "enter" : "exit"}
                      variants={subMenuDrawer}
                      className="ml-7"
                    >
                      {subMenu?.map(({ name, icon }) => (
                        <li
                          key={name}
                          className="p-2 flex items-center hover:bg-white/5 rounded-md cursor-pointer gap-x-2"
                        >
                          <IconButton className=" dark:text-white" size="17"> {icon}</IconButton>
                          <span>{name}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-3 border-t-[1px] border-gray-600">
          <input
            type="text"
            placeholder="Nhập Tên Truyện..."
            className=" dark:text-black w-full group-hover:w-full transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:border-1 focus:border-blue-400"
          />
             <SearchIcon className="text-gray-500 group-hover:text-primary absolute right-3 -translate-x-5 translate-y-1"/>

        </div>
      </motion.div>
    </div>
  );
};
