import React, { useState } from "react";
import { Users } from "lucide-react";
import { Box, Button, Stack, Typography, Menu } from "@mui/material";
import type { GuestPickerProps, GuestType } from "./GuestPicker.type";
import { DealButton } from "../Buttons";

export const GuestPicker: React.FC<GuestPickerProps> = ({
  guests,
  setGuests,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const updateGuest = (key: keyof GuestType, delta: number) => {
    setGuests({ ...guests, [key]: Math.max(0, guests[key] + delta) });
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        onClick={handleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: 3,
          py: 1.5,
          bgcolor: "grey.100",
          borderRadius: 3,
          minWidth: 160,
          textTransform: "none",
          ":hover": { bgcolor: "grey.200" },
        }}
      >
        <Users size={20} color="gray" style={{ marginRight: 12 }} />
        <Box>
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: "bold",
              color: "grey.500",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Guests
          </Typography>
          <Typography sx={{ fontSize: "0.875rem", fontWeight: 600 }}>
            {guests.adults + guests.children} Guests, {guests.rooms} Room
          </Typography>
        </Box>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: { mt: 1, borderRadius: 4, p: 3, minWidth: 280, boxShadow: 6 },
        }}
      >
        {[
          { label: "Adults", key: "adults", sub: "Ages 13+" },
          { label: "Children", key: "children", sub: "Ages 2-12" },
          { label: "Rooms", key: "rooms", sub: "" },
        ].map((item) => (
          <Box
            key={item.key}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 600 }}>{item.label}</Typography>
              {item.sub && (
                <Typography sx={{ fontSize: 12, color: "grey.500" }}>
                  {item.sub}
                </Typography>
              )}
            </Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                size="small"
                variant="outlined"
                onClick={() => updateGuest(item.key as keyof GuestType, -1)}
              >
                -
              </Button>
              <Typography
                sx={{ width: 20, textAlign: "center", fontWeight: "bold" }}
              >
                {guests[item.key as keyof GuestType]}
              </Typography>
              <Button
                size="small"
                variant="outlined"
                onClick={() => updateGuest(item.key as keyof GuestType, 1)}
              >
                +
              </Button>
            </Stack>
          </Box>
        ))}
        <DealButton fullWidth onClick={handleClose}>
          Done
        </DealButton>
      </Menu>
    </Box>
  );
};
