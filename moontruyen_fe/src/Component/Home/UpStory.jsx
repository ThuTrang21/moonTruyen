import { Badge, Button, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import arrow from "../../assets/arrow2.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";

const UpStory = () => {
  return (
    <div className="flex flex-col pb-10 shadow-md mb-10">
      <Button
        className="w-full font"
        sx={{ paddingY: "15px", fontWeight: "semibold", fontSize: "1rem" }}
      >
        <AddCircleOutlineIcon className="mr-2 " />
        Đăng Truyện
      </Button>
      <div className="relative">
        <p className="text-center text-lg py-5">Bạn muốn đăng truyện?</p>
        <img
          src={arrow}
          alt=""
          className="w-[2.3rem] absolute right-9 -top-[2rem]"
        />
      </div>
      <div className="flex flex-wrap justify-center py-6 ">
        <Badge
          color="primary"
          badgeContent={3}
          className="transition-transform transform hover:scale-110 cursor-pointer"
        >
          <div className="flex flex-col gap-2 items-center ">
            <button className="border-[1px] border-cyan-300 bg-gray-200 p-3 rounded-md dark:border-none">
              <RemoveRedEyeIcon className="dark:text-gray-600" />
            </button>
            <p>Đã Đọc</p>
          </div>
        </Badge>
        <Badge
          color="primary"
          badgeContent={3}
          className="transition-transform transform hover:scale-110 cursor-pointer"
          sx={{
            "& .MuiBadge-badge": {
              transform: "translate(0%, -50%)",
            },
            paddingLeft: "1.5rem",
          }}
        >
          <div className="flex flex-col gap-2 items-center">
            <button className="border-[1px] border-cyan-300 bg-gray-200 p-3  rounded-md dark:border-none">
              <BookmarkIcon className="dark:text-gray-600" />
            </button>
            <p>Bookmark</p>
          </div>
        </Badge>
        <div className="flex flex-col gap-2  items-center transition-transform transform hover:scale-110 cursor-pointer pl-3">
          <button className="border-[1px] border-cyan-300 bg-gray-200 p-3 rounded-md dark:border-none">
            <PersonIcon className="dark:text-gray-600" />
          </button>
          <p>Tài Khoản</p>
        </div>
      </div>
    </div>
  );
};

export default UpStory;
