import { Box } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TopStoryItem from "./TopStoryItem";

const TopStory = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col">
      <div className="border-b-[2px] dark:border-gray-400">
        <p className="py-2 px-5">TOP TRUYỆN</p>
      </div>
      <div className="w-full shadow-md">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="fullWidth"
                indicatorColor="primary"
                textColor="white"
                className="dark:text-white"
              >
                <Tab label="Ngày" value="1" />
                <Tab label="Tuần" value="2" />
                <Tab label="Tháng" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1, 1].map((item) => (
                    <TopStoryItem/>
              ))}
            </TabPanel>
            <TabPanel value="2" >{[1, 1].map((item) => (
                    <TopStoryItem/>
              ))}</TabPanel>
            <TabPanel value="3" >{[1].map((item) => (
                    <TopStoryItem/>
              ))}</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default TopStory;
