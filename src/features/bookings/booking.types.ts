export interface Booking {
  id: string;
  hotelId: string;
  roomId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  totalPrice: number;
  status: "confirmed" | "pending" | "cancelled";
  specialRequests?: string;
  confirmationNumber: string;
}
