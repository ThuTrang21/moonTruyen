import React, { useState } from "react";
import StoryCard from "../Story/StoryCard";
import { useNavigate } from "react-router-dom";

const NewAndFullStory = () => {
  // const navigate=useNavigate();
  const [activeTab, setActiveTab] = useState("new");
  const [showAll, setShowAll] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowAll(false); 
  };

  const newStories = Array(12).fill(1); 
  const fullStories = Array(7).fill(1); 


  const storiesToShow = activeTab === "new" ? newStories : fullStories;
  const displayStories = storiesToShow.slice(0, 12);
  // const handleSeeMore = () => {
  //   if (activeTab === "new") {
  //     navigate("/"); 
  //   } else {
  //     navigate("/"); 
  //   }
  // };
  return (
    <div className="px-6">
      <div className="flex justify-start space-x-4">
        <button
          onClick={() => handleTabChange("new")}
          className={`px-4 py-2 text-base rounded ${
            activeTab === "new"
              ? "bg-cyan-300 text-white"
              : "bg-gray-100 text-gray-700 dark:bg-gray-500 dark:text-white"
          }`}
        >
          Mới Cập Nhật
        </button>
        <button
          onClick={() => handleTabChange("full")}
          className={`px-3 py-2 text-base rounded ${
            activeTab === "full"
              ? "bg-cyan-300 text-white"
              : "bg-gray-100 text-gray-700 dark:bg-gray-500 dark:text-white"
          }`}
        >
          Truyện Full
        </button>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-start gap-3 ">
        {activeTab === "new"
          ? displayStories.map((item) => <StoryCard />)
          : displayStories.map((item) => <StoryCard />)}
      </div>
      {storiesToShow.length >= 12 && !showAll && (
        <div className="flex justify-center mt-4 mr-[2rem]">
          <button
            // onClick={() => handleSeeMore()}
            className="px-4 py-2 bg-cyan-300 text-white rounded"
          >
            Xem Thêm
          </button>
        </div>
      )}
    </div>
  );
};

export default NewAndFullStory;
