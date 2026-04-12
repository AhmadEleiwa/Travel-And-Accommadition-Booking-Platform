import { Box, TextField, Typography, Button } from "@mui/material";
import type { PaymenSectionProps } from "./PaymentSection.type";

export const PaymentSection: React.FC<PaymenSectionProps> = ({ onBook }) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Payment
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField label="Card number" fullWidth />

        <Box sx={{ display: "flex", gap: 3 }}>
          <TextField label="Expiry date" fullWidth />
          <TextField label="CVV" fullWidth />
        </Box>

        <TextField label="Name on card" fullWidth />

        <Button
          onClick={onBook}
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            py: 1.5,
            fontWeight: 600,
            textTransform: "none",
          }}
        >
          Complete booking
        </Button>
      </Box>
    </Box>
  );
};
