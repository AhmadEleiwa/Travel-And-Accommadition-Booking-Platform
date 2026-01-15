// features/search/api/searchAPI.ts

// import apiClient from "@/services/api/client";
import type { SearchQueryParams, SearchResponse } from "./searchAPI.types";
import { MOCK_HOTELS } from "@/constants";
import type { Hotel } from "@/features/hotels";
// import { type Hotel } from "@/features/hotels";
export const searchHotels = async (
  params: SearchQueryParams
): Promise<SearchResponse> => {
  // Simulate API delay
  await new Promise((res) => setTimeout(res, 300));

  let filtered: Hotel[] = MOCK_HOTELS;

  // Filter by query (name or location)
  if (params.q) {
    const qLower = params.q.toLowerCase();
    filtered = filtered.filter(
      (h) =>
        h.name.toLowerCase().includes(qLower) ||
        h.location.toLowerCase().includes(qLower)
    );
  }

  // Filter by price
  if (params.priceMin !== undefined) {
    filtered = filtered.filter(
      (h) => (h.discountedPrice ?? h.basePrice) >= params.priceMin!
    );
  }
  if (params.priceMax !== undefined) {
    filtered = filtered.filter(
      (h) => (h.discountedPrice ?? h.basePrice) <= params.priceMax!
    );
  }

  // Filter by stars
  if (params.stars && params.stars > 0) {
    filtered = filtered.filter((h) => h.starRating >= params.stars!);
  }

  // Pagination
  const page = params.page ?? 1;
  const limit = params.limit ?? 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    items: filtered.slice(start, end),
    total: filtered.length,
    page,
    limit,
  };
};