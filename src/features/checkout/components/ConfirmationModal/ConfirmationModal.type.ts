import type { Room } from "@/features/hotels";

export type ConfirmationModalProps = {
  room: Room;
  onClose: () => void;
  onConfirm: () => void;
};