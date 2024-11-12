import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";

const DesktopMenu = ({ link, isOpen, onToggle }) => {
  const hasSubMenu = link?.subMenu?.length > 0;

  return (
    <li className="pt-1 relative">
      <span
        onClick={onToggle}
        className="flex items-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:text-white"
      >
        {link.name}
        {hasSubMenu && (
          <ArrowDropDownIcon
            className={`mt-[0.6px] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </span>

      {hasSubMenu && isOpen && (
  <div
    className={`absolute left-0 top-full mt-3 bg-white rounded-[8px] z-10 py-2 shadow-lg w-max ${
      link.name === "Thể loại" ? "p-4" : ""
    }`}
  >
    <div
      className={`grid 
        ${
          link.gridCols === 1
          ? "grid-cols-1"
          : "grid-cols-0"}
           
           
        ${link.name === "Thể loại" ? "grid-cols-4 gap-6" : ""}`}
    >
      {link.subMenu.map((subMenu, i) => (
        <div
          key={i}
          className="relative hover:cursor-pointer hover:bg-gray-100 px-5"
        >
          <div className="p-2 flex items-center gap-x-4">
            {subMenu.icon && (
              <IconButton className="text-gray-500 w-fit duration-300" >{subMenu.icon}</IconButton>
            )}
            <span className="text-gray-700">{subMenu.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

    </li>
  );
};

export default DesktopMenu;
