import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../assets/agriLogo.png";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("request");

  const handleRequest = (event) => {
    event.preventDefault();
    setStep("sent");
  };

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="brand-block">
          <img src={logo} alt="AgriSense logo" className="brand-logo" />
          <p>Recover access to your farm intelligence account.</p>
        </div>

        {step === "request" ? (
          <form onSubmit={handleRequest} className="auth-form">
            <label htmlFor="reset-email">Email</label>
            <input id="reset-email" type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <button type="submit" className="auth-submit-btn">Send reset link</button>
          </form>
        ) : (
          <div className="reset-success">
            <h3>Check your email</h3>
            <p>We sent a secure reset link to {email || "your inbox"}. Follow it to continue.</p>
            <button type="button" className="auth-submit-btn" onClick={() => navigate("/login")}>Back to login</button>
          </div>
        )}
      </div>
    </div>
  );
}
