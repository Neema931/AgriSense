import "./style.css";

import hero from "../assets/Agri_01.jpg";


export default function Home({ onNavigate }) {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to AgriSense</h1>
                <p>Your journey to smarter farming starts here!</p>
            </div>
            <section className="hero-section">
                <div className="hero-image" style={{ backgroundImage: `url(${hero})` }}>
                    <div className="hero-text">
                        <h2>Empowering Farmers with Data-Driven Insights</h2>
                        <p>Discover how AgriSense can transform your farming practices.</p>
                    </div>

                </div>
            </section>

            <section className="features-section">
    <h2>Why Choose AgriSense?</h2>

    <div className="features-grid">

        <div className="feature-card">
            <h3>🌾 Yield Prediction</h3>
            <p>
                Use AI to estimate crop yields and plan harvests more effectively.
            </p>
        </div>

        <div className="feature-card">
            <h3>🌦 Weather Intelligence</h3>
            <p>
                Get weather forecasts and climate insights tailored to your farm.
            </p>
        </div>

        <div className="feature-card">
            <h3>⚠ Risk Alerts</h3>
            <p>
                Receive warnings about pests, diseases, and extreme weather.
            </p>
        </div>

        <div className="feature-card">
            <h3>🤖 Smart Recommendations</h3>
            <p>
                Get personalized advice to improve productivity and reduce losses.
            </p>
        </div>

    </div>
</section>

        <section className="stats-section">

    <div className="stat-card">
        <h3>95%</h3>
        <p>Prediction Accuracy</p>
    </div>

    <div className="stat-card">
        <h3>24/7</h3>
        <p>Weather Monitoring</p>
    </div>

    <div className="stat-card">
        <h3>100+</h3>
        <p>Supported Crops</p>
    </div>

</section>
        </div>

        
    );
}