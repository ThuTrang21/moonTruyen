import { Card, Chip } from "@mui/material";
import React from "react";

const StoryCard = () => {
  return (
    <Card className="w-[7rem] lg:w-[10rem] cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg will-change-transform">
      <div className="relative">
        <img
          className="w-full lg:h-[16rem] rounded-t-md object-cover"
          src="https://lh3.googleusercontent.com/pw/AP1GczMAeocKkWUMaoJ-WMXUWFCp54t6_7uuhmJlitkppdb8R5fhtEFrvNEMuUO2aldwUqKS1i42HV5qmYFarncxH4CoEYk0KOBOfuZYokHdt-2VcTKYu1A-rT0fFmQ_WXshUxbcGYTM9QCkhwsmnQEgRdj9=w215-h322-s-no-gm?authuser=4"
          alt=""
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "Full" : "Hot"}
        />
        <div className="bg-gray-700 bg-opacity-50 absolute bottom-0">
          <p className="font-semibold text-white text-center text-[12px]">
            Xuyên thành bạch nguyệt quang
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StoryCard;
