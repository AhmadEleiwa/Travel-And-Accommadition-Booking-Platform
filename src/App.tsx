// import { HashRouter, Routes, Route } from 'react-router-dom'; // 1. Import Routes
// import HotelCard from './features/hotels/HotelCard';
// import { MOCK_HOTELS } from './constants';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/router";
import Navbar from "./layouts/Navbar/Navbar";
import type { User } from "./features/auth";
import { useEffect, useState } from "react";
// import SearchBar from "./features/search/SearchBar";
// import { requestLogin } from "./features/auth/authAPI";
import { SnackbarProvider } from "./features/snackbar/SnackbarProvider.tsx";

export default function App() {
  const [mockUser, setMockUser] = useState<User | null>({
    email: "ahmad@gmail.com",
    role: "USER",
    username: "ss",
    id: "s",
  });

  return (
    // <h1>sdsd</h1>
    <BrowserRouter>
      <SnackbarProvider />

      <Navbar
        user={mockUser}
        onLogout={() => {
          setMockUser(null);
        }}
      />
      {/* <SearchBar initialQuery="Japan" /> */}
      <AppRouter />
    </BrowserRouter>
  );
}
