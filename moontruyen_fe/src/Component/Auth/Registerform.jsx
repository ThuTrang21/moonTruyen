import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};

export const Registerform = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Typography sx={{ mb: 3 }} variant="h5" className="text-center">
        Đăng Ký
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="Full Name"
            fullWidth
            variant="outlined"
          ></Field>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          ></Field>
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          ></Field>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2, padding: "1rem" }}
          >
            Đăng Ký
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        <p className="text-gray-500">Nếu bạn có tài khoản?</p>
        <span size="small" onClick={() => navigate("/user/login")}
             className="text-red-400 cursor-pointer"
            >
          Đăng nhập
        </span>
      </Typography>
    </div>
  );
};
