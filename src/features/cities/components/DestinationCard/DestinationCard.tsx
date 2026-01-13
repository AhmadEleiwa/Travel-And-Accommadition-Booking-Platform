import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { DestinationCardProps } from "./DestinationCard.type";

export const DestinationCard: React.FC<DestinationCardProps> = ({
  city,
  linkTo,
}) => {
  const CardContent = (
    <Box
      data-testid={"destination-card"}
      sx={{
        position: "relative",
        display: "block",
        height: 288,
        borderRadius: 4,
        overflow: "hidden",
        "&:hover img": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Box
        component="img"
        src={city.thumbnail}
        alt={city.name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)",
        }}
      />

      <Box sx={{ position: "absolute", bottom: 24, left: 24 }}>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            opacity: 0.7,
            mb: 0.5,
            color: "white",
          }}
        >
          {city.country}
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: 700, lineHeight: 1.1, color: "white" }}
        >
          {city.name}
        </Typography>
      </Box>
    </Box>
  );

  // If a link is provided, wrap in Router Link
  if (linkTo) {
    return (
      <Link component={RouterLink} to={linkTo} underline="none" color="inherit">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};
