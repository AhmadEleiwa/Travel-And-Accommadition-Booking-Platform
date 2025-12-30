import Box from "@mui/material/Box";
import type HotelCardProps from "../HotelCard.types";
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
type CompactProps = Pick<HotelCardProps, "hotel">;
const Compact: React.FC<CompactProps> = ({ hotel }) => {
  return (
    <Box
      component={RouterLink}
      to={`/hotel/${hotel.id}`}
      data-testid="hotel--compact-ui"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 320,
        bgcolor: "common.white",
        borderRadius: "24px",
        border: "1px solid #e2e8f0",
        overflow: "hidden",
        p: 2,
        textDecoration: "none",
        transition: "box-shadow 0.3s",
        ":hover": { boxShadow: 3 },
      }}
    >
      <Box
        component="img"
        src={hotel.thumbnail}
        alt={hotel.name}
        sx={{
          width: "100%",
          height: 160,
          objectFit: "cover",
          borderRadius: 3,
          mb: 2,
        }}
      />
      <Typography variant="subtitle1" fontWeight="bold" noWrap>
        {hotel.name}
      </Typography>
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography variant="caption" color="text.secondary">
          {hotel.location.split(",")[0]}
        </Typography>
        <Typography variant="subtitle1" color="primary" fontWeight="bold">
          ${hotel.discountedPrice || hotel.basePrice}
        </Typography>
      </Box>
    </Box>
  );
};
export default Compact;
