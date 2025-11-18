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
    <div className="signup-wrapper">
      {/* LEFT – full height image */}
      <div className="signup-left">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=969&q=80"
          alt="Model"
        />
      </div>

      {/* RIGHT – clean form */}
      <div className="signup-right">
        <h1 className="signup-title">Sign Up</h1>
        <p className="signup-subtitle">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input type="text" placeholder="Marvin" required />

          <label>Last Name</label>
          <input type="text" placeholder=" " />

          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="terms">
            <input type="checkbox" required />
            <span>
              I agree to send an SMS code.{" "}
              <a href="#">Privacy and Policy</a>
            </span>
          </div>

          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}

          <button className="signup-submit">Create account</button>
        </form>
      </div>
    </div>
  );
}
