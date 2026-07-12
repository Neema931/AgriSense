from app import create_app, db, User

app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()
    demo_user = User(name="Demo Farmer", email="demo@agrisense.com", phone="5550000")
    demo_user.set_password("demo123")
    db.session.add(demo_user)
    db.session.commit()
    print("Seeded demo user")
