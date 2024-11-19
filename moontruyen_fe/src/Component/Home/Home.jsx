import React from "react";
import SwiperSlideItem from "./SwiperSlideItem";
import NewAndFullStory from "./NewAndFullStory";
import TopStory from "./TopStory";
import RecommendedStories from "./RecommendedStories";
import UpStory from "./UpStory";

const Home = () => {
  return (
    <div className=" flex flex-col dark:text-white">
      <section className="shadow-lg">
        <SwiperSlideItem />
      </section>
      <section className=" flex flex-wrap p-10 lg:py-10 lg:px-20 pt-10 ">
        <div className="w-full lg:w-[70%]">
          <div className="shadow-md mr-3 pb-7 pt-5">
            <NewAndFullStory />
          </div>
        </div>
        <div className="w-[30%] hidden lg:block">
          <div>
            <UpStory />
          </div>
          <div className="shadow-lg">
            <TopStory />
          </div>
        </div>
        <div className="shadow-inner mt-3">
          <RecommendedStories />
        </div>
      </section>
    </div>
  );
};

export default Home;
