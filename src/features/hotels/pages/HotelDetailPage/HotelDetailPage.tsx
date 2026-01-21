import { MOCK_HOTELS, MOCK_ROOMS } from "@/constants";
import {Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { AvailableRoomsSection } from "../../components/AvailableRoomsSection/AvailableRoomsSection";
import { GallerySection } from "../../components/GallerySection/GallerySection";
import { SummarySection } from "../../components/SummarySection/SummarySection";
import { MapCard } from "@/components/MapCard/MapCard";
import { ConciergeCard } from "@/components/ConciergeCard/ConciergeCard";

export const HotelDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const hotel = MOCK_HOTELS.find((p) => p.id === id);
  const rooms = MOCK_ROOMS;
  console.log(hotel);
  if (!hotel) {
    return <Box sx={{ p: 10, textAlign: "center" }}>Hotel not found</Box>;
  }

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", py: 6 }}>
      <Box sx={{ maxWidth: "85%", margin: "auto" }}>
        <GallerySection
          images={[
            hotel.thumbnail,
            ...hotel.images,
            ...rooms.map((p) => p.thumbnail),
          ]}
        />
        <Box
          sx={{
            display: { xs: "block", lg: "flex" },
            gap: 12,
          }}
        >
          {/* Left Column: Summary + Rooms */}
          <Box sx={{ flex: 1 }}>
            <SummarySection hotel={hotel} />
            <AvailableRoomsSection hotelId={hotel.id} rooms={rooms} />
          </Box>

          {/* Right Column: Sticky Sidebar */}
          <Box sx={{ width: { lg: 380 }, mt: { xs: 6, lg: 0 } }}>
            <Box
              sx={{
                position: "sticky",
                top: 96,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <MapCard />
              <ConciergeCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
