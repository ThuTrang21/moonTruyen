import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../State/Authentidation/Action";
const initialValues = {
  email: "",
  password: "",
};

export const Loginform = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSubmit = (values) => {
    console.log("tai khoan:", values);
    dispatch(loginUser({userData:values,navigate}));

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
            name="email"
            label="Email"
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
        <span onClick={() => navigate("/user/register")}
            className="text-red-400 cursor-pointer"
            >
          Đăng ký
        </span>
      </Typography>
    </div>
  );
};
