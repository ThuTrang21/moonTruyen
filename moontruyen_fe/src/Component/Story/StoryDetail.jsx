import React from "react";
import InforStory from "./InforStory";
import TopStory from "../Home/TopStory";
import ChapterList from "./ChapterList";
import CommentStory from "./CommentStory";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from '@mui/icons-material/Home';

export const StoryDetail = () => {
  return (
    <div className="flex flex-col dark:text-white">
      <section className="bg-cyan-50 dark:bg-slate-400">
        <div className="py-1 px-10 shadow-md">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
             <HomeIcon className="mb-1 mr-1" fontSize="small"/>Home
            </Link>
            <Typography sx={{ color: "text.primary" }}>
              Xuyên thành bạch nguyệt quang
            </Typography>
          </Breadcrumbs>
        </div>
      </section>
      <section className="flex flex-row py-5">
        <section className="w-full lg:w-[76%] px-7">
          <div>
            <div className="border-b-[1px] border-gray-300 relative h-[1.5rem] lg:h-[2.6rem]">
              <p
                className="absolute -bottom-[1px]
          border-b-[1px] border-gray-400 w-[12rem] px-3 py-2 "
              >
                THÔNG TIN TRUYỆN
              </p>
            </div>

            <InforStory />
          </div>
          <div className="pt-10 pb-5">
            <div className="border-b-[1px] border-gray-300 relative h-[2.6rem]">
              <p
                className="absolute -bottom-[1px]
          border-b-[1px] border-gray-400 w-[12.5rem] px-3"
              >
                DANH SÁCH CHƯƠNG
              </p>
            </div>

            <ChapterList />
          </div>
          <div>
            <div className="border-b-[1px] border-gray-300 relative h-[2.6rem]">
              <p
                className="absolute -bottom-[1px]
          border-b-[1px] border-gray-400 w-[12.5rem] px-3"
              >
                BÌNH LUẬN
              </p>
            </div>

            <CommentStory />
          </div>
        </section>
        <section className="w-[24%] hidden lg:block pr-1">
          <TopStory />
        </section>
      </section>
    </div>
  );
};
