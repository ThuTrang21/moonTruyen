import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { Customize } from "./Customize";
import { ButtonBN } from "./ButtonBN";
import imgTop from "../../assets/img2.png";
import imgBot from "../../assets/img1.png";
const storyText = `
Ôn Diệp càng cảm thấy hứng thú hơn, vội nói: "Cho người khiêng vào."
Mấy gã sai vặt chỉ có thể đứng chờ bên ngoài viện, quãng đường từ cửa viện đến nội thất chỉ có thể để bọn nha hoàn hợp sức nâng. 
Chờ đến khi rương đã được khiêng vào phòng, Liễu Nha phất tay cho bọn nha hoàn lui xuống, rồi lần nữa đóng cửa nội thất lại. 
Hai chiếc rương rất nặng, so với rương gỗ đựng sách mà Ôn Diệp tặng cho Từ Cảnh Dung phải to gấp mấy lần. 
Ôn Diệp: "Mau mở ra." 
Liễu Nha và Liễu Tâm nghe vậy lập tức đi qua, mỗi người mở một rương. 
Ba chủ tớ ở một bên nhìn, đặc biệt là Ôn Diệp và Đào Chi, chờ mong trong mắt có muốn ngăn cũng ngăn không được. 
Cả hai chiếc rương đều bị khóa lại, nhưng lúc Liễu Nha và Liễu Tâm qua đây đã mang theo chìa khóa. 
Theo nắp rương từ từ mở ra, ánh mắt của Ôn Diệp cũng bám sát không rời. 
Kết quả là cái gì. 
Thế mà lại là hai rương tranh cuộn đầy ắp!
...
Vân Chi thấy dáng vẻ tức giận bừng bừng của nàng thì an ủi: "Được rồi, nhanh xếp cho xong, chờ lát nữa còn phải hầu hạ phu nhân tắm rửa nữa đấy." 
Đào Chi thở dài thườn thượt, tốc độ trên tay càng nhanh hơn. 
Lúc nàng ấy cầm đến sách ở tầng thứ hai từ dưới lên thì không khỏi kinh hô ra tiếng, vội vã lôi kéo người bên cạnh: "Vân Chi, ngươi nhìn này!"
`;
export const StoryContent = () => {
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px");

  return (
    <div>
      <div className="py-1 px-10 shadow-md bg-cyan-50 dark:bg-slate-400">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            <HomeIcon className="mb-1 mr-1" fontSize="small" />
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/title">
            Xuyên thành bạch nguyệt quang
          </Link>
          <Typography sx={{ color: "text.primary" }}>Chương 1</Typography>
        </Breadcrumbs>
      </div>
      <div className="py-5 dark:text-white">
        <div className=" flex flex-col items-center ">
          <p className=" text-2xl uppercase font-semibold text-center">
            Xuyên thành bạch nguyệt quang
          </p>
          <span className="py-2">Chương 1</span>
          <img src={imgTop} alt="" 
          className="w-28 dark:hidden"
          />
        </div>
        <ButtonBN />
        <Customize setFontFamily={setFontFamily} setFontSize={setFontSize}/>
        <div className=" flex justify-center items-center pt-3 dark:hidden">
        <img src={imgBot} alt=""    className="w-64"/>
        </div>


        <div className="flex justify-center bg-slate-300 mx-10 shadow-md bg-opacity-5 dark:my-10 px-5 py-3">
          <pre className="whitespace-normal break-words overflow-auto max-w-full text-justify"
          style={{
            fontFamily:fontFamily,
            fontSize:fontSize
          }}
          >
            {storyText.split("\n").map((line, index) => (
              <span>
                {" "}
                <p key={index}>{line}</p>
                <br />
              </span>
            ))}
          </pre>
        </div>
        <div className=" flex justify-center items-center pt-7 dark:hidden">
        <img src={imgBot} alt=""    className="w-64"/>
        </div>
        <ButtonBN />
      </div>
    </div>
  );
};
