import { Link } from "react-router-dom";
import "./style.css";

const featureCards = [
  {
    title: "Live Weather Forecasts",
    description: "Monitor rainfall, humidity, and temperature in one place so your planting and irrigation decisions stay timely.",
    icon: "🌦️",
  },
  {
    title: "Field Health Monitoring",
    description: "Track crop stress, nutrient demand, and field anomalies before small issues become expensive ones.",
    icon: "🌱",
  },
  {
    title: "Smart Alerts",
    description: "Get proactive reminders for irrigation windows, pest pressure, and climate risks affecting your maize fields.",
    icon: "🔔",
  },
];

const steps = [
  {
    title: "Create your farm profile",
    description: "Set up your location, crops, and field details so AgriSense can tailor advice to your conditions.",
  },
  {
    title: "Connect field data",
    description: "Add weather context, soil insights, and crop observations to build a reliable operating picture.",
  },
  {
    title: "Review recommendations",
    description: "Receive guidance for irrigation, protection, and timing that matches your farm’s real needs.",
  },
  {
    title: "Act with confidence",
    description: "Use the dashboard and alerts to make faster decisions and keep your operation resilient.",
  },
];

const contactMethods = [
  {
    title: "Email support",
    value: "support@agrisense.africa",
    note: "For product questions, onboarding, and platform assistance.",
  },
  {
    title: "Call us",
    value: "+254 700 000 000",
    note: "Available from 8:00 AM to 6:00 PM, Monday to Friday.",
  },
  {
    title: "Visit our office",
    value: "Nairobi, Kenya",
    note: "Meet the AgriSense team and explore tailored farm solutions.",
  },
];

export function FeaturesPage() {
  return (
    <div className="info-page-shell">
      <section className="info-hero-card">
        <p className="eyebrow">Features</p>
        <h1>Built to make farm decisions simpler, faster, and more precise.</h1>
        <p>
          AgriSense combines weather visibility, crop intelligence, and proactive alerts so every farm team can act with clarity.
        </p>
      </section>

      <section className="info-card-grid">
        {featureCards.map((feature) => (
          <article className="info-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="info-cta-card">
        <h2>Ready to see it in action?</h2>
        <p>Open your dashboard and explore how AgriSense can support your next planting, irrigation, or harvest decision.</p>
        <Link className="primary-btn" to="/signup">Get Started</Link>
      </section>
    </div>
  );
}

export function HowItWorksPage() {
  return (
    <div className="info-page-shell">
      <section className="info-hero-card compact">
        <p className="eyebrow">How it works</p>
        <h1>From farm data to dependable recommendations in four simple steps.</h1>
        <p>Whether you manage a small plot or a growing operation, the workflow stays clear and practical.</p>
      </section>

      <section className="steps-grid info-steps-grid">
        {steps.map((step, index) => (
          <article className="step-card" key={step.title}>
            <span className="step-number">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="info-page-shell">
      <section className="info-hero-card compact">
        <p className="eyebrow">Contact us</p>
        <h1>We would love to hear from your farm team.</h1>
        <p>Reach out for onboarding support, partnership conversations, or help exploring the platform.</p>
      </section>

      <section className="info-card-grid contact-grid">
        {contactMethods.map((item) => (
          <article className="info-card contact-card" key={item.title}>
            <h3>{item.title}</h3>
            <p className="contact-value">{item.value}</p>
            <p>{item.note}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default FeaturesPage;
