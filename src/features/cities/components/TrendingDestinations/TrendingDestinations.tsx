import { Box, Typography, Grid } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import type { TrendingDestinationProps } from "./TrendingDestinations.type";
import DestinationCard from "../DestinationCard";

export const TrendingDestinations: React.FC<TrendingDestinationProps> = ({
  trending,
}) => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: "1280px",
        mx: "auto",
        px: { xs: 2, sm: 3, lg: 4 },
        mt: 12,
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "grey.900",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TrendingUpIcon sx={{ mr: 1.5, color: "indigo.500", fontSize: 32 }} />
          Trending Destinations
        </Typography>

        <Typography sx={{ mt: 1, color: "grey.500" }}>
          The most visited cities by our community this month.
        </Typography>
      </Box>

      {/* Grid */}
      <Grid container spacing={3}>
        {trending.map((city) => (
          <Grid size={{ xs: 6, md: 4, lg: 2.4 }} key={city.id}>
            <DestinationCard city={city} linkTo={`/search?q=${city.name}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
