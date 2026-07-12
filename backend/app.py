import os
import jwt
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

basedir = os.path.abspath(os.path.dirname(__file__))

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(30), nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


def create_app(testing=False):
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", f"sqlite:///{os.path.join(basedir, 'agrisense.db')}")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["TESTING"] = testing
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret-key")

    db.init_app(app)
    CORS(app)

    with app.app_context():
        db.create_all()

    @app.get("/health")
    def health():
        return jsonify({"status": "ok"})

    @app.post("/api/auth/register")
    def register():
        payload = request.get_json(silent=True) or {}
        name = payload.get("name", "").strip()
        email = payload.get("email", "").strip().lower()
        phone = payload.get("phone", "").strip()
        password = payload.get("password", "")

        if not all([name, email, phone, password]):
            return jsonify({"error": "All fields are required"}), 400

        user_exists = User.query.filter_by(email=email).first()
        if user_exists:
            return jsonify({"error": "Email already registered"}), 409

        user = User(name=name, email=email, phone=phone)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()

        return jsonify({"message": "Account created", "user": {"id": user.id, "name": user.name, "email": user.email}}), 201

    @app.post("/api/auth/login")
    def login():
        payload = request.get_json(silent=True) or {}
        email = payload.get("email", "").strip().lower()
        password = payload.get("password", "")

        user = User.query.filter_by(email=email).first()
        if not user or not user.check_password(password):
            return jsonify({"error": "Invalid credentials"}), 401

        token = jwt.encode({"sub": str(user.id), "email": user.email}, app.config["SECRET_KEY"], algorithm="HS256")
        return jsonify({"message": "Login successful", "access_token": token, "user": {"id": user.id, "name": user.name, "email": user.email}}), 200

    @app.get("/api/farm/overview")
    def farm_overview():
        auth_header = request.headers.get("Authorization", "")
        token = auth_header.replace("Bearer ", "", 1) if auth_header.startswith("Bearer ") else ""
        if not token:
            return jsonify({"error": "Authorization token required"}), 401

        try:
            payload = jwt.decode(token, app.config["SECRET_KEY"], algorithms=["HS256"])
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token"}), 401

        return jsonify({
            "farmName": "Green Valley Maize Farm",
            "cropType": "Maize",
            "growthStage": "Tasseling",
            "soilMoisture": 78,
            "temperature": 28,
            "humidity": 64,
            "riskScore": 18,
            "yieldForecast": "1.9 t/acre",
            "nextIrrigation": "Tonight",
        })

    return app


app = create_app()


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
