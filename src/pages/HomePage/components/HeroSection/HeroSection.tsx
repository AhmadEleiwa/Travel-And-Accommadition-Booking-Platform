import { Box, Typography } from "@mui/material";
import SearchBar from "../../../../features/search/SearchBar";
import type React from "react";

export const HeroSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: {xs:800, sm:600},
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(2px)",
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          px: 2,
          width: "100%",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "2.25rem", md: "4.5rem" },
            fontWeight: 800,
            color: "common.white",
            mb: 3,
            textShadow: "0 10px 30px rgba(0,0,0,0.6)",
            lineHeight: 1.1,
          }}
        >
          Find Your Dream <br />
          <Box component="span" sx={{ color: "primary.main" }}>
            Escape
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "grey.200",
            mb: 6,
            maxWidth: 640,
            mx: "auto",
            fontWeight: 500,
          }}
        >
          Discover curated stays in the world's most sought-after destinations.
          Luxury, comfort, and memories await.
        </Typography>

        <SearchBar />
      </Box>
    </Box>
  );
};


