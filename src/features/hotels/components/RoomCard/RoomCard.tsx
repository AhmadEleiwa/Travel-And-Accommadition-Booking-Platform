import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Button,
  Chip,
} from '@mui/material';
import { CheckCircle, ShoppingCart } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import type { RoomCardProps } from './RoomCard.types';

  

export const RoomCard:React.FC<RoomCardProps> = ({ hotelId, room }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        borderRadius: 6, // Tailwind rounded-3xl
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        transition: 'box-shadow .3s',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        '&:hover': {
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        },
      }}
    >
      {/* THUMBNAIL */}
      <CardMedia
        component="img"
        image={room.thumbnail}
        sx={{
          width: { xs: '100%', md: 256 },
          height: { xs: 200, md: 'auto' },
          objectFit: 'cover',
        }}
      />

      {/* CONTENT */}
      <CardContent sx={{ flex: 1, p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Stack spacing={2}>
          {/* Room Header */}
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography fontWeight={700} fontSize={20} color="text.primary">
              {room.type} Room
            </Typography>
            <Chip
              label={`No. ${room.roomNumber}`}
              sx={{
                bgcolor: '#eff6ff',
                color: '#2563eb',
                fontWeight: 700,
                fontSize: 12,
                px: 2,
                py: 0.5,
                borderRadius: 3,
              }}
            />
          </Stack>

          {/* Description */}
          <Typography fontSize={14} color="text.secondary">
            {room.description}
          </Typography>

          {/* Capacity */}
          <Stack direction="row" spacing={4} mt={1}>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <CheckCircle sx={{ color: '#22c55e', width: 16, height: 16 }} />
              <Typography fontSize={12} fontWeight={700} color="text.secondary">
                Adults: {room.adultCapacity}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <CheckCircle sx={{ color: '#22c55e', width: 16, height: 16 }} />
              <Typography fontSize={12} fontWeight={700} color="text.secondary">
                Children: {room.childrenCapacity}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* Price + Button */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={4}>
          <Typography fontWeight={900} fontSize={22} color="text.primary">
            ${room.price}
            <Typography component="span" fontSize={12} color="text.secondary" fontWeight={500}>
              {' '} / night
            </Typography>
          </Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCart />}
            onClick={() => navigate(`/checkout/${hotelId}/${room.id}`)}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 700,
              textTransform: 'none',
              boxShadow: '0 10px 20px rgba(59,130,246,0.2)',
              '&:hover': {
                bgcolor: '#1e40af',
                boxShadow: '0 12px 24px rgba(59,130,246,0.3)',
              },
            }}
          >
            Book Now
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
