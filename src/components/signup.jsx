import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../assets/agriLogo.png";
import { request } from "../utils/api";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setStatus("Passwords do not match.");
      return;
    }

    try {
      await request("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, password }),
      });

      setStatus("Account ready. You can sign in now.");
      navigate("/login");
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <div className="auth-shell">
        <div className="auth-card">
        <div className="brand-block">
          <img src={logo} alt="AgriSense logo" className="brand-logo" />
        </div>

        <form onSubmit={handleSignup} className="auth-form">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Enter your full name" value={name} onChange={(event) => setName(event.target.value)} required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required />

          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="Enter your phone number" value={phone} onChange={(event) => setPhone(event.target.value)} required />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Create a password" value={password} onChange={(event) => setPassword(event.target.value)} required />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />


          <button type="submit" className="auth-submit-btn">Create account</button>
        </form>

        {status ? <p className="status-message">{status}</p> : null}

        <div className="auth-footer">
          <p>
            Already have an account? <button type="button" className="text-btn" onClick={() => navigate("/login")}>Log in</button>
          </p>
        </div>
        </div>
    </div>
  );
}