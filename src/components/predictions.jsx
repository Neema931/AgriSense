import "./style.css";

export default function Predictions() {
  return (
    <section className="module-shell">
      <div className="section-heading">
        <p className="eyebrow">AI Predictions</p>
        <h2>Forecasts for maize yield, pests, and water needs</h2>
        <p>See prediction outcomes across maize disease, irrigation, and resource use.</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>Yield Prediction</h3>
          <p>1.8 tons/acre projected with current inputs.</p>
        </div>
        <div className="feature-card">
          <h3>Disease Risk</h3>
          <p>Low risk in 72% of monitored zones.</p>
        </div>
        <div className="feature-card">
          <h3>Water Need</h3>
          <p>Adjust irrigation 12% lower than last cycle.</p>
        </div>
      </div>
    </section>
  );
}
