import React from "react";

const TopStoryItem = () => {
  return (
    <div className="flex flex-wrap items-center py-3 transition-transform transform hover:scale-110  will-change-transform px-3 cursor-pointer">
      <div className="rounded-full bg-orange-300 p-[6px] px-3 text-white text-sm">
        1
      </div>
      <div className="flex flex-col px-4">
        <p >Vụng trộm không thể giấu</p>
        <p className="text-gray-500 dark:text-gray-300 text-sm">8.8M Lượt xem</p>
      </div>
    </div>
  );
};

export default TopStoryItem;
