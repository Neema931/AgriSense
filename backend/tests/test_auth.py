import json
import os
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parents[1]))

from app import create_app, db


def test_register_and_login():
    app = create_app(testing=True)
    app.config.update(TESTING=True, SQLALCHEMY_DATABASE_URI="sqlite:///:memory:")

    with app.app_context():
        db.drop_all()
        db.create_all()

        client = app.test_client()
        register_response = client.post(
            "/api/auth/register",
            json={
                "name": "Test Farmer",
                "email": "farmer@example.com",
                "phone": "1234567890",
                "password": "secret123",
            },
        )
        assert register_response.status_code == 201

        login_response = client.post(
            "/api/auth/login",
            json={"email": "farmer@example.com", "password": "secret123"},
        )
        assert login_response.status_code == 200
        body = login_response.get_json()
        assert body["user"]["email"] == "farmer@example.com"
        assert "access_token" in body

        protected_response = client.get(
            "/api/farm/overview",
            headers={"Authorization": f"Bearer {body['access_token']}"},
        )
        assert protected_response.status_code == 200
        protected_body = protected_response.get_json()
        assert protected_body["farmName"] == "Green Valley Maize Farm"
        assert protected_body["cropType"] == "Maize"
        assert protected_body["growthStage"] == "Tasseling"
        assert protected_body["yieldForecast"] == "1.9 t/acre"
        assert protected_body["nextIrrigation"] == "Tonight"
