import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
import logo from "../assets/agriLogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const links = [
    { label: "Home", target: "/" },
    { label: "Features", target: "/features" },
    { label: "How it Works", target: "/how-it-works" },
    { label: "Contact Us", target: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`navbar${hidden ? " is-hidden" : ""}`}>
      <button className="navbar-logo" onClick={() => navigate("/")} type="button">
        <img src={logo} alt="AgriSense logo" className="logo-icon" />
      </button>

      <nav className="navbar-links" aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink key={link.label} className="nav-link" to={link.target} end={link.target === "/"}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="navbar-buttons">
        <button className="login-btn" onClick={() => navigate("/login")} type="button">Login</button>
        <button className="signup-btn" onClick={() => navigate("/signup")} type="button">Sign Up</button>
      </div>
    </header>
  );
}
