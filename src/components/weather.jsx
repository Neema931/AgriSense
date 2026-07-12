import "./style.css";

export default function Weather() {
  return (
    <section className="module-shell">
      <div className="section-heading">
        <p className="eyebrow">Weather Intelligence</p>
        <h2>Live weather and forecasts for your fields</h2>
        <p>Track conditions, alerts, and climate trends in one premium view.</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>Current Conditions</h3>
          <p>28°C • Light breeze • Clear skies</p>
        </div>
        <div className="feature-card">
          <h3>7-Day Forecast</h3>
          <p>Rain expected Thursday with cooler overnight lows.</p>
        </div>
        <div className="feature-card">
          <h3>Soil Climate</h3>
          <p>Moisture trending steady; irrigation is recommended today.</p>
        </div>
      </div>
    </section>
  );
}
