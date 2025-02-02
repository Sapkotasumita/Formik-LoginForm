import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Typography, TextField, Button, Box } from "@mui/material";

const LoginForm = () => {
  return (
    <Box
      sx={{
        width: "500px",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .required("Email is required")
            .trim()
            .lowercase()
            .email("Invalid email format")
            .max(100, "Email must be at most 100 characters"),
          password: yup
            .string()
            .trim()
            .required("Password is required")
            .min(4, "Password must be at least 4 characters"),
        })}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="h5">Login</Typography>

              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                inputProps={{ maxLength: 100 }}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.errors.password}
              />

              <Button
                fullWidth
                variant="contained"
                color="success"
                type="submit"
              >
                Submit
              </Button>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
};

export default LoginForm;
