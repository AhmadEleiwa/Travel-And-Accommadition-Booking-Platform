// src/views/LoginView.tsx
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Avatar } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { loginFailure, loginStart, loginSuccess } from "../../authSlice";
import { setAccessToken } from "../../../../utils/token/token";
import { loginAPI } from "../../API/authAPI";
import type { AuthLoginPayload } from "../../API/authAPI.type";
import CircularLoading from "../../../../components/CirularLoading";
import { enqueueSnackbar } from "../../../snackbar/snackbarSlice";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);
  const handleLogin = async (user: AuthLoginPayload) => {
    dispatch(loginStart());
    try {
      const { accessToken, ...userRes } = await loginAPI(user);
      dispatch(loginSuccess(userRes));
      setAccessToken(accessToken);
      // navigate("/");
      dispatch(
        enqueueSnackbar({
          message: "You hvae been login successfully",
          severity: "success",
        })
      );
    } catch (e) {
      if (e instanceof Error) {
        dispatch(loginFailure(`Couldnt Login, ${e.message}`));
        dispatch(
          enqueueSnackbar({
            message: e.message,
            severity: "error",
          })
        );
      }
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f1f5f9"
      p={2}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 400,
          width: "100%",
          borderRadius: "40px",
          p: 5,
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#bfdbfe",
            width: 64,
            height: 64,
            mx: "auto",
            mb: 2,
            color: "#2563eb",
          }}
        >
          <LockIcon fontSize="large" />
        </Avatar>

        <Typography variant="h4" fontWeight="bold" mb={1}>
          Welcome Back
        </Typography>
        <Typography color="textSecondary" mb={4}>
          Please enter your details to sign in
        </Typography>
        <CircularLoading loading={loading} />
        <LoginForm onLogin={handleLogin} />

        <Typography mt={4} color="textSecondary" variant="body2">
          Don't have an account?{" "}
          <Typography
            component="a"
            href="#"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Sign up for free
          </Typography>
        </Typography>
      </Paper>
    </Box>
  );
};
