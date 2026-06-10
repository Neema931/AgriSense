import "./style.css";

export default function Navbar({ onNavigate }) {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <span className="logo-icon">🌾</span>
                <span className="logo-text">AgriSense</span>
            </div>

            <ul className="navbar-links">
                <li><button className="nav-link" onClick={() => onNavigate && onNavigate("home")}>Home</button></li>
                <li><button className="nav-link" onClick={() => onNavigate && onNavigate("features")}>Features</button></li>
                <li><button className="nav-link" onClick={() => onNavigate && onNavigate("services")}>Services</button></li>
                <li><button className="nav-link" onClick={() => onNavigate && onNavigate("blog")}>Blog</button></li>
            </ul>

            <div className="navbar-buttons">
                <button className="login-btn" onClick={() => onNavigate("login")}>Login</button>
                <button className="signup-btn" onClick={() => onNavigate("signup")}>Sign Up</button>
            </div>
        </div>
    );
}
