import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
const menu = [
  { title: "Quản lý tài khoản", icon: <PersonIcon />, url: "profile" },
  { title: "Tủ sách cá nhân", icon: <LibraryBooksIcon />, url: "library" },
  { title: "Lịch sử giao dịch", icon: <HistoryIcon />, url: "history" },
  { title: "Đăng xuất", icon: <LogoutIcon /> },
];

const ProfileNavigation = () => {
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    if (item.title === "Đăng xuất") {
      navigate("/");
    } else {
      navigate(`/account/${item.url}`);
    }
  };
  return (
    <div className="lg:px-4">
      <div className="flex flex-rol justify-center border-b-[1px] border-gray-400 py-5">
        <img
          src="https://down-vn.img.susercontent.com/file/2258ea71783dd3f4d5e729437f24c406_tn"
          alt=""
          className="rounded-full w-[4.7rem]"
        />
        <div className="flex flex-col items-center justify-center px-3">
          <p className="font-bold">User name</p>
          <span className="text-gray-400 text-xs">
            <EditIcon fontSize="small" />
            Sửa Hồ Sơ
          </span>
        </div>
      </div>
      <div className="py-5 flex flex-col gap-4">
        {menu.map((item, i) => (
          <button
            className="bg-gray-200 p-2 w-full rounded-3xl font-semibold  transition-transform transform hover:scale-105  will-change-transform dark:bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-300"
            onClick={() => handleNavigate(item)}
          >
            <IconButton className="text-sm" size="small">
              {item.icon}
            </IconButton>
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileNavigation;
