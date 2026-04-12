import PriceBreakdownCard from "@/components/PriceBreakdownCard";
import type { ConfirmationModalProps } from "./ConfirmationModal.type";
import { Button, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  room,
  onClose,
  onConfirm,
}) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Box
      onClick={onClose} // click outside closes
      sx={{
        bgcolor: "rgba(0,0,0,0.5)",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)",
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        sx={{
          width: { xs: "90%", sm: "70%", md: "500px" },
          maxHeight: "90vh",
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: 24,
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Confirm Booking</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Content */}
        <PriceBreakdownCard room={room} />

        {/* Actions */}
        <Box display="flex" justifyContent="flex-end" gap={1} mt={1}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onConfirm}>
            Confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
};