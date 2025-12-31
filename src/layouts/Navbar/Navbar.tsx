import React from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import type NavbarProps from "./Navbar.type";

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1280px", // max-w-7xl
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 3, lg: 4 },
          height: 64,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          data-testid="navbar-logo"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              background: "linear-gradient(to right, #2563eb, #4f46e5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hotels
          </Typography>
        </Box>

        {/* Center Nav Links */}
        <Box
          data-testid="navbar-links"
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#475569",
          }}
        >
          {["Destinations", "Hotels", "Deals"].map((item) => (
            <Box
              key={item}
              component={Link}
              data-testid={`navbar-link-${item}`}
              to="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                transition: "color 0.2s",
                "&:hover": {
                  color: "#2563eb",
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>

        {/* Right Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {user ? (
            <>
              {/* User Info */}
              <Box
                data-testid="navbar-userinfo"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  pr: 2,
                  borderRight: "1px solid #e2e8f0",
                }}
              >
                <Box
                  sx={{
                    textAlign: "right",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#0f172a",
                      lineHeight: 1.2,
                    }}
                  >
                    {user.username}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "#64748b",
                      textTransform: "capitalize",
                    }}
                  >
                    {user.role}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {user.username[0].toUpperCase()}
                </Box>
              </Box>

              {user.role === "ADMIN" && (
                <Box
                  component={Link}
                  to="/admin"
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#4f46e5",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#3730a3",
                    },
                  }}
                >
                  Admin
                </Box>
              )}

              <Button
                onClick={onLogout}
                sx={{
                  px: 2,
                  py: 1,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#334155",
                  borderRadius: "0.5rem",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#f1f5f9",
                  },
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              data-testid="navbar-logout-button"
              onClick={() => navigate("/login")}
              sx={{
                backgroundColor: "#2563eb",
                color: "#fff",
                px: 2.5,
                py: 1.25,
                fontSize: "0.875rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
                textTransform: "none",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                transition: "all 0.15s",
                "&:hover": {
                  backgroundColor: "#1d4ed8",
                },
                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
