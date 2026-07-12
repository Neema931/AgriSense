import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../assets/agriLogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const links = [
    { label: "Home", target: "" },
    { label: "Features", target: "features" },
    { label: "How it Works", target: "how-it-works" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  const handleLink = (event, target) => {
    event.preventDefault();
    navigate(`/#${target}`);
  };

  return (
    <header className="navbar">
      <button className="navbar-logo" onClick={() => navigate("/")} type="button">
        <img src={logo} alt="AgriSense logo" className="logo-icon" />
      </button>

      <nav className="navbar-links" aria-label="Primary navigation">
        {links.map((link) => (
          <a
            key={link.label}
            className="nav-link"
            href={`/#${link.target}`}
            onClick={(event) => handleLink(event, link.target)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="navbar-buttons">
        <button className="login-btn" onClick={() => navigate("/login")} type="button">Login</button>
        <button className="signup-btn" onClick={() => navigate("/signup")} type="button">Sign Up</button>
      </div>
    </header>
  );
}
