import type { Hotel } from "..";

export type HotelCardVariant = "compact" | "featured" | "list";

export default interface HotelCardProps {
  hotel: Hotel;
  variant?: HotelCardVariant;
  showSaleBadge?: boolean;
}
