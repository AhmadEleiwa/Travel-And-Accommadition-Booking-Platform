import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HotelCard from "../HotelCard";
import type { RecentlyVisitedProps } from "./RecentlyVisited.type";

export const RecentlyVisited: React.FC<RecentlyVisitedProps> = ({ recent }) => {
  if (recent.length === 0) return null;

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "grey.100",
        mt: 12,
        py: 10,
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 2, sm: 3, lg: 4 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "grey.900",
            mb: 5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <AccessTimeIcon
            sx={{ mr: 1.5, color: "primary.main", fontSize: 32 }}
          />
          Recently Visited
        </Typography>

        {/* Horizontal Scroll */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            pb: 3,

            // Hide scrollbar (cross-browser)
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome / Safari
            },
          }}
        >
          {recent.map((hotel) => (
            <Box
              key={hotel.id}
   
            >
              <HotelCard hotel={hotel} variant="compact" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
