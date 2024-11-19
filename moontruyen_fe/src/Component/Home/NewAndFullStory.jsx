import React, { useState } from "react";
import StoryCard from "../Story/StoryCard";
import { useNavigate } from "react-router-dom";
import { Button, useMediaQuery } from "@mui/material";

const NewAndFullStory = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [showAll, setShowAll] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowAll(false); 
  };

  const newStories = Array(16).fill(1); 
  const fullStories = Array(7).fill(1); 


  const storiesToShow = activeTab === "new" ? newStories : fullStories;
  const displayStories = storiesToShow.slice(0, 16);

  const isLargeScreen = useMediaQuery("(min-width:1024px)");

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
      <div className="mt-6 flex pl-5 flex-wrap items-center justify-start gap-3 ">
        {activeTab === "new"
          ? displayStories.map((item) => <StoryCard />)
          : displayStories.map((item) => <StoryCard />)}
      </div>
      {storiesToShow.length >= 16 && !showAll && (
        <div className="flex justify-center mt-4">
          <Button
              variant="contained"
              className="flex items-center justify-center "
              sx={{
                fontSize: isLargeScreen ? "14px" : "10px",
                padding: isLargeScreen ? "4px 8px" : "4px 8px",
                height: isLargeScreen ? "2.5rem" : "2rem",
                minWidth: isLargeScreen ? "7rem" : "5rem",
              }}
            >
              Xem Thêm
            </Button>
        </div>
      )}
    </div>
  );
};

export default NewAndFullStory;
