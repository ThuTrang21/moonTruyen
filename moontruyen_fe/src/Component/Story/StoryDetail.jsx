import React from "react";
import InforStory from "./InforStory";
import TopStory from "../Home/TopStory";
import ChapterList from "./ChapterList";
import CommentStory from "./CommentStory";
export const StoryDetail = () => {
  return (
    <div className="flex py-5 dark:text-white">
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

          <CommentStory/>
        </div>
      </section>
      <section className="w-[24%] hidden lg:block pr-1">
        <TopStory />
      </section>
    </div>
  );
};
