import "./style.css";

export default function Alerts() {
  return (
    <section className="module-shell">
      <div className="section-heading">
        <p className="eyebrow">Alerts</p>
        <h2>Critical warnings and recommendations</h2>
        <p>Stay ahead of disease, weather, and irrigation risks with prioritized alerts.</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>Maize Disease Alert</h3>
          <p>Field 3 showing early signs of leaf spot on maize; inspect within 24 hours.</p>
        </div>
        <div className="feature-card">
          <h3>Rain Warning</h3>
          <p>Heavy rainfall expected later this week; delay fertilizer spread.</p>
        </div>
        <div className="feature-card">
          <h3>Moisture Low</h3>
          <p>Soil moisture is below threshold in the northwest zone.</p>
        </div>
      </div>
    </section>
  );
}
