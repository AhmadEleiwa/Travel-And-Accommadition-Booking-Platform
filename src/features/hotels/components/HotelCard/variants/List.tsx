import Box from "@mui/material/Box";
import type HotelCardProps from "../HotelCard.types";
import { Chip, Typography } from "@mui/material";
import { MapPin, Star } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

type ListProps = Pick<HotelCardProps, "hotel">;

const List: React.FC<ListProps> = ({ hotel }) => {
  return (
    <Box
      component={RouterLink}
      data-testid="hotel--list-ui"
      to={`/hotel/${hotel.id}`}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "common.white",
        borderRadius: "24px",
        border: "1px solid #f1f5f9",
        overflow: "hidden",
        textDecoration: "none",
        transition: "box-shadow 0.3s",
        ":hover": { boxShadow: 6 },
      }}
    >
      <Box
        flexShrink={0}
        width={{ xs: "100%", md: 320 }}
        height={{ xs: 256, md: "auto" }}
        overflow="hidden"
      >
        <Box
          component="img"
          src={hotel.thumbnail}
          alt={hotel.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s",
            ":hover": { transform: "scale(1.05)" },
          }}
        />
      </Box>
      <Box
        flex={1}
        p={3}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            mb={1}
          >
            <Typography variant="h5" fontWeight="bold" color="text.primary">
              {hotel.name}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              bgcolor="#ebf8ff"
              color="#3b82f6"
              px={1}
              py={0.5}
              borderRadius={2}
            >
              <Star size={16} style={{ marginRight: 4 }} />
              <Typography variant="body2" fontWeight="bold">
                {hotel.starRating}.0
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            color="text.secondary"
            fontSize={14}
            mb={2}
          >
            <MapPin size={16} style={{ marginRight: 4 }} />
            {hotel.location}
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {hotel.description}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
            {hotel.amenities.map((a) => (
              <Chip
                key={a}
                label={a.toUpperCase()}
                size="small"
                sx={{ bgcolor: "#f8fafc", fontWeight: "bold", fontSize: 10 }}
              />
            ))}
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="end"
          mt={3}
        >
          <Typography variant="caption" color="text.secondary">
            Price for 1 night, 2 adults
          </Typography>
          <Box textAlign="right">
            <Typography
              variant="body2"
              color="text.disabled"
              sx={{ textDecoration: "line-through" }}
            >
              ${hotel.basePrice}
            </Typography>
            <Typography variant="h4" fontWeight="900" color="primary">
              ${hotel.discountedPrice || hotel.basePrice}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default List;
