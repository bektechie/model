import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./resetPasswordStyle.css";

const STORAGE_KEY = "fake_auth_users";

// helper: get user list
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

export default function ResetPasswordComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const users = getStorageUsers();
    const userIndex = users.findIndex((u) => u.email === email.trim());

    if (userIndex === -1) {
      setError("Email not found");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    users[userIndex].password = newPassword;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    setMessage("Password reset successful!");
    setEmail("");
    setNewPassword("");
    setConfirmPassword("");

    setTimeout(() => navigate("/signin"), 1500);
  };

  return (
    <div className="reset-container">
      <div className="reset-left">
        <img
          src="https://media.istockphoto.com/id/860656468/photo/cute-and-gorgeous-latin-women-in-fashion-dress.jpg?s=612x612&w=0&k=20&c=5MzDtpGCWsdHaxRiSScEAEAimq6PcPnDQ8wicg9Oues="
          alt="Latina Model"
        />
      </div>

      <div className="reset-right">
        <div className="reset-card">
          <h1>Reset Password</h1>
          <p className="back-link">
            Remember your password? <Link to="/signin">Sign In</Link>
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              type="password"
              placeholder="Enter new password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {error && <div className="error">{error}</div>}
            {message && <div className="success">{message}</div>}

            <button type="submit" className="reset-btn">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
