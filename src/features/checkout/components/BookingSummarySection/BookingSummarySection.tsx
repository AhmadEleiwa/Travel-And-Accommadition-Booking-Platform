import { Box, Typography, Divider } from "@mui/material";
import type { BookingSummarySectionProps } from "./BookingSummarySection.type";

export const BookingSummarySection: React.FC<BookingSummarySectionProps> = ({
  hotel,
  room,
}) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Your booking sdsd
      </Typography>

      <Box sx={{ display: "flex", gap: 3 }}>
        <Box
          component="img"
          src={room.thumbnail}
          sx={{ width: 140, height: 100, borderRadius: 2, objectFit: "cover" }}
        />
        <Box>
          <Typography fontWeight={600}>{hotel.name}</Typography>
          <Typography>{room.roomNumber}ss</Typography>
          <Typography variant="body2" mt={1}>
            2 guests · 3 nights
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />
    </Box>
  );
};
