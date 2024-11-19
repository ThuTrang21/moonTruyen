import React from "react";
import logo from "../../assets/logoMini.png";
import logoLight from "../../assets/logoMiniLight.png";
import fb from "../../assets/Facebook_Logo_2023.png";
import ins from "../../assets/Instagram_logo.png";
import ytb from "../../assets/Youtube_logo.png";

const Footer = () => {
  return (
    <div className="container flex flex-col px-0 dark:text-white">
      <div className="top pt-[30px] py-3 bg-primary dark:bg-gray-800 px-5 flex flex-col lg:flex-row justify-between gap-7">
        <div className="flex gap-10">
          <div>
            <span className="uppercase font-bold">Thông tin về chúng tôi</span>
            <img
              width="80px"
              height="80px"
              src={logo}
              alt="logo"
              className="dark:hidden"
            />
            <img
              width="80px"
              height="80px"
              src={logoLight}
              alt="logo"
              className="hidden  dark:block"
            />
            <p className=" pt-[10px]">
              Website MoonTruyen
              <br />
              Khám phá tri thức, mở rộng tâm hồn <br />
              với truyện trực tuyến!
            </p>
          </div>
          <div className="lg:hidden">
            <span className="uppercase font-bold">Kết nối với chúng tôi</span>
            <div className="pt-[14px] flex gap-3">
              <img width="30" src={fb} alt="" />
              <img width="30" src={ins} alt="" />
              <img width="30" height="24" src={ytb} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-24">
          <div>
            <span className="uppercase  font-bold">Hỗ trợ khách hàng</span>
            <p className=" pt-[14px]">Liên hệ góp ý</p>
          </div>

          <div>
            <span className="uppercase font-bold">Liên hệ</span>
            <p className="pt-[14px] ">
              Email: moontruyenstories@gmail.com <br />
              <br />
              Điện thoại: 0328 426 688
              <br />
              <br />
              Giờ làm việc: 7h00 - 17h00
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <span className="uppercase font-bold">Kết nối với chúng tôi</span>
          <div className="pt-[14px] flex gap-3">
            <img width="30" src={fb} alt="" />
            <img width="30" src={ins} alt="" />
            <img width="30" height="24" src={ytb} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="bottom py-3 px-6 bg-[#23c2d6] dark:bg-black">
          <p className="font-bold ">Copyright © 2024 MOONTRUYEN</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
