import Navbar from "./navbar";
import "./style.css";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", yield: 58, rainfall: 45 },
  { month: "Feb", yield: 73, rainfall: 52 },
  { month: "Mar", yield: 84, rainfall: 68 },
  { month: "Apr", yield: 91, rainfall: 75 },
  { month: "May", yield: 96, rainfall: 82 },
];

export default function Dashboard({ onNavigate }) {
  return (
    <div className="dashboard-page">
      <header className="dashboard-topbar">
        <div>
          <p className="eyebrow">Smart Farm Command Center</p>
          <h1>AgriSense Dashboard</h1>
          <p className="dashboard-subtitle">
            Actionable insights, AI-powered recommendations and risk intelligence for modern farming.
          </p>
        </div>
        <div className="dashboard-actions">
          <button className="secondary-btn">Schedule Review</button>
          <button className="primary-btn">Export Report</button>
        </div>
      </header>

      <section className="dashboard-summary">
        <article className="summary-card summary-card-highlight">
          <p>Crop Health</p>
          <h2>Excellent</h2>
          <span className="metric-change positive">+12% last week</span>
        </article>
        <article className="summary-card">
          <p>Yield Forecast</p>
          <h2>1.8 t/acre</h2>
          <span className="metric-change positive">Up 8% vs last season</span>
        </article>
        <article className="summary-card">
          <p>Weather</p>
          <h2>Sunny</h2>
          <span className="metric-change positive">28°C, Low wind</span>
        </article>
        <article className="summary-card">
          <p>Soil Moisture</p>
          <h2>78%</h2>
          <span className="metric-change positive">Optimal range</span>
        </article>
      </section>

      <section className="weather-widgets">
        <h3 className="section-title">Real-Time Monitoring</h3>
        <div className="widgets-grid">
          <div className="weather-widget">
            <div className="widget-icon">🌡️</div>
            <p className="widget-label">Temperature</p>
            <h3 className="widget-value">28°C</h3>
            <p className="widget-status">Optimal for growth</p>
          </div>
          <div className="weather-widget">
            <div className="widget-icon">💧</div>
            <p className="widget-label">Rainfall Probability</p>
            <h3 className="widget-value">35%</h3>
            <p className="widget-status">Light showers expected</p>
          </div>
          <div className="weather-widget">
            <div className="widget-icon">🌱</div>
            <p className="widget-label">Soil Moisture</p>
            <h3 className="widget-value">78%</h3>
            <p className="widget-status">Schedule watering</p>
          </div>
          <div className="weather-widget">
            <div className="widget-icon">📈</div>
            <p className="widget-label">Crop Health Score</p>
            <h3 className="widget-value">92/100</h3>
            <p className="widget-status">Excellent condition</p>
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="panel analytics-panel">
          <div className="panel-head">
            <div>
              <h2>Yield & Rainfall Trends</h2>
              <p>Performance metrics over the growing season.</p>
            </div>
            <span>Last 5 months</span>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#475569" />
                <YAxis stroke="#475569" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="yield"
                  stroke="#059669"
                  strokeWidth={2}
                  dot={{ fill: "#059669", r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Yield %"
                />
                <Line
                  type="monotone"
                  dataKey="rainfall"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Rainfall mm"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <aside className="panel insights-panel">
          <div className="insights-badge">AI Insights</div>
          <div className="insights-card">
            <h3>Smart Irrigation</h3>
            <p>
              Align watering schedules with forecasts and soil sensors to save water and boost yields.
            </p>
          </div>
          <div className="insights-card">
            <h3>Pest Prevention</h3>
            <p>
              Receive alerts for pest risk and deploy targeted treatment only where needed.
            </p>
          </div>
          <div className="insights-card">
            <h3>Yield Optimization</h3>
            <p>
              Use predictive analytics to maximize crop quality with optimized input timing.
            </p>
          </div>
        </aside>
      </section>

      <section className="field-overview">
        <h2>Field Overview</h2>
        <div className="map-placeholder">
          <div className="map-content">
            <div className="map-icon">🛰️</div>
            <p>Satellite View Coming Soon</p>
            <span>Farm location intelligence and field analytics</span>
          </div>
        </div>
      </section>

      <section className="dashboard-quick-actions">
        <div className="section-header">
          <div>
            <h2>Recommended Actions</h2>
            <p>Prioritized tasks to optimize your farm performance.</p>
          </div>
          <span>Priority: High</span>
        </div>
        <div className="action-list">
          <div className="action-item">
            <p>01</p>
            <div>
              <h4>Activate smart irrigation</h4>
              <p>Save water and increase consistency with automated watering based on plant stress and forecast data.</p>
            </div>
          </div>
          <div className="action-item">
            <p>02</p>
            <div>
              <h4>Deploy pest monitoring</h4>
              <p>Use alerts and risk scores to apply treatment only where pests are detected, reducing chemical use.</p>
            </div>
          </div>
          <div className="action-item">
            <p>03</p>
            <div>
              <h4>Review yield projections</h4>
              <p>Analyze forecast models and adjust your crop plan for the highest return on investment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}