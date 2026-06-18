import "./style.css";
import logo from "../assets/agriLogo.png";

export default function Navbar({ page, onNavigate }) {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="AgriSense logo" className="logo-icon" />
            </div>

            <nav className="navbar-links">
                <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>Home</a>
                <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate("dashboard"); }}>Dashboard</a>
                <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate("features"); }}>Features</a>
                <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate("services"); }}>Services</a>
                <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate("blog"); }}>Blog</a>
            </nav>
          
            <div className="navbar-buttons">
                <button className="login-btn" onClick={() => onNavigate("login")}>Login</button>
                <button className="signup-btn" onClick={() => onNavigate("signup")}>Sign Up</button>
            </div>
        </div>
    );
}
