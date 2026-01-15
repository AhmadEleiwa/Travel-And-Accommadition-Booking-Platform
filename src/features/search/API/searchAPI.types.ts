// features/search/api/searchAPI.types.ts

import type { Hotel } from "../../hotels";

/**
 * URL-driven search params
 * Mirrors query string structure
 */
export interface SearchQueryParams {
  q?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  rooms?: number;

  // filters
  priceMin?: number;
  priceMax?: number;
  stars?: number;

  // sorting / pagination
  sortBy?: "price" | "rating" | "recommended";
  page?: number;
  limit?: number;
}

/**
 * API response shape
 * Backend-friendly & scalable
 */
export interface SearchResponse {
  items: Hotel[];
  total: number;
  page: number;
  limit: number;
}
