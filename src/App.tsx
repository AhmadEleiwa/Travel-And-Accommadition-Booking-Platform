// import { HashRouter, Routes, Route } from 'react-router-dom'; // 1. Import Routes
// import HotelCard from './features/hotels/HotelCard';
// import { MOCK_HOTELS } from './constants';

import { Container } from "@mui/material";
import { MOCK_HOTELS } from "./constants";
import HotelCard from "./features/hotels/HotelCard";
import { HashRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    // <h1>sdsd</h1>
    <HashRouter>
      <Routes>
        {" "}
        {/* 2. Add this wrapper */}
        <Route
          index
          path="/"
          element={
            <div>
              <Container sx={{ width: "100%", margin: "10%" }}>
                <HotelCard variant="featured" hotel={MOCK_HOTELS[0]} />
              </Container>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}
