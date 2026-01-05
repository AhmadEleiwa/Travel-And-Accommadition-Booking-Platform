import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import DateField from "../../../components/DateField";
import GuestPicker, { type GuestType } from "../../../components/GuestPicker";
import LocationField from "../../../components/LocationField";
import { SearchButton } from "../../../components/Buttons";
import type { SearchBarProps } from "./SearchBar.type";
export const SearchBar: React.FC<SearchBarProps> = ({ initialQuery = "" }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);
  const [checkIn, setCheckIn] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [checkOut, setCheckOut] = useState(
    new Date(Date.now() + 86400000).toISOString().split("T")[0],
  );
  const [guests, setGuests] = useState<GuestType>({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      q: query,
      in: checkIn,
      out: checkOut,
      a: guests.adults.toString(),
      c: guests.children.toString(),
      r: guests.rooms.toString(),
    });
    navigate(`/search?${params.toString()}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        p: { xs: 2, md: 3 },
        bgcolor: "white",
        borderRadius: 4,
        boxShadow: 6,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        border: "1px solid",
        borderColor: "grey.200",
        zIndex: 10,
      }}
    >
      <LocationField query={query} setQuery={setQuery} />
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <DateField
          data-testid="check-in"
          label="Check In"
          value={checkIn}
          setValue={setCheckIn}
        />
        <DateField
          data-testid="check-out"
          label="Check Out"
          value={checkOut}
          setValue={setCheckOut}
        />
        <GuestPicker guests={guests} setGuests={setGuests} />
      </Stack>
      <SearchButton />
      {/* <SearchButton /> */}
    </Box>
  );
};
