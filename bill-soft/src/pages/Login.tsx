import React, { useState }  from "react";
import type { FormEvent }  from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Dummy check — replace with backend validation later
    if (email === "admin@gmail.com" && password === "admin123") {
      //alert("✅ Login successful!");
      onLogin();
      navigate("/"); // Redirect here
    } else {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Sign in to access your billing dashboard</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="footer-text">
          © {new Date().getFullYear()} BillSoft Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};


export default Login;
