import React from "react";
import ProfileNavigation from "./ProfileNavigation";
import { Route, Routes } from "react-router-dom";
import History from "./History/History";
import Library from "./Library/Library";
import UserProfile from "./UserProfile/UserProfile";

export const Profile = () => {
  return (
    <div className="flex py-10">
      <section className="w-[35%] border-r-[1px] border-gray-400 px-3">
        <ProfileNavigation />
      </section>
      <section className="w-[65%] pt-6 px-5 dark:text-white">
        <Routes>
          <Route path="/profile/*" element={<UserProfile />} />
          <Route path="/library/*" element={<Library />} />
          <Route path="/history" element={<History />} />
        </Routes>
        
      </section>
    </div>
  );
};
