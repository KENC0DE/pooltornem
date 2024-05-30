#!/usr/bin/env python3
"""
Player route module
"""
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from flask import Flask, request, jsonify
from backend.player import Player
from backend import storage
from flask import Blueprint

import re

player_blueprint = Blueprint('player', __name__)


jwt = JWTManager()


@player_blueprint.route('/login', methods=['POST'], strict_slashes=False)
def login():
    """Login route"""
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    player = storage.get_player_by_username(username)
    if player:
        return jsonify(player.to_dict()), 200
    return jsonify({'error': 'Player not found'}), 404


@player_blueprint.route('/players', methods=['POST'], strict_slashes=False)
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


@player_blueprint.route('/players/<username>', methods=['GET'], strict_slashes=False)
@jwt_required()
def get_player(username):
    """Get a player by username."""
    player = storage.get_player_by_username(username)
    if player:
        return jsonify(player.to_dict()), 200
    return jsonify({'error': 'Player not found'}), 404


@player_blueprint.route('/players/all', methods=['GET'], strict_slashes=False)
def get_all_player():
    """Get a player by username."""
    players = storage.get_all_players()
    if players:
        p_list = [p.to_dict() for p in players]
        return jsonify(p_list), 200
    return jsonify({'error': 'Player not found'}), 404


@player_blueprint.route('/players/<username>', methods=['DELETE'], strict_slashes=False)
@jwt_required()
def delete_player(username):
    """Delete a player by username."""
    player = storage.get_player_by_username(username)
    if player:
        storage.delete_player_by_email(player.email)
        return jsonify(player.to_dict()), 200
    return jsonify({'error': 'Player not found'}), 404
