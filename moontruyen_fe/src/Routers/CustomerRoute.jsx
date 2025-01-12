import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { StoryDetail } from "../Component/Story/StoryDetail";
import { Navbar } from "../Component/Navbar/Navbar";
import Home from "../Component/Home/Home";
import Footer from "../Component/Footer/Footer";
import { StoryContent } from "../Component/StoryContent/StoryContent";
import { Auth } from "../Component/Auth/Auth";
import { Profile } from "../Component/Profile/Profile";

const CustomerRoute = ({ theme, setTheme }) => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="container p-0 bg-gray-100 dark:bg-gray-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:register" element={<Home />} />
            <Route path="/title" element={<StoryDetail />} />
            <Route path="/title/chap/chuong" element={<StoryContent />} />
            <Route path="/account/*" element={<Profile />} />
          </Routes>
        </div>
        <Auth />
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoute;
