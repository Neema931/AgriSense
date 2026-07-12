from app import create_app, db

app = create_app(testing=True)
app.config.update(TESTING=True, SQLALCHEMY_DATABASE_URI='sqlite:///:memory:')

with app.app_context():
    db.drop_all()
    db.create_all()
    client = app.test_client()
    client.post('/api/auth/register', json={'name':'Test','email':'t@example.com','phone':'1','password':'p'})
    resp = client.post('/api/auth/login', json={'email':'t@example.com','password':'p'})
    print(resp.status_code)
    print(resp.get_json())
    body = resp.get_json()
    protected = client.get('/api/farm/overview', headers={'Authorization': f"Bearer {body['access_token']}"})
    print(protected.status_code)
    print(protected.get_json())
