import "./style.css";

export default function Layout({ children, userName = "Neema", userRole = "Farm Manager" }) {
  return (
    <div className="app-layout">
      <header className="top-bar">
        <div className="top-bar-left">
          <p className="eyebrow">Smart Farm Command Center</p>
          <h2>Welcome back, {userName}</h2>
          <p className="top-bar-subtitle">Current conditions, forecasts, and alerts in one premium view.</p>
        </div>
        <div className="top-bar-right">
          <div className="status-pill">☀️ 28°C · Low wind</div>
          <div className="user-profile">
            <div className="profile-avatar">N</div>
            <div className="profile-info">
              <p className="profile-name">{userName}</p>
              <p className="profile-role">{userRole}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="main-content">{children}</div>
    </div>
  );
}
