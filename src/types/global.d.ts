// export enum UserRole {
//   USER = 'USER',
//   ADMIN = 'ADMIN'
// }

// export interface User {
//   id: string;
//   username: string;
//   role: UserRole;
//   email: string;
//   avatar?: string;
// }

// export interface City {
//   id: string;
//   name: string;
//   country: string;
//   postOffice: string;
//   thumbnail: string;
//   visitCount: number;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface Hotel {
//   id: string;
//   cityId: string;
//   name: string;
//   owner: string;
//   starRating: number;
//   description: string;
//   thumbnail: string;
//   images: string[];
//   location: string;
//   amenities: string[];
//   basePrice: number;
//   discountedPrice?: number;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface Room {
//   id: string;
//   hotelId: string;
//   roomNumber: string;
//   type: 'Luxury' | 'Budget' | 'Boutique' | 'Standard';
//   adultCapacity: number;
//   childrenCapacity: number;
//   isAvailable: boolean;
//   price: number;
//   description: string;
//   thumbnail: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface Booking {
//   id: string;
//   hotelId: string;
//   roomId: string;
//   userId: string;
//   checkIn: string;
//   checkOut: string;
//   adults: number;
//   children: number;
//   totalPrice: number;
//   status: 'confirmed' | 'pending' | 'cancelled';
//   specialRequests?: string;
//   confirmationNumber: string;
// }

// export interface SearchParams {
//   query: string;
//   checkIn: string;
//   checkOut: string;
//   adults: number;
//   children: number;
//   rooms: number;
// }
