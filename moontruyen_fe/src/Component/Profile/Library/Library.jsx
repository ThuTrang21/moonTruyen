import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Favorite } from './Favorite';
import { Reading } from './Reading';

const Library = () => {
  const navigate = useNavigate();
  
  // Lấy tab hiện tại từ URL
  const [value, setValue] = React.useState(0 || "favorite");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue); // Chuyển hướng đến tab mới
  };
  return (
<div>
      <p className="text-2xl font-medium mb-3">Tủ truyện</p>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="white">
              <Tab label="Yêu thích" value="favorite" />
              <Tab label="Đang đọc" value="reading" />
            </TabList>
          </Box>
          <TabPanel value="favorite">
            <Favorite/>
          </TabPanel>
          <TabPanel value="reading">
            <Reading/>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}

export default Library