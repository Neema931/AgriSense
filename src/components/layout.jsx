import "./style.css";

export default function Layout({ children, page, onNavigate, userName = "Neema", userRole = "Farm Manager" }) {
  return (
    <div className="app-layout">
      <header className="top-bar">
        <div className="top-bar-left">
          <h2>Welcome back, {userName}</h2>
          <p className="top-bar-subtitle">Today's Farm Status</p>
        </div>
        <div className="top-bar-right">
          <div className="user-profile">
            <div className="profile-avatar">N</div>
            <div className="profile-info">
              <p className="profile-name">{userName}</p>
              <p className="profile-role">{userRole}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="main-content">
        {children}
      </div>
    </div>
  );
}
