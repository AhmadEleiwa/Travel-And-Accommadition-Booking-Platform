import { Box, Container } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Hotel } from "../../../hotels";
import { searchHotels } from "../../API/searchAPI";
import { SearchFilters } from "../../components/SearchFilters/SearchFilters";
import { SearchHeader } from "../../components/SearchHeader/SearchHeader";
import { SearchHotelList } from "../../components/SearchHotelList/SearchHotelList";
import SearchBar from "../../components/SearchBar";
// import {}
export const SearchPage = () => {
  const [params] = useSearchParams();
  const query = params.get("q") ?? "";

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    priceMax: 2000,
    stars: 0,
  });

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const response = await searchHotels({
          q: query,
          priceMax: filters.priceMax,
          stars: filters.stars,
        });
        setHotels(response.items);
      } catch (err) {
        console.error(err);
        setHotels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [query, filters]);

  return (
    <>
      <Box bgcolor="grey.900" py={4}>
        <Container maxWidth="lg">
          <SearchBar initialQuery={query} />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, pb: 10 }}>
        <Box display="flex" gap={4}>
          <SearchFilters filters={filters} onChange={setFilters} />
          <Box flex={1}>
            <SearchHeader
              loading={loading}
              count={hotels.length}
              query={query}
            />
            <SearchHotelList hotels={hotels} loading={loading} />
          </Box>
        </Box>
      </Container>
    </>
  );
};
