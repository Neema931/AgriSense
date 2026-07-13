import { useNavigate } from "react-router-dom";
import "./style.css";
import hero from "../assets/Agri_01.jpg";

const highlights = [
  { title: "Soil Moisture", value: "74%", detail: "Optimal for irrigation" },
  { title: "Pest Risk", value: "Low", detail: "No major outbreak" },
  { title: "Fertilizer Reminder", value: "Due in 3 days", detail: "Plan nutrient application" },
];

const marketPrices = [
  { label: "Local Maize", value: "KES 3,400/bag" },
  { label: "Regional Average", value: "KES 3,250/bag" },
  { label: "Forecast", value: "Stable this week" },
];

const tips = [
  "Best planting practices for July",
  "How to prevent maize stem borers",
  "When to monitor irrigation after early rain",
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
     
      <section className="hero-section" id="top">
        <div className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">Precision farm support</p>
            <h2>Smarter field decisions, powered by real-time insight.</h2>
            <h4>Clear guidance for weather, crop health, and market movement.</h4>
            <p className="hero-subtitle">
              AgriSense brings live field information together so growers can respond faster and plan with confidence.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" type="button" onClick={() => navigate("/signup")}>Get Started</button>
              <button className="secondary-btn" type="button" onClick={() => navigate("/features")}>Explore Features</button>
            </div>
            <div className="hero-badges">
              <span>Live weather updates</span>
              <span>Crop risk alerts</span>
              <span>Market insights</span>
            </div>
          </div>
          <div className="hero-visual" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero-panel">
              <p className="hero-panel-title">Today's overview</p>
              <h3>High confidence across your key zones.</h3>
              <p>Moisture, pest pressure, and market movement update automatically.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="care-grid">
          <article className="care-card">
            <div className="care-icon">☔</div>
            <h3>Weather watch</h3>
            <p>Track rainfall, humidity, and forecasts before fieldwork begins.</p>
          </article>
          <article className="care-card">
            <div className="care-icon">🌱</div>
            <h3>Crop health</h3>
            <p>Spot emerging risks early with simple, actionable insights.</p>
          </article>
          <article className="care-card">
            <div className="care-icon">📈</div>
            <h3>Market clarity</h3>
            <p>Monitor pricing trends so you know when to buy, store, or sell.</p>
          </article>
        </div>
      </section>

      <section className="section-shell section-card">
        <div className="section-heading">
          <h2 className="eyebrow">Weather Snapshot</h2>
          <h4>Keep an eye on the conditions that matter most.</h4>
          <p>Get a quick view of rainfall, temperature, humidity, and weather alerts before stepping into the field.</p>
        </div>
        <div className="weather-grid">
          <div className="weather-card highlight-card">
            <p className="mini-label">Forecast</p>
            <h3>24°C</h3>
            <p>Light showers expected by evening.</p>
          </div>
          <div className="weather-card">
            <p className="mini-label">Humidity</p>
            <h3>68%</h3>
            <p>Suitable for crop monitoring.</p>
          </div>
          <div className="weather-card">
            <p className="mini-label">Rainfall</p>
            <h3>12 mm</h3>
            <p>Moderate rain in the next 24h.</p>
          </div>
          <div className="weather-card alert-card">
            <p className="mini-label">Alert</p>
            <h3>Storm risk</h3>
            <p>Prepare drainage and secure loose equipment.</p>
          </div>
        </div>
      </section>

      <section className="section-shell section-card">
        <div className="section-heading">
          <p className="eyebrow">Crop Health Highlights</p>
          <h2>Monitor what matters without the clutter.</h2>
          <p>Simple health signals help you understand moisture, pest pressure, and follow-up action.</p>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="metric">{item.value}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-card">
        <div className="section-heading">
          <p className="eyebrow">Market Prices</p>
          <h2>Stay close to local and regional market movements.</h2>
          <p>Track maize pricing signals and decide when to sell, store, or prepare for delivery.</p>
        </div>
        <div className="market-shell">
          <div className="market-card">
            <h3>Current maize price ticker</h3>
            <div className="market-list">
              {marketPrices.map((item) => (
                <div className="market-item" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <button className="secondary-btn" type="button" onClick={() => navigate("/features")}>See Full Market Trends</button>
          </div>
        </div>
      </section>

      <section className="section-shell section-card testimonials-shell">
        <div className="section-heading">
          <p className="eyebrow">Smart Tips & Guides</p>
          <h2>Helpful seasonal guidance, updated regularly.</h2>
          <p>Use practical reminders to make the most of each month’s planting, irrigation, and protection window.</p>
        </div>
        <div className="tip-list">
          {tips.map((tip) => (
            <div className="tip-card" key={tip}>
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div>
          <h3>AgriSense</h3>
          <p>Precision insights for resilient agriculture.</p>
        </div>
        <div className="footer-links">
          <button className="text-btn" type="button" onClick={() => navigate("/")}>Home</button>
          <button className="text-btn" type="button" onClick={() => navigate("/features")}>Features</button>
          <button className="text-btn" type="button" onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </footer>
    </div>
  );
}