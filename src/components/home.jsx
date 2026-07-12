import { useNavigate } from "react-router-dom";
import "./style.css";
import hero from "../assets/Agri_01.jpg";

const features = [
  {
    title: "AI Maize Yield Prediction",
    description: "Forecast maize harvest potential with confidence scores that help you plan planting, labor, and logistics.",
    icon: "🌾",
  },
  {
    title: "Weather Intelligence",
    description: "Track rainfall, temperature, and severe weather for your maize fields from one clear operational view.",
    icon: "🌦️",
  },
  {
    title: "Smart Irrigation",
    description: "Automate maize watering schedules based on soil moisture, crop stress, and forecast data.",
    icon: "💧",
  },
  {
    title: "Disease & Pest Monitoring",
    description: "Detect anomalies early and prioritize the right interventions before losses escalate.",
    icon: "🩺",
  },
  {
    title: "Resource Optimization",
    description: "Reduce waste across fertilizer, water, and labor with recommendations grounded in real signals.",
    icon: "⚙️",
  },
  {
    title: "Satellite Monitoring",
    description: "Visualize field health, growth zones, and changes at a glance with a premium operations dashboard.",
    icon: "🛰️",
  },
];

const stats = [
  { value: "120+", label: "Maize Operations Supported" },
  { value: "96%", label: "Prediction Accuracy" },
  { value: "32%", label: "Water Saved" },
  { value: "18k", label: "Farmers Supported" },
];

const steps = [
  "Register your farm and connect field details",
  "Enter maize field, soil, and weather context",
  "Let AI analyze risks, growth, and demand for your maize crop",
  "Receive recommendations in real time",
];

const testimonials = [
  {
    quote: "AgriSense helped us cut response time during a sudden storm and protect our most vulnerable fields.",
    name: "Amina Hassan",
    role: "Commercial Farmer",
  },
  {
    quote: "The recommendations feel remarkably clear and actionable, almost like having an agronomist on call.",
    name: "Daniel Okafor",
    role: "Agronomy Lead",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI-powered farm intelligence</p>
          <h1>Smarter decisions for every field.</h1>
          <p className="hero-subtitle">
            AgriSense brings weather, maize field, and sensor intelligence together so farmers can act with confidence.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" type="button" onClick={() => navigate("/signup")}>Get Started</button>
            <button className="secondary-btn" type="button" onClick={() => navigate("/login")}>Explore Platform</button>
          </div>
          <div className="hero-badges">
            <span>Weather Intelligence</span>
            <span>Yield Prediction</span>
            <span>Live Alerts</span>
          </div>
        </div>
        <div className="hero-visual" style={{ backgroundImage: `url(${hero})` }}>
          <div className="hero-panel">
            <p className="hero-panel-title">Today’s farm outlook</p>
            <h3>Optimal irrigation window</h3>
            <p>High soil moisture confidence and low pest risk across key zones.</p>
          </div>
        </div>
      </section>

      <section className="section-shell" id="features">
        <div className="section-heading">
          <p className="eyebrow">Features</p>
          <h2>Purpose-built for modern agriculture</h2>
          <p>Every module is designed to turn raw farm data into simple, trustworthy action.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stats-shell">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="section-shell" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>From field data to smart decisions</h2>
          <p>Follow a straightforward path from onboarding to personalized recommendations.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={step}>
              <span className="step-number">0{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell testimonials-shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">Trusted by growers</p>
          <h2>Farmers and advisors rely on AgriSense</h2>
          <p>A calm, data-led experience that supports critical decisions without the noise.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p>“{item.quote}”</p>
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div>
          <h3>AgriSense</h3>
          <p>Precision insights for resilient agriculture.</p>
        </div>
        <div className="footer-links">
          <a href="#top">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}