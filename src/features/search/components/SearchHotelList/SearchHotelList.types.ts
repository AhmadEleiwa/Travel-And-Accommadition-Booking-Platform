import type { Hotel } from "@/features/hotels";

export interface SearchHotelListProps {
  hotels: Hotel[];
  loading: boolean;
}
