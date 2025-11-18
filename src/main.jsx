// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignUpComponent from "./pages/signUp/SignUpComponent";
import SignInComponent from "./pages/signIn/SignInComponent";
import ResetPasswordComponent from "./pages/ResetPasswordComponent";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

// ProtectedRoute
import ProtectedRoute from "./pages/Protected";

// Your search file
import Search from "./pages/Search";

// ⭐ NEW — SALE PAGE
import SalePage from "./pages/SalePage"; // <-- Make sure this file exists!

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Redirect to Main */}
        <Route path="/" element={<Navigate to="/main" />} />

        {/* Signup */}
        <Route path="/signup" element={<SignUpComponent />} />

        {/* Signin */}
        <Route path="/signin" element={<SignInComponent />} />

        {/* Reset */}
        <Route path="/reset" element={<ResetPasswordComponent />} />

        {/* Protected Main */}
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />

        {/* ⭐ NEW — Protected SALE Page */}
        <Route
          path="/sale"
          element={
            <ProtectedRoute>
              <SalePage />
            </ProtectedRoute>
          }
        />

        {/* Protected Search */}
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
