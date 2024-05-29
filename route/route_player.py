#!/usr/bin/env python3
"""
Player route module
"""

from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, jwt_required, create_access_token

from backend import storage
from backend.player import Player

import re

app = Flask(__name__)


# Set up JWT
app.config['JWT_SECRET_KEY'] = 'This is my alx final graduation project I hope I will do good.'
jwt = JWTManager(app)


@app.route('/login', methods=['POST'], strict_slashes=False)
def login():
    """Login route"""
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Check if the username and password are valid
    player = storage.get_player_by_username(username)
    if player and player.validate_password(password):
        # Generate and return a JWT access token
        access_token = create_access_token(identity=username)
        return jsonify({'access_token': access_token}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401


@app.route('/players', methods=['POST'], strict_slashes=False)
@jwt_required()
def create_player():
    """Create a new player."""
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    username = data.get('username')
    password = data.get('password')

    player = Player(name=name, email=email, username=username, password=password)

    if player.validate_email() and player.validate_password():
        try:
            storage.check_save(player)
            return jsonify(player.to_dict()), 201
        except ValueError:
            return jsonify({'error': 'Player already exists'}), 400
    else:
        return jsonify({'error': 'Invalid email or password'}), 400


@app.route('/players/<username>', methods=['GET'], strict_slashes=False)
@jwt_required()
def get_player(username):
    """Get a player by username."""
    player = storage.get_player_by_username(username)
    if player:
        return jsonify(player.to_dict()), 200
    return jsonify({'error': 'Player not found'}), 404


@app.route('/players/<username>', methods=['DELETE'], strict_slashes=False)
@jwt_required()
def delete_player(username):
    """Delete a player by username."""
    player = storage.get_player_by_username(username)
    if player:
        storage.delete_player_by_email(player.email)
        return jsonify(player.to_dict()), 200
    return jsonify({'error': 'Player not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)
