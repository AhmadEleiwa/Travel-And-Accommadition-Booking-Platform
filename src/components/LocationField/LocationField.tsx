import { Box, TextField } from "@mui/material";
import { MapPin } from "lucide-react";
import type { LocationFieldProps } from "./LocationField.type";

export const LocationField: React.FC<LocationFieldProps> = ({
  query,
  setQuery,
  ...props
}) => (
  <Box
    sx={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      px: 3,
      py: 1.5,
      bgcolor: "grey.100",
      borderRadius: 3,
      transition: "all 0.3s",
      "&:focus-within": {
        boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}`,
      },
    }}
  >
    <MapPin size={20} color="gray" style={{ marginRight: 12 }} />
    <TextField
      {...props}
      data-testid="location-field"
      inputProps={{
        "aria-label": "Location", // This ensures the <input> gets the label
      }}
      placeholder="Search for hotels, cities..."
      variant="standard"
      fullWidth
      InputProps={{
        disableUnderline: true,
        sx: {
          bgcolor: "transparent",
          px: 0,
          fontWeight: 500,
          "&::placeholder": { color: "grey.400" },
        },
      }}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  </Box>
);
