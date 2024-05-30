#!/usr/bin/env python3
"""
Flask application
"""
from flask import Flask
from route import player_blueprint, match_blueprint
from flask_cors import CORS

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'This is my alx final graduation project I hope I will do good.'
cors = CORS(app)
app.register_blueprint(player_blueprint, url_prefix='/api')
app.register_blueprint(match_blueprint, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
