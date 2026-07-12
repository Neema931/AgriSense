import "./style.css";

export default function Reports() {
  return (
    <section className="module-shell">
      <div className="section-heading">
        <p className="eyebrow">Reports</p>
        <h2>Generate PDF, Excel, and seasonal summaries</h2>
        <p>View maize performance comparisons and export the insights your team needs.</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>Weekly Summary</h3>
          <p>Review maize progress, weather, and alert performance.</p>
        </div>
        <div className="feature-card">
          <h3>Harvest Plan</h3>
          <p>Compare yield projections and adjust schedules quickly.</p>
        </div>
        <div className="feature-card">
          <h3>Export Data</h3>
          <p>Download Excel and PDF reports for stakeholders.</p>
        </div>
      </div>
    </section>
  );
}
