import { Box, Typography, Grid, Link } from "@mui/material";
// import {Grid} from '@mui/material/Grid'
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Link as RouterLink } from "react-router-dom";
import HotelCard from "../HotelCard";
import type { FeaturedDealsProps } from "./FeaturedDeals.type";

const FeaturedDeals: React.FC<FeaturedDealsProps> = ({ featured }) => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: "1280px", // max-w-7xl
        mx: "auto",
        px: { xs: 2, sm: 3, lg: 4 },
        mt: 12,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 5,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "grey.900",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AutoAwesomeIcon sx={{ mr: 1.5, color: "#facc15", fontSize: 32 }} />
            Featured Deals
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "grey.500",
            }}
          >
            Limited time offers in world-class accommodations.
          </Typography>
        </Box>

        <Link
          component={RouterLink}
          to="/search"
          underline="hover"
          sx={{
            fontWeight: 600,
            color: "primary.main",
            whiteSpace: "nowrap",
          }}
        >
          View All Deals
        </Link>
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={4}>
        {featured.map((hotel) => (
          <Grid
            justifyContent={"center"}
            alignItems={"center"}
            size={{ xs: 12, md: 6, lg: 4 }}
            key={hotel.id}
          >
            <HotelCard hotel={hotel} variant="featured" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedDeals;
