from flask import Flask
from config import Config
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

# Define your routes here
@app.route('/')
def home():
    return "Welcome to the Energy Trading Platform!"

if __name__ == '__main__':
    app.run(debug=True)
