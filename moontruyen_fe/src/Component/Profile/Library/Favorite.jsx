import { Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export const Favorite = () => {
  return (
    <div className="flex flex-wrap gap-7">
      {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
        <div
          key={index}
          className="w-[9rem] lg:w-[10rem] rounded-md cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 will-change-transform"
        >
          <div>
            <img
              className="w-full lg:h-[16rem] object-cover"
              src="https://lh3.googleusercontent.com/pw/AP1GczMAeocKkWUMaoJ-WMXUWFCp54t6_7uuhmJlitkppdb8R5fhtEFrvNEMuUO2aldwUqKS1i42HV5qmYFarncxH4CoEYk0KOBOfuZYokHdt-2VcTKYu1A-rT0fFmQ_WXshUxbcGYTM9QCkhwsmnQEgRdj9=w215-h322-s-no-gm?authuser=4"
              alt="Favorite"
            />

            <div className=" bottom-0  flex flex-row  shadow-md  py-3">
              <p className="font-medium pl-2 text-[14px] text-gray-600 dark:text-white">
                Xuyên thành bạch nguyệt quang
              </p>

              <div>
                <IconButton size="small" >
                  {true ? (
                    <FavoriteIcon fontSize="small" className="text-red-400"></FavoriteIcon>
                  ) : (
                    <FavoriteBorderIcon fontSize="small" ></FavoriteBorderIcon>
                  )}
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
