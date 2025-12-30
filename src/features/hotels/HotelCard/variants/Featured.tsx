import Box from "@mui/material/Box";
import type HotelCardProps from "../HotelCard.types";
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

import DealButton from "../../../../components/DealButton";
type FeaturedProps = Pick<HotelCardProps, "hotel" | "showSaleBadge">;
const Featured: React.FC<FeaturedProps> = ({ hotel, showSaleBadge }) => {
  return (
    <Box
      component={RouterLink}
      to={`/hotel/${hotel.id}`}
      data-testid="hotel--featured-ui"
      sx={{
        display: "block",
        width: 320,
        bgcolor: "common.white",
        borderRadius: "24px",
        border: "1px solid #f1f5f9",
        overflow: "hidden",
        textDecoration: "none",
        transition: "box-shadow 0.3s",
        ":hover": { boxShadow: 6 },
        "&:hover .deal-button": {
          borderRadius: 2,
          opacity: 1,
          transition: "opacity 0.3s",
        },
      }}
    >
      <Box position="relative" height={256} overflow="hidden">
        <Box
          component="img"
          src={hotel.thumbnail}
          alt={hotel.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s",
            ":hover": { transform: "scale(1.1)" },
          }}
        />
        {showSaleBadge && (
          <Box
            data-testid={"hotel--featured-ui--salebadge"}
            position="absolute"
            top={16}
            right={16}
            bgcolor="error.main"
            color="common.white"
            px={2}
            py={0.75}
            borderRadius={3}
            fontWeight="bold"
            fontSize={12}
          >
            SALE
          </Box>
        )}
      </Box>
      <Box p={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="start"
          mb={1}
        >
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            {hotel.name}
          </Typography>
          <Box display="flex" alignItems="center" color="warning.main">
            <Star size={16} />
            <Typography variant="body2" fontWeight="bold" ml={0.5}>
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
        <Box display="flex" justifyContent="space-between" alignItems="end">
          <Box>
            <Typography
              variant="body2"
              color="text.disabled"
              sx={{ textDecoration: "line-through" }}
            >
              ${hotel.basePrice}
            </Typography>
            <Typography variant="h5" fontWeight="900" color="primary">
              ${hotel.discountedPrice}
              <Typography
                component="span"
                variant="caption"
                color="text.disabled"
                fontWeight="medium"
              >
                / night
              </Typography>
            </Typography>
          </Box>
          <DealButton className="deal-button" sx={{ opacity: "0" }}>
            View Deal
          </DealButton>
        </Box>
      </Box>
    </Box>
  );
};
export default Featured;
