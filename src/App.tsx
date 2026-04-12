// import { HashRouter, Routes, Route } from 'react-router-dom'; // 1. Import Routes
// import HotelCard from './features/hotels/HotelCard';
// import { MOCK_HOTELS } from './constants';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/router";
import type { User } from "./features/auth";
import { useState } from "react";
// import SearchBar from "./features/search/SearchBar";
// import { requestLogin } from "./features/auth/authAPI";
import { SnackbarProvider } from "./features/snackbar/SnackbarProvider.tsx";
import { MainLayout } from "./layouts/Layout.tsx";
import { useAppDispatch, useAppSelector } from "./store/store.ts";
import { logout } from "./features/auth/authSlice.ts";

export default function App() {
  const authState = useAppSelector(p => p.auth)
  const dispatcher = useAppDispatch()

  return (
    <BrowserRouter>
      <SnackbarProvider />
      <MainLayout
        user={authState.user}
        onLogout={() => {
        dispatcher(logout())
        }}
      >
        <AppRouter />
      </MainLayout>
      {/* <SearchBar initialQuery="Japan" /> */}
    </BrowserRouter>
  );
}
