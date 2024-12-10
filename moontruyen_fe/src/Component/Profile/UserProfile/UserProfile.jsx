import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import AccountSecurity from "./AccountSecurity";

const UserProfile = () => {
  const navigate = useNavigate();


  const [value, setValue] = React.useState(0 || "personal-info");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };
  return (
    <div>
      <p className="text-2xl font-medium mb-3">Quản lý thông tin</p>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
                onChange={handleChange}
                textColor="white"
              >
              <Tab label="Thông tin cá nhân" value="personal-info" />
              <Tab label="Tài khoản và bảo mật" value="account-security" />
            </TabList>
          </Box>
          <TabPanel value="personal-info">
            <PersonalInfo />
          </TabPanel>
          <TabPanel value="account-security">
            <AccountSecurity />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default UserProfile;
