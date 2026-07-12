import { NavLink } from "react-router-dom";
import "./style.css";

export default function Sidebar({ onLogout }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "myfarm", label: "My Farm", icon: "🌾" },
    { id: "weather", label: "Weather", icon: "🌤️" },
    { id: "predictions", label: "Predictions", icon: "🔮" },
    { id: "alerts", label: "Alerts", icon: "🔔" },
    { id: "reports", label: "Reports", icon: "📄" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span className="sidebar-mark">🌱</span>
          <div>
            <p className="sidebar-title">AgriSense</p>
            <span className="sidebar-subtitle">Operations</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Dashboard navigation">
        <ul>
          {navItems.map(({ id, label, icon }) => (
            <li key={id}>
              <NavLink to={`/${id}`} className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}>
                <span className="nav-icon">{icon}</span>
                <span className="nav-label">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-link logout-link" onClick={onLogout} type="button">
          <span className="nav-icon">🚪</span>
          <span className="nav-label">Logout</span>
        </button>
        <div className="sidebar-version">
          <p>AgriSense Pro</p>
          <span>v2.1.0</span>
        </div>
      </div>
    </aside>
  );
}
