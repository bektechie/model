import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // ✅ Check if user is logged in (stored as "true" in localStorage)
  const isLoggedIn = localStorage.getItem("fake_auth_log_in") === "true";

  // ✅ If logged in → show the protected page
  // 🚫 If not → redirect to /signin
  return isLoggedIn ? children : <Navigate to="/signin" replace />;
}
