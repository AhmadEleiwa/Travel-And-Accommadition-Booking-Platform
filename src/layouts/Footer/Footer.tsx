import { Box, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "grey.900",
        color: "grey.400",
        py: 12,
        textAlign: "center",
        marginTop: 5,
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 2, sm: 3, lg: 4 },
        }}
      >
        {/* Brand */}
        <Typography
          sx={{
            color: "common.white",
            fontWeight: 700,
            fontSize: "1.25rem",
            mb: 2,
          }}
        >
          Roam & Rest
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            mb: 4,
            maxWidth: 480,
            mx: "auto",
          }}
        >
          Experience the world's most luxurious stays with our curated selection
          of premium accommodations.
        </Typography>

        {/* Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mb: 4,
            fontSize: "0.875rem",
          }}
        >
          {["About Us", "Support", "Privacy", "Terms"].map((label) => (
            <Link
              key={label}
              href="#"
              underline="none"
              sx={{
                color: "grey.400",
                transition: "color 0.2s",
                "&:hover": { color: "common.white" },
              }}
            >
              {label}
            </Link>
          ))}
        </Box>

        {/* Copyright */}
        <Typography sx={{ fontSize: "0.75rem" }}>
          &copy; 2024 Roam & Rest Platform. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
