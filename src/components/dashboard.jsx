import { useEffect, useState } from "react";
import "./style.css";
import {
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

export default function Dashboard() {
  const [overview, setOverview] = useState({
    farmName: "Loading...",
    cropType: "Maize",
    growthStage: "Tasseling",
    soilMoisture: 0,
    temperature: 0,
    humidity: 0,
    riskScore: 0,
    yieldForecast: "Loading...",
    nextIrrigation: "Coming soon",
  });

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const token = localStorage.getItem("agrisense-token");
        const response = await fetch("http://127.0.0.1:5000/api/farm/overview", {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });
        const data = await response.json();
        if (response.ok) {
          setOverview(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchOverview();
  }, []);

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
          <p>Farm Focus</p>
          <h2>{overview.farmName}</h2>
          <span className="metric-change positive">{overview.cropType} • {overview.growthStage}</span>
        </article>
        <article className="summary-card">
          <p>Soil Moisture</p>
          <h2>{overview.soilMoisture}%</h2>
          <span className="metric-change positive">Ideal for maize irrigation at current stage</span>
        </article>
        <article className="summary-card">
          <p>Maize Climate</p>
          <h2>{overview.temperature}°C</h2>
          <span className="metric-change positive">Humidity {overview.humidity}% · Balanced for tasseling</span>
        </article>
        <article className="summary-card">
          <p>Risk Score</p>
          <h2>{overview.riskScore}</h2>
          <span className="metric-change positive">Low pressure today</span>
        </article>
      </section>

      <section className="dashboard-summary secondary-summary">
        <article className="summary-card">
          <p>Yield Forecast</p>
          <h2>{overview.yieldForecast}</h2>
          <span className="metric-change positive">+8% vs last season</span>
        </article>
        <article className="summary-card">
          <p>Water Efficiency</p>
          <h2>91%</h2>
          <span className="metric-change positive">Savings above target</span>
        </article>
        <article className="summary-card">
          <p>Alerts</p>
          <h2>3</h2>
          <span className="metric-change positive">2 high priority</span>
        </article>
        <article className="summary-card">
          <p>Next Irrigation</p>
          <h2>{overview.nextIrrigation}</h2>
          <span className="metric-change positive">Scheduled for your maize block</span>
        </article>
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
                <Tooltip contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "0.75rem" }} />
                <Legend />
                <Line type="monotone" dataKey="yield" stroke="#2e7d32" strokeWidth={2} dot={{ fill: "#2e7d32", r: 4 }} activeDot={{ r: 6 }} name="Yield %" />
                <Line type="monotone" dataKey="rainfall" stroke="#66bb6a" strokeWidth={2} dot={{ fill: "#66bb6a", r: 4 }} activeDot={{ r: 6 }} name="Rainfall mm" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <aside className="panel insights-panel">
          <div className="insights-badge">AI Insights</div>
          <div className="insights-card">
            <h3>Smart Irrigation</h3>
            <p>Align watering schedules with forecasts and soil sensors to save water and boost yields.</p>
          </div>
          <div className="insights-card">
            <h3>Pest Prevention</h3>
            <p>Receive alerts for pest risk and deploy targeted treatment only where needed.</p>
          </div>
          <div className="insights-card">
            <h3>Yield Optimization</h3>
            <p>Use predictive analytics to maximize maize quality with optimized input timing.</p>
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
              <p>Save water with automated watering based on plant stress and forecast data.</p>
            </div>
          </div>
          <div className="action-item">
            <p>02</p>
            <div>
              <h4>Deploy pest monitoring</h4>
              <p>Use alerts and risk scores to apply treatment only where pests are detected.</p>
            </div>
          </div>
          <div className="action-item">
            <p>03</p>
            <div>
              <h4>Review maize yield projections</h4>
              <p>Analyze forecast models and adjust your maize plan for the highest return on investment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}