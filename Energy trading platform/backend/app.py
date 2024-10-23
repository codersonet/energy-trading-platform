# app.py

from flask import Flask
from blueprints.auth import auth_blueprint  # Import your auth blueprint

app = Flask(__name__)

# Register blueprint
app.register_blueprint(auth_blueprint, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)
