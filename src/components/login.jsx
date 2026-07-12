import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../assets/agriLogo.png";
import { request } from "../utils/api";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setStatus("Authenticating...");

    try {
      const data = await request("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      localStorage.setItem("agrisense-token", data.access_token);
      setUser(data.user);
      setStatus(`Welcome back, ${data.user.name}!`);
      navigate("/dashboard");
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="brand-block">
          <img src={logo} alt="AgriSense logo" className="brand-logo" />
          <p>Secure access to your farm intelligence workspace.</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <div className="auth-actions-row">
            <label className="checkbox-row">
              <input type="checkbox" />
              Remember me
            </label>
            <button type="button" className="text-btn" onClick={() => navigate("/forgot-password")}>Forgot Password?</button>
          </div>

          <button type="submit" className="auth-submit-btn">Log in</button>
        </form>

        {status ? <p className="status-message">{status}</p> : null}

        <div className="auth-footer">
          <p>
            New to AgriSense? <button type="button" className="text-btn" onClick={() => navigate("/signup")}>Create account</button>
          </p>
        </div>
      </div>
    </div>
  );
}
