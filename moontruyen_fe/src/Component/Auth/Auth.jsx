import { Box, Modal } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Registerform } from "./Registerform";
import { Loginform } from "./Loginform";
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
  border:0,
};

export const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnClose = () => {
    navigate("/");
  };
  return (
    <>
      <Modal
        onClose={handleOnClose}
        open={
          location.pathname === "/user/register" ||
          location.pathname === "/user/login"
        }
      >
        <Box sx={style}>
          {location.pathname === "/user/register" ? (
            <Registerform />
          ) : (
            <Loginform />
          )}
        </Box>
      </Modal>
    </>
  );
};
