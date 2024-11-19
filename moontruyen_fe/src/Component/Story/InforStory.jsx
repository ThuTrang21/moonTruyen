import React, { useState } from "react";
import "./Story.css";
import { Box, Button, Chip, Rating } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const labels = {
  1: "Không còn gì để nói....",
  2: "Cái gì thế này",
  3: "Cực Tệ",
  4: "Tệ",
  5: "Tạm",
  6: "Được",
  7: "Cũng được",
  8: "Hay",
  9: "Đỉnh",
  10: "Tuyệt đỉnh!",
};

const getLabelText=(value)=> {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const theloai = ["a", "b", "c", "d", "e", "f", "g", "h"];

const InforStory = () => {
  const [value, setValue] = useState(8);
  const [hover, setHover] = useState(-1);
  const [showFullContent, setShowFullContent] = useState(false);

  const content =
    "Đây là một chuỗi rất dài mô phỏng nội dung để kiểm tra tính năng giới hạn nội dung. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi voluptas vel maiores numquam error ex in, vitae nulla repudiandae aliquid reiciendis odio cupiditate, praesentium dignissimos eaque, quos possimus dolores.";

  const limitedContent = (content) => {
    const maxLength = 300;

    if (content && content.length > maxLength) {
      return content.slice(0, maxLength) + "...";
    }
    return content;
  };

  const handleContentToggle = () => {
    setShowFullContent(!showFullContent);
  };
const handleGenre=()=>{

}
  return (
    <div>
      <div className="flex lg:hidden justify-center items-center h-[4rem]">
        <p className="text-2xl font-bold text-center">Xuyên thành bạch nguyệt quang</p>
      </div>
      <div className="flex flex-col sm:flex-row">
        {/* Phần ảnh và nút */}
        <div className="w-full sm:w-1/3">
          <div className="book-container flex flex-col pt-5 lg:pt-10">
            <div className="book">
              <img
                alt="Mi libro Nashe"
                src="https://lh3.googleusercontent.com/pw/AP1GczMAeocKkWUMaoJ-WMXUWFCp54t6_7uuhmJlitkppdb8R5fhtEFrvNEMuUO2aldwUqKS1i42HV5qmYFarncxH4CoEYk0KOBOfuZYokHdt-2VcTKYu1A-rT0fFmQ_WXshUxbcGYTM9QCkhwsmnQEgRdj9=w215-h322-s-no-gm?authuser=4"
              />
            </div>
            <div className="flex pt-10 gap-5">
              <Button>
                <PlayCircleIcon /> Đọc truyện
              </Button>
              <Button>
                <AddCircleIcon />
                Tủ truyện
              </Button>
            </div>
          </div>
        </div>

        {/* Phần thông tin */}
        <div className="w-full sm:w-2/3 pl-5">
          <div className="flex flex-col gap-2">
            <div className="justify-center hidden lg:block h-[3rem] py-5">
              <p className="text-2xl font-bold text-center">
                Xuyên thành bạch nguyệt quang
              </p>
            </div>

            {/* Đánh giá */}
            <div className="flex flex-col items-center pt-3">
              <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                max={10}
              />
              {value !== null && (
                <Box sx={{ mb: 1 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}

              <span className="italic">
                Đánh giá: <span className="font-bold">9.6</span>/10 từ{" "}
                <span className="font-bold">7</span> lượt
              </span>
            </div>

            {/* Bảng thông tin */}
            <fieldset className="shadow-lg border-[1px] border-primary p-4 rounded-md pr-0">
              <legend>Thông Tin</legend>
              <div className="pl-2 text-sm">
                <table className="text-gray-600 dark:text-white">
                  <tbody className="text-left">
                    <tr>
                      <th className="w-[8rem] pt-2 pb-1">
                        <ChevronRightIcon />
                        Tác Giả:
                      </th>
                      <td className="pt-2 pb-1">Cửu Nguyệt Hi</td>
                    </tr>
                    <tr>
                      <th className="pt-2 pb-1">
                        <ChevronRightIcon />
                        Tình trạng:
                      </th>
                      <td className="pt-2 pb-1">Hoàn thành</td>
                    </tr>
                    <tr>
                      <th className="align-top pt-2 pb-1">
                        <ChevronRightIcon />
                        Thể loại:
                      </th>
                      <td className="pt-2 pb-1 flex gap-3 flex-wrap">
                        {theloai.map((item, index) => (
                          <Chip
                            key={index}
                            label={item}
                            className="dark:text-white dark:bg-cyan-400 hover:dark:bg-cyan-800"
                          onClick={handleGenre}
                          />
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <th className="align-top pt-2 pb-1">
                        <ChevronRightIcon />
                        Giới thiệu:
                      </th>
                     
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mô tả */}
              <div className="mx-3 description">
                <p className="formatted-content py-2">
                  {showFullContent ? content : limitedContent(content)}
                </p>
                <div
                  className="flex justify-end relative group cursor-pointer px-2 py-1"
                  onClick={handleContentToggle}
                >
                  {showFullContent ? (
                    <span className="text-sm">
                      <KeyboardDoubleArrowLeftIcon /> Rút gọn
                    </span>
                  ) : (
                    <span className="text-sm">
                      Xem Thêm <KeyboardDoubleArrowRightIcon />
                    </span>
                  )}
                  {/* Border dưới */}
                  {showFullContent ? (
                    <div className="absolute right-0 bottom-0 h-[2px] w-0 bg-cyan-300 group-hover:w-[6rem] transition-all duration-300"></div>
                  ) : (
                    <div className="absolute left-[24.5rem] lg:left-[26.8rem] bottom-0 h-[2px] w-0 bg-cyan-300 group-hover:w-[7rem] transition-all duration-300"></div>
                  )}
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforStory;
