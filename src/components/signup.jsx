import { useState } from "react";
import "./style.css";

export default function Signup({ onNavigate }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Signup Data:", {
            name,
            email,
            password,
        });
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <Navbar onNavigate={onNavigate} />
                <div className="brand">
                    <h1>AGRI SENSE 🌱</h1>
                    <p>
                        Join AGRI SENSE today and start making smarter farming decisions.
                    </p>
                </div>

                <h2>Create Account</h2>

                <form onSubmit={handleSignup}>

                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Sign Up
                    </button>

                </form>

                <p className="login-link">
                    Already have an account? <button type="button" className="link-button" onClick={() => onNavigate("login")}>Login</button>
                </p>

            </div>
        </div>
    );
}