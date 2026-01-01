export type GuestType = { adults: number; children: number; rooms: number };

export interface GuestPickerProps {
  guests: GuestType;
  setGuests: (g: GuestType) => void;
}
