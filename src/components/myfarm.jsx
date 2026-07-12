import "./style.css";

export default function MyFarm() {
  return (
    <section className="module-shell">
      <div className="section-heading">
        <p className="eyebrow">My Farm</p>
        <h2>Farm profile, maize fields, and growth stages</h2>
        <p>View your land, planting dates, equipment, and maize field progress from one place.</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>Farm Overview</h3>
          <p>12 hectares, maize crop, current growth stage: flowering.</p>
        </div>
        <div className="feature-card">
          <h3>Planting Calendar</h3>
          <p>Next planting window begins in 3 days for the south field.</p>
        </div>
        <div className="feature-card">
          <h3>Equipment</h3>
          <p>Tractor, irrigation pumps, and remote sensors are active.</p>
        </div>
      </div>
    </section>
  );
}
 