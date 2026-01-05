import React from "react";
import { Formik, Form } from "formik";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Person, Lock, Email, ArrowRight } from "@mui/icons-material";
import type { SignupFormProps, SignupFormValues } from "./SignupForm.type";
import { validationSchema } from "./SignupFormSchema";

export const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const initialValues: SignupFormValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (
    values: SignupFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setSubmitting(true);
    onSignup(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange, isSubmitting }) => (
        <Form>
          <Box mb={3}>
            <TextField
              fullWidth
              name="username"
              label="Username"
              placeholder="e.g. johndoe"
              value={values.username}
              onChange={handleChange}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box mb={3}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              placeholder="e.g. john@example.com"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box mb={3}>
            <TextField
              fullWidth
              type="password"
              name="password"
              label="Password"
              placeholder="••••••••"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box mb={3}>
            <TextField
              fullWidth
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="••••••••"
              value={values.confirmPassword}
              onChange={handleChange}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            endIcon={!isSubmitting ? <ArrowRight /> : undefined}
            disabled={isSubmitting}
            sx={{ py: 1.5, fontWeight: "bold" }}
          >
            {isSubmitting ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign Up"
            )}
          </Button>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2, color: "text.secondary" }}
          >
            Already have an account? Sign in
          </Typography>
        </Form>
      )}
    </Formik>
  );
};
