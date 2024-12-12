import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { Button, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";

const SwiperSlideItem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const content = [
    {
      name: "Tên 1",
      image: "https://truyenhdt.com/wp-content/uploads/2024/09/11690305.jpg",
      nd: "Demo nội dung 1",
    },
    {
      name: "Tên 2",
      image: "https://truyenhdt.com/wp-content/uploads/2024/09/11690305.jpg",
      nd: "Demo nội dung 2",
    },
    {
      name: "Tên 3",
      image: "https://truyenhdt.com/wp-content/uploads/2024/09/11690305.jpg",
      nd: "Demo nội dung 3",
    },
    {
      name: "Tên 4",
      image: "https://truyenhdt.com/wp-content/uploads/2024/09/11690305.jpg",
      nd: "Demo nội dung 4",
    },
    {
      name: "Tên 5",
      image: "https://truyenhdt.com/wp-content/uploads/2024/09/11690305.jpg",
      nd: "Demo nội dung 5",
    },
    {
      name: "Tên 6",
      image: "https://truyenhdt.com/wp-content/uploads/2024/09/11690305.jpg",
      nd: "Demo nội dung 6",
    },
    {
      name: "Tên 7",
      image: "https://truyenhdt.com/wp-content/uploads/2024/09/11690305.jpg",
      nd: "Demo nội dung 6",
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "FFFFFF",
    backgroundColor: "#73e3f1",
    "&:hover": {
      backgroundColor: "#19b9ce",
    },
  }));
  const isLargeScreen = useMediaQuery("(min-width:1024px)");
  return (
    <div className="w-full h-full ">
      <div className="px-4 py-2 flex w-full pt-10 ">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 400,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="px-4 relative w-[55%]  h-full "
          onSlideChange={handleSlideChange}
        >
          {content.map((item, index) => (
            <SwiperSlide
            key={index}
            style={{ width: "240px", height: "350px" }}
            className="mb-24 bg-white rounded-lg shadow-md border-teal-100"
          >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-[40%] pl-8 flex flex-col mt-5">
          <div className="text-xl lg:text-3xl font-semibold mb-5 dark:text-gray-800">
            {content[currentIndex].name}
          </div>
          <div className="text-sm font-thin lg:text-base text-gray-500 dark:text-gray-200 italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            animi, natus sit, itaque quo quasi officia culpa cumque modi
            veritatis quis omnis in quae cupiditate sequi pariatur.
            Reprehenderit, eligendi laboriosam?
          </div>
          <div className="mt-auto mb-3">
            <ColorButton
              variant="contained"
              className="flex items-center justify-center"
              sx={{
                fontSize: isLargeScreen ? "16px" : "10px",
                padding: isLargeScreen ? "8px 16px" : "4px 8px",
                height: isLargeScreen ? "3rem" : "2rem",
                minWidth: isLargeScreen ? "7rem" : "5rem",
              }}
            >
              <PlayCircleOutlineIcon
                sx={{
                  fontSize: isLargeScreen ? "20px" : "14px",
                  marginRight: "4px",
                }}
              />
              Đọc truyện
            </ColorButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlideItem;
