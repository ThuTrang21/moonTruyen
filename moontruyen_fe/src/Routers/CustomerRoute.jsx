import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { StoryDetail } from '../Component/Story/StoryDetail';
import { Navbar } from '../Component/Navbar/Navbar';
import Home from '../Component/Home/Home';
import Footer from '../Component/Footer/Footer';

const CustomerRoute = () => {
  return (
    <div>
        <div className="flex flex-col h-screen">
        <Navbar />
        <div className="container p-0 bg-gray-100 dark:bg-gray-500">
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/account/:register' element={<Home/>}/> */}
          <Route path='/title' element={<StoryDetail/>}/>
        </Routes>
        </div>
        
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRoute