import type { City } from "./features/cities";
import type { Hotel, Room } from "./features/hotels";



export const MOCK_CITIES: City[] = [
  { id: 'c1', name: 'Paris', country: 'France', postOffice: '75000', thumbnail: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80', visitCount: 1500, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
  { id: 'c2', name: 'Tokyo', country: 'Japan', postOffice: '100-0001', thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80', visitCount: 2200, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
  { id: 'c3', name: 'New York', country: 'USA', postOffice: '10001', thumbnail: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80', visitCount: 1800, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
  { id: 'c4', name: 'London', country: 'UK', postOffice: 'EC1A 1BB', thumbnail: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80', visitCount: 1200, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
  { id: 'c5', name: 'Dubai', country: 'UAE', postOffice: '00000', thumbnail: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80', visitCount: 2500, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
];

export const MOCK_HOTELS: Hotel[] = [
  {
    id: 'h1',
    cityId: 'c1',
    name: 'The Ritz Paris',
    owner: 'Mohamed Al-Fayed',
    starRating: 5,
    description: 'The Ritz Paris is a palace hotel in the heart of Paris. Since its opening in 1898, it has become a symbol of French luxury and refinement.',
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
    ],
    location: '15 Pl. Vendôme, 75001 Paris, France',
    amenities: ['Pool', 'Spa', 'Gym', 'Free WiFi', 'Restaurant'],
    basePrice: 1200,
    discountedPrice: 950,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01'
  },
  {
    id: 'h2',
    cityId: 'c2',
    name: 'Park Hyatt Tokyo',
    owner: 'Hyatt Hotels',
    starRating: 5,
    description: 'Iconic luxury hotel offering breathtaking views of Tokyo and Mount Fuji. Known for its appearance in "Lost in Translation".',
    thumbnail: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80'
    ],
    location: '3-7-1-2 Nishi-Shinjuku, Shinjuku City, Tokyo, Japan',
    amenities: ['Bar', 'Views', 'Pool', 'Room Service'],
    basePrice: 800,
    discountedPrice: 720,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01'
  },
  {
    id: 'h3',
    cityId: 'c5',
    name: 'Burj Al Arab',
    owner: 'Jumeirah Group',
    starRating: 5,
    description: 'The world\'s only 7-star hotel, standing on an artificial island. Unparalleled luxury and architecture.',
    thumbnail: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Jumeirah St, Dubai, UAE',
    amenities: ['Beach Access', 'Butler Service', 'Underwater Restaurant'],
    basePrice: 2000,
    discountedPrice: 1800,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01'
  }
];

export const MOCK_ROOMS: Room[] = [
  {
    id: 'r1',
    hotelId: 'h1',
    roomNumber: '101',
    type: 'Luxury',
    adultCapacity: 2,
    childrenCapacity: 1,
    isAvailable: true,
    price: 950,
    description: 'A spacious suite with garden views and silk curtains.',
    thumbnail: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80',
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01'
  },
  {
    id: 'r2',
    hotelId: 'h1',
    roomNumber: '202',
    type: 'Boutique',
    adultCapacity: 2,
    childrenCapacity: 0,
    isAvailable: true,
    price: 750,
    description: 'Cozy room with antique furniture and modern amenities.',
    thumbnail: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=400&q=80',
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01'
  }
];
