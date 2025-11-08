import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signInStyle.css";

const STORAGE_KEY = "fake_auth_users";

// 🔹 Load users from localStorage (initialize with default admin if empty)
const getStorageUsers = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      console.error("KEY ERROR");
    }
  }
  const users = [{ email: "admin@gmail.com", password: "123" }];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return users;
};

export default function SignInComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = getStorageUsers();
    const foundUser = users.find(
      (u) => u.email.trim() === email.trim() && u.password.trim() === password.trim()
    );

    if (foundUser) {
      localStorage.setItem("fake_auth_log_in", "true");
      navigate("/main");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <img
          src="https://media.istockphoto.com/id/860656468/photo/cute-and-gorgeous-latin-women-in-fashion-dress.jpg?s=612x612&w=0&k=20&c=5MzDtpGCWsdHaxRiSScEAEAimq6PcPnDQ8wicg9Oues="
          alt="Latina Model"
        />
      </div>

      <div className="signin-right">
        <div className="signin-card">
          <h1>Sign In</h1>
          <p className="signup-link">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="error">{error}</div>}

            <div className="forgot">
              <Link to="/reset">Forgot password?</Link>
            </div>

            <button
              type="submit"
              className="signin-btn"
              disabled={!email || !password}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
