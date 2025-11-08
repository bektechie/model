import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signUpStyle.css";

const STORAGE_KEY = "fake_auth_users";

// 🔹 Load or initialize users
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
    if (users.some((u) => u.email.trim() === email.trim())) {
      setError("Email already exists");
      return;
    }

    const newUsers = [...users, { email: email.trim(), password: password.trim() }];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsers));
    setSuccess("Account created successfully!");

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Redirect after short delay
    setTimeout(() => navigate("/signin"), 1000);
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

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}

            <button type="submit" className="signup-btn">
              Sign Up
            </button>

            <div className="social-login">
              <p>Or continue with</p>
              <div className="social-icons">
                <a href="#" className="social-btn google">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt="Facebook"
                  />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
