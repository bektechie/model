import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signUpStyle.css";

const STORAGE_KEY = "fake_auth_users";

const getStorageUsers = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  const users = [{ email: "admin@gmail.com", password: "123" }];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return users;
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

    const users = getStorageUsers();
    if (users.some((u) => u.email === email.trim())) {
      setError("Email already exists");
      return;
    }

    users.push({ email: email.trim(), password: password.trim() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

    setSuccess("Account created successfully!");
    setTimeout(() => navigate("/signin"), 1000);
  };

  return (
    <div className="signup-container">
      {/* Left Image */}
      <div className="signup-left">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=969&q=80"
          alt="Model"
        />
      </div>

      {/* Right Card */}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />

            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
