import { Button, FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


export const ButtonBN = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const [chapter, setChapter] = useState("1");

  const handleChange = (event) => {
    setChapter(event.target.value);
  };
  return (
    <div className="flex justify-center gap-5 py-5">
      <Button
        sx={{
          fontSize: "1rem",
          paddingX: "2rem",
        }}
      >
        <ChevronLeftIcon />
        Ch.Trước
      </Button>

      {!clicked ? (
        <Button
          sx={{
            fontSize: "1rem",
          }}
          onClick={handleClick}
        >
          <ListAltIcon />
        </Button>
      ) : (
        <FormControl sx={{ minWidth: 200, border: 0 }} size="small">
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={chapter}
            onChange={handleChange}
            sx={{
              bgcolor: "#67e8f9",
              margin: 0,
              color: "#ffffff",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
         
            <MenuItem value={1}>Chương 1</MenuItem>
            <MenuItem value={2}>Chương 2</MenuItem>
            <MenuItem value={3}>Chương 3</MenuItem>
            <MenuItem value={4}>Chương 4</MenuItem>
            <MenuItem value={5}>Chương 5</MenuItem>
          </Select>
        </FormControl>
      )}

      <Button
        sx={{
          fontSize: "1rem",
          paddingX: "2rem",
        }}
      >
        Ch.Tiếp
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
