import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpComponent from "./pages/signUp/SignUpComponent";
import SignInComponent from "./pages/signIn/SignInComponent";
import ResetPasswordComponent from "./pages/ResetPasswordComponent";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

// ✅ Updated import name and path
import ProtectedRoute from "./pages/Protected"; 
import Search from "./pages/Search";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing: redirect to MainPage */}
        <Route path="/" element={<Navigate to="/main" />} />

        {/* Signup */}
        <Route path="/signup" element={<SignUpComponent />} />

        {/* Signin */}
        <Route path="/signin" element={<SignInComponent />} />

        {/* Reset Password */}
        <Route path="/reset" element={<ResetPasswordComponent />} />

        {/* Protected Main Page */}
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />

        {/* Protected Search Page */}
       <Route path="/search" element={<Search />} />


        {/* Catch all unknown routes */}
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
