import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ApiService from '../../services/api.service';
const initialValues = {
  username: "",
  password: "",
};

export const Loginform = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await ApiService.post("auth/token",
        {
          username: values.username,
          password: values.password
        })
        if (response.status === 200) {
          cookies.set("token", response.data.result.token,{
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
          })
          localStorage.setItem("token", JSON.stringify(response.data.result.token));
          const myinfo = await ApiService.get("users/my-info")
          if(myinfo.status === 200){
            console.log(myinfo.data.result);
            localStorage.setItem("userInfo", JSON.stringify(myinfo.data.result));
          }
          navigate("/");
        }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log(err.response.data.message)
      }
    }
    
  };
  return (
    <div>
      <Typography sx={{ mb: 3 }} variant="h5" className="text-center">
        Đăng Nhập
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="username"
            label="Username"
            fullWidth
            variant="outlined"
          ></Field>
          <Field
            as={TextField}
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
          ></Field>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2, padding: "1rem" }}
          >
            Đăng nhập
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        <p className="text-gray-500">Bạn chưa có tài khoản?  </p>
        <span onClick={() => navigate("/account/register")}
          className="text-red-400 cursor-pointer"
        >
          Đăng ký
        </span>
      </Typography>
    </div>
  );
};
