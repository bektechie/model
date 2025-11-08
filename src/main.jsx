import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpComponent from "./pages/signUp/SignUpComponent";
import SignInComponent from "./pages/signIn/SignInComponent";
import ResetPasswordComponent from "./pages/ResetPasswordComponent";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

// ✅ This is the correct React 18+ way to render
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Sign Up Page */}
        <Route path="/" element={<SignUpComponent />} />

        {/* Sign In Page */}
        <Route path="/signin" element={<SignInComponent />} />
        <Route path="/reset" element={<ResetPasswordComponent />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />

        {/* Example: Main page after login */}
        <Route
          path="/main"
          element={
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <h1>Welcome to the Main Page!</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
