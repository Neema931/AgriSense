import "./style.css";

export default function Settings() {
  return (
    <section className="module-shell">
      <div className="section-heading">
        <p className="eyebrow">Settings</p>
        <h2>Account and farm preferences</h2>
        <p>Customize notifications, units, language, and data integrations.</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>Notifications</h3>
          <p>Enable alerts for weather, pests, and irrigation events.</p>
        </div>
        <div className="feature-card">
          <h3>Units & Preferences</h3>
          <p>Switch between metric and imperial farm metrics.</p>
        </div>
        <div className="feature-card">
          <h3>Security</h3>
          <p>Manage password recovery and account access.</p>
        </div>
      </div>
    </section>
  );
}
