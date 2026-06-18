import "./style.css";

export default function Sidebar({ page, onNavigate }) {
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
        <div className="sidebar-logo">
          <span className="logo-icon">🌱</span>
          <span className="logo-text">AgriSense</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map(({ id, label, icon }) => (
            <li key={id}>
              <button
                className={`sidebar-link ${page === id ? "active" : ""}`}
                onClick={() => onNavigate(id)}
              >
                <span className="nav-icon">{icon}</span>
                <span className="nav-label">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-version">
          <p>AgriSense Pro</p>
          <span>v2.1.0</span>
        </div>
      </div>
    </aside>
  );
}
