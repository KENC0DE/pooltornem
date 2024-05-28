#!/usr/bin/env python3
"""
Player route module
"""


from flask import Flask, request, jsonify
from backend import storage
from backend.player import Player
import re

app = Flask(__name__)

# In-memory storage for players
players = []

@app.route('/players', methods=['POST'], strict_slashes=False)
def create_player():
    """Create a new player."""
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    username = data.get('username')
    password = data.get('password')

    player = Player(name=name, email=email, username=username, password=password)

    if player.validate_email() and player.validate_password():
        players.append(player)
        return jsonify(player.to_dict()), 201
    else:
        return jsonify({'error': 'Invalid email or password'}), 400

@app.route('/players/<username>', methods=['GET'])
def get_player(username):
    """Get a player by username."""
    for player in players:
        if player.username == username:
            return jsonify(player.to_dict()), 200
    return jsonify({'error': 'Player not found'}), 404

@app.route('/players/<username>', methods=['DELETE'])
def delete_player(username):
    """Delete a player by username."""
    for i, player in enumerate(players):
        if player.username == username:
            deleted_player = players.pop(i)
            return jsonify(deleted_player.to_dict()), 200
    return jsonify({'error': 'Player not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)
