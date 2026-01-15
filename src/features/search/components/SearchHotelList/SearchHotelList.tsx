import { Stack, Skeleton, Typography } from "@mui/material";
import HotelCard from "../../../hotels/components/HotelCard";
import type { SearchHotelListProps } from "./SearchHotelList.types";

export const SearchHotelList: React.FC<SearchHotelListProps> = ({
  hotels,
  loading,
}) => {
  if (loading) {
    return (
      <Stack spacing={2}>
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} height={200} variant="rounded" />
        ))}
      </Stack>
    );
  }

  if (!hotels.length) {
    return (
      <Typography align="center" mt={10} color="text.secondary">
        No hotels match your criteria.
      </Typography>
    );
  }

  return (
    <Stack data-testid={"sss"} spacing={3}>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} variant="list" />
      ))}
    </Stack>
  );
};
