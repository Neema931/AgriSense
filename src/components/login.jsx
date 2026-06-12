import { useState } from "react";
import "./style.css";
import logo from "../assets/agriLogo.png";


export default function Login({ onNavigate }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("login data:", { email, password });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="brand">
                    <img src={logo} alt="AgriSense logo" className="brand-logo" />
                </div>

                <form onSubmit={handleLogin}>
                    <label>Email or Phone Number</label>
                    <input
                        type="text"
                        placeholder="Enter your email or phone number"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="links">
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>
                </form>

                <p>
                    Don't have an account? <a href="#" className="link-button" onClick={() => onNavigate("signup")}>Sign up</a>
                </p>
            </div>
        </div>
    );
}
