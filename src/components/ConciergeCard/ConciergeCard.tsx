import { Box, Typography, Button } from '@mui/material';

export const ConciergeCard = () => {
  return (
    <Box
      sx={{
        bgcolor: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: 6,
        p: 4,
      }}
    >
      <Typography fontWeight={700} mb={1} color="#1e40af">
        Need Help?
      </Typography>
      <Typography fontSize={14} color="#1e3a8a">
        Our concierge team is available 24/7 for special requests.
      </Typography>
      <Button
        fullWidth
        sx={{
          mt: 3,
          py: 1.5,
          bgcolor: '#fff',
          color: '#2563eb',
          borderRadius: 3,
          fontWeight: 700,
          '&:hover': { boxShadow: 6, bgcolor: '#f9fafb' },
        }}
      >
        Contact Concierge
      </Button>
    </Box>
  );
};
