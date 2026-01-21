import { Box, Typography, Button } from '@mui/material';
import { LocationOn, CheckCircle } from '@mui/icons-material';


export const MapCard = () => {
  return (
    <Box
      sx={{
        bgcolor: '#0f172a',
        color: '#fff',
        borderRadius: 6,
        p: 4,
        boxShadow: 10,
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography fontWeight={700} fontSize={16} display="flex" alignItems="center">
          <LocationOn sx={{ mr: 1, color: '#60a5fa' }} />
          Location
        </Typography>
        <Button sx={{ fontSize: 12, color: '#60a5fa', textTransform: 'none', p: 0 }}>View Map</Button>
      </Box>

      {/* Map Placeholder */}
      <Box
        sx={{
          height: 260,
          borderRadius: 3,
          bgcolor: '#1e293b',
          mb: 4,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Fake map background */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
          sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
        />

        {/* Animated location pin */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 48,
            height: 48,
            bgcolor: '#3b82f6',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(59,130,246,0.5)',
            animation: 'bounce 1s infinite alternate',
          }}
        >
          <LocationOn sx={{ color: '#fff', width: 28, height: 28 }} />
        </Box>

        {/* Bounce keyframes */}
        <style>
          {`
            @keyframes bounce {
              0% { transform: translate(-50%, -50%) translateY(0); }
              100% { transform: translate(-50%, -50%) translateY(-15px); }
            }
          `}
        </style>
      </Box>

      {/* Info */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            bgcolor: '#1e293b',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <CheckCircle sx={{ color: '#22c55e', width: 16, height: 16 }} />
        </Box>
        <Box>
          <Typography fontWeight={700} fontSize={14}>
            Central District
          </Typography>
          <Typography fontSize={12} color="gray">
            Within walking distance to metro.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
