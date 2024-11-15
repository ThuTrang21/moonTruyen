import React from "react";
import StoryCard from "../Story/StoryCard";

const RecommendedStories = () => {
  const rcmStories=Array(8).fill(1); 
  const displayStories = rcmStories.slice(0, 6);
  return (
    <div className="px-9 py-5">
    
        <p className="px-3 py-1 text-base  text-gray-500  border-l-[5px] border-x-cyan-400 dark:text-white">
          Truyện Đề Cử
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-start gap-3 ">
          {displayStories.map((item)=><StoryCard/>)}
          </div>
    </div>
  );
};

export default RecommendedStories;
