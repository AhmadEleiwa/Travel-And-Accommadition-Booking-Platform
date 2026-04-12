import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { MOCK_HOTELS, MOCK_ROOMS } from "@/constants";
import BookingSummarySection from "../../components/BookingSummarySection";
import  GuestDetailsSection  from "../../components/GuestDetailsSection";
import  PaymentSection  from "../../components/PaymentSection";
import PriceBreakdownCard from "@/components/PriceBreakdownCard";
import  SupportCard  from "@/components/SupportCard";


export const CheckoutPage = () => {
  const { hotelId, roomId } = useParams<{
    hotelId: string;
    roomId: string;
  }>();
  console.log(hotelId)
  console.log(roomId)
  const hotel = MOCK_HOTELS.find((h) => h.id === hotelId);
  const room = MOCK_ROOMS.find((r) => r.id === roomId);

  if (!hotel || !room) {
    return <Box sx={{ p: 10, textAlign: "center" }}>Booking not found</Box>;
  }

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", py: 6 }}>
      <Box sx={{ maxWidth: "85%", margin: "auto" }}>
        <Box
          sx={{
            display: { xs: "block", lg: "flex" },
            gap: 12,
          }}
        >
          {/* Left Column: Booking Flow */}
          <Box sx={{ flex: 1 }}>
            <BookingSummarySection hotel={hotel} room={room} />
            <GuestDetailsSection />

            <PaymentSection />
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
              <PriceBreakdownCard room={room} />
              <SupportCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};