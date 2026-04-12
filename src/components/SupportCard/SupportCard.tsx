import { Box, Typography, Button } from "@mui/material";

export const SupportCard = () => {
  return (
    <Box
      sx={{
        p: 4,
        border: "1px solid #eee",
        borderRadius: 3,
      }}
    >
      <Typography fontWeight={600} mb={2}>
        Need help?
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={3}>
        Our support team is available 24/7 to assist you with your booking.
      </Typography>

      <Button
        variant="outlined"
        fullWidth
        sx={{ textTransform: "none", fontWeight: 500 }}
      >
        Contact support
      </Button>
    </Box>
  );
};
