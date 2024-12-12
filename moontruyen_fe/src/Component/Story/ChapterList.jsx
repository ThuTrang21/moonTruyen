import { Pagination } from "@mui/material";
import React, { useState } from "react";

const chapters = [
  { title: "The Beginning" },
  {  title: "The Journey" },
  {  title: "The Challenge" },
  { title: "The Revelation" },
  { title: "The Beginning" },
  {  title: "The Journey" },
  {  title: "The Challenge" },
  { title: "The Revelation" },
  { title: "The Beginning" },
  {  title: "The Journey" },
  {  title: "The Challenge" },
  { title: "The Revelation" },
 
  
];

const ChapterList = () => {
    const itemsPerPage = 20; // Số chương mỗi trang
    const [currentPage, setCurrentPage] = useState(1);
  
    // Tính toán dữ liệu cần hiển thị
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentChapters = chapters.slice(startIndex, startIndex + itemsPerPage);
  
    // Chia danh sách thành 2 phần
    const firstHalf = currentChapters.slice(0, 10);
    const secondHalf = currentChapters.slice(10);
  
    const handleChangePage = (event, value) => {
      setCurrentPage(value);
    };

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
        {/* Cột 1 */}
        <ul className="list-none p-0">
          {firstHalf.map((chapter, index) => (
            <li key={index} className=" cursor-pointer">
              <p className="border-b border-transparent hover:border-cyan-300 inline-block p-2">
                Chương {startIndex + index + 1}: {chapter.title}
              </p>
            </li>
          ))}
        </ul>
        {/* Cột 2 */}
        <ul className="list-none p-0">
          {secondHalf.map((chapter, index) => (
            <li key={index} className=" cursor-pointer">
              <p className="border-b border-transparent hover:border-cyan-300 inline-block p-2">
                Chương {startIndex  + index + 11}: {chapter.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
       {/* Pagination */}
       <div className="flex justify-center mt-4">
        <Pagination
          count={Math.ceil(chapters.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
        />
      </div>
   
    </div>
  );
};

export default ChapterList;
