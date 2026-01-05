// src/components/LoginForm.tsx
import React from "react";
import { Formik, Form } from "formik";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  InputAdornment,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Lock, Person, ArrowRight } from "@mui/icons-material";
import type { LoginFormProps, LoginFormValues } from "./LoginForm.type";
import type { AuthLoginRequest } from "../../API/authAPI.type";
import { useAppSelector } from "../../../../store";
import { validationSchema } from "./loginFormSchema";

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const error = useAppSelector(state => state.auth.error)
  const initialValues: LoginFormValues = {
    username: "",
    password: "",
    remember: false,
  };

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setSubmitting(true);
    let user: AuthLoginRequest = values
    onLogin(user);

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, errors, touched, handleChange, values }) => (
        <Form>
          <Box mb={3}>
            <TextField
              fullWidth
              name="username"
              label="Username"
              placeholder="e.g. admin"
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
              variant="outlined"
            />
          </Box>

          <Box mb={1}>
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
              variant="outlined"
            />
          </Box>

          <Box
            mb={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  checked={values.remember}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Typography
              component="a"
              href="#"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Forgot?
            </Typography>
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
              "Sign In"
            )}
          </Button>
          {error &&<Typography sx={{marginTop:2, color:'red'}}>
            {error}
          </Typography>}
        </Form>
      )}
    </Formik>
  );
};
