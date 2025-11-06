import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signUpStyle.css"; // CSS for Sign-Up

const STORAGE_KEY = "fake_auth_credents";

const getStorageCredents = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      console.error("KEY ERROR");
    }
  }
  return null;
};

export default function SignUpComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const existing = getStorageCredents();
    if (existing && email === existing.email) {
      setError("Email already exists");
      return;
    }

    const newCredents = { email, password };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCredents));
    setSuccess("Account created successfully!");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/signin"); // redirect to Sign-In after signup
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img
          src="https://media.istockphoto.com/id/860656468/photo/cute-and-gorgeous-latin-women-in-fashion-dress.jpg?s=612x612&w=0&k=20&c=5MzDtpGCWsdHaxRiSScEAEAimq6PcPnDQ8wicg9Oues="
          alt="Latina Model"
        />
      </div>

      <div className="signup-right">
        <div className="signup-card">
          <h1>Sign Up</h1>
          <p className="signup-link">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="error">{error && error}</div>
            <div className="success">{success && success}</div>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
