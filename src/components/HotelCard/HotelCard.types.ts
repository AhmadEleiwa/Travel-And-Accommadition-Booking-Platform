import { Hotel } from '../../types';

type HotelCardVariant = 'compact' | 'featured' | 'list';

interface HotelCardProps {
  hotel: Hotel;
  variant?: HotelCardVariant;
  showSaleBadge?: boolean;
}

export default HotelCardProps;