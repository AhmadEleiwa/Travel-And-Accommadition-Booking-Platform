import React from 'react';
import { Calendar } from 'lucide-react';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';
import type { DateFieldProps } from './DateField.type';

export const DateField: React.FC<DateFieldProps> = ({ label, value, setValue , ...props}) => (
  <Box
  
    sx={{
      display: 'flex',
      alignItems: 'center',
      px: 3,
      py: 1.5,
      bgcolor: 'grey.100',
      borderRadius: 3,
      minWidth: 140,
    }}
  >
    <Calendar size={20} color="gray" style={{ marginRight: 12 }} />
    <Box>
      <Typography
        sx={{
          fontSize: 10,
          fontWeight: 'bold',
          color: 'grey.500',
          letterSpacing: 1,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Typography>
      <TextField
        {...props}
        type="date"
        variant="standard"
        value={value}
        role='textbox'
        onChange={(e) => setValue(e.target.value)}
        InputProps={{ disableUnderline: true, sx: { fontSize: '0.875rem', fontWeight: 600, p: 0 } }}
      />
    </Box>
  </Box>
);