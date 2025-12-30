import type { Hotel } from "../../features/hotels";


type HotelCardVariant = 'compact' | 'featured' | 'list';

export default interface HotelCardProps {
  hotel: Hotel;
  variant?: HotelCardVariant;
  showSaleBadge?: boolean;
}
