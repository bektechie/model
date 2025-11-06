import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpComponent from "./pages/signUp/SignUpComponent"; // simple placeholder
import SignInComponent from "./pages/signIn/SignInComponent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Sign Up Page */}
        <Route path="/" element={<SignUpComponent />} />

        {/* Sign In Page */}
        <Route path="/signin" element={<SignInComponent />} />

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
