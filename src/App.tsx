// import { HashRouter, Routes, Route } from 'react-router-dom'; // 1. Import Routes
// import HotelCard from './features/hotels/HotelCard';
// import { MOCK_HOTELS } from './constants';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/router";
import type { User } from "./features/auth";
import {useState } from "react";
// import SearchBar from "./features/search/SearchBar";
// import { requestLogin } from "./features/auth/authAPI";
import { SnackbarProvider } from "./features/snackbar/SnackbarProvider.tsx";
import { MainLayout } from "./layouts/Layout.tsx";

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
      <MainLayout
        user={mockUser}
        onLogout={() => {
          setMockUser(null);
        }}
      >
        <AppRouter />
      </MainLayout>
      {/* <SearchBar initialQuery="Japan" /> */}
    </BrowserRouter>
  );
}
