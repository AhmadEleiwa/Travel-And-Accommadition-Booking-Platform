import { Box, TextField, Typography } from "@mui/material";

export const GuestDetailsSection = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Guest details
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField label="Full name" fullWidth />
        <TextField label="Email address" fullWidth />
        <TextField label="Phone number" fullWidth />
      </Box>
    </Box>
  );
};