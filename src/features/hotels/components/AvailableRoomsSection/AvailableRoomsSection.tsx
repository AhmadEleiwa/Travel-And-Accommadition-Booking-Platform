import { Stack, Typography } from "@mui/material";

import { RoomCard } from "../RoomCard/RoomCard";
import type { AvailableRoomsSectionProps } from "./AvailableRoomsSection.types";

export const AvailableRoomsSection: React.FC<AvailableRoomsSectionProps> = ({
  hotelId,
  rooms,
}) => {
  return (
    <Stack spacing={3} mt={6}>
      <Typography variant="h5" fontWeight={700}>
        Available Rooms
      </Typography>

      {rooms.map((room) => (
        <RoomCard key={room.id} hotelId={hotelId} room={room} />
      ))}
    </Stack>
  );
};
