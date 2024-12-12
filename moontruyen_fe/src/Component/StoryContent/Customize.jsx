import React, { useState } from 'react'
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {  Divider, FormControl,  MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { motion } from "framer-motion";

export const Customize = ({ setFontFamily, setFontSize }) => {
    const [open, setOpen] = useState(false);
    const [selectedFontFamily, setSelectedFontFamily] = useState("Arial");
  const [selectedFontSize, setSelectedFontSize] = useState("16px");
  const handleFontFamilyChange = (event) => {
    const newFontFamily = event.target.value;
    setSelectedFontFamily(newFontFamily);
    setFontFamily(newFontFamily);
  };

  const handleFontSizeChange = (event) => {
    const newFontSize = event.target.value;
    setSelectedFontSize(newFontSize);
    setFontSize(newFontSize);
  };

    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    const menuDrawer = {
      enter: {
        opacity: 1,
        visibility: "visible",
        transition: { duration: 0.7 },
      },
      exit: {
        opacity: 0,
        visibility: "hidden",
        transition: { duration: 0.3 },
      },
    };
  return (
    <div className="flex flex-col justify-center items-center">
    <div
      className="cursor-pointer relative w-[15rem] bg-[#67e8f9] text-white px-3 pt-2 hover:bg-[#19b9ce]"
      onClick={toggleDrawer}
    >
      <div className="pb-2">
        <SettingsIcon className="mr-1" fontSize="small" />
        Tùy chỉnh
        <ArrowDropDownIcon
          className={`mr-2 transition-transform ${
            open ? "rotate-180" : ""
          }
        absolute right-0
        `}
        />
      </div>
    </div>
    <div>
      {open && (
        <motion.div
          className="w-[15rem] bg-cyan-200  text-sm"
          initial="exit"
          animate={open ? "enter" : "exit"}
          variants={menuDrawer}
        >
          <Divider sx={{ borderColor: "white" }} />
          <div className="flex flex-rol">
            <span className="flex items-center pl-1">Font chữ</span>
            <FormControl sx={{ m: 1, minWidth: 162 }} size="small">
              <Select
            value={selectedFontFamily}
            onChange={handleFontFamilyChange}
                sx={{
                  fontSize: "small",
                }}
              >
                 <MenuItem value="Arial">Arial</MenuItem>
                <MenuItem value="Roboto">Roboto</MenuItem>
                <MenuItem value="Segoe UI">Segoe UI</MenuItem>
                <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                <MenuItem value="Verdana">Verdana</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex flex-rol">
            <span className="flex items-center pl-1">Size chữ</span>
            <FormControl sx={{ m: 1, minWidth: 162 }} size="small">
              <Select
                   value={selectedFontSize}
                   onChange={handleFontSizeChange}
                sx={{
                  fontSize: "small",
                }}
              >
               <MenuItem value="14px">14</MenuItem>
                <MenuItem value="16px">16</MenuItem>
                <MenuItem value="18px">18</MenuItem>
                <MenuItem value="20px">20</MenuItem>
                <MenuItem value="22px">22</MenuItem>
              </Select>
            </FormControl>
          </div>
        </motion.div>
      )}
    </div>
  </div>
  )
}
