import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signInStyle.css";

const STORAGE_KEY = "fake_auth_users";

const getStorageUsers = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
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
    const users = getStorageUsers();
    const foundUser = users.find(
      (u) => u.email === email.trim() && u.password === password.trim()
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
      {/* Left Image */}
      <div className="signin-left">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=969&q=80"
          alt="Model"
        />
      </div>

      {/* Right Card */}
      <div className="signin-right">
        <div className="signin-card">
          <h1>Sign In</h1>
          <p className="signup-link">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
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

            {error && <div className="error">{error}</div>}

            <button type="submit" className="signin-btn">
              Login
            </button>
          </form>

          <div className="forgot">
            <Link to="/reset">Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
