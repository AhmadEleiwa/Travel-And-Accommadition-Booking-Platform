import { Box, Typography, Divider } from "@mui/material";
import type { PriceBreakdownCardProps } from "./PriceBreakdownCard.type";

export const PriceBreakdownCard: React.FC<PriceBreakdownCardProps> = ({
  room,
}) => {
  const nights = 3;
  const subtotal = room.price * nights;
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

  return (
    <Box
      sx={{
        p: 4,
        border: "1px solid #eee",
        borderRadius: 3,
        bgcolor: "#fafafa",
      }}
    >
      <Typography fontWeight={600} mb={3}>
        Price details
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography>
          ${room.price} × {nights} nights
        </Typography>
        <Typography>${subtotal}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography>Taxes & fees</Typography>
        <Typography>${taxes.toFixed(2)}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontWeight={600}>Total</Typography>
        <Typography fontWeight={600}>${total.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};
