export interface Hotel {
  id: string;
  cityId: string;
  name: string;
  owner: string;
  starRating: number;
  description: string;
  thumbnail: string;
  images: string[];
  location: string;
  amenities: string[];
  basePrice: number;
  discountedPrice?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Room {
  id: string;
  hotelId: string;
  roomNumber: string;
  type: "Luxury" | "Budget" | "Boutique" | "Standard";
  adultCapacity: number;
  childrenCapacity: number;
  isAvailable: boolean;
  price: number;
  description: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}
