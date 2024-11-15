import React from "react";
import SwiperSlideItem from "./SwiperSlideItem";
import NewAndFullStory from "./NewAndFullStory";
import TopStory from "./TopStory";
import RecommendedStories from "./RecommendedStories";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className=" flex flex-col dark:text-white">
      <section className="shadow-lg">
        <SwiperSlideItem />
      </section>
      <section className=" flex flex-wrap p-10 lg:py-10 lg:px-20 pt-10 ">
        <div className="w-full lg:w-[70%] flex flex-col">
          <div>
            <NewAndFullStory />
          </div>
          <div>
            <RecommendedStories />
          </div>
        </div>
        <div className="w-[30%] hidden lg:block">
          <TopStory />
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default Home;
