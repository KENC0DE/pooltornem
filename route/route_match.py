#!/usr/bin/env python3
"""
Match route module
"""
from flask_jwt_extended import JWTManager, jwt_required
from flask import Flask, request, jsonify
from backend.makematch import Makematch
from backend.auth import is_winner
from backend.player import Player
from backend import storage
from flask import Blueprint


match_blueprint = Blueprint('match', __name__)

jwt = JWTManager()


@match_blueprint.route('/matches', methods=['POST'], strict_slashes=False)
#@jwt_required()
def create_matches():
    """Create matches for a new round."""
    players = storage.get_all_players()
    if not players:
        return jsonify({'error': 'Players list is required'}), 400

    match_maker = Makematch(players=players)
    match_maker.init_matches()
    storage.save_match(match_maker)

    return jsonify({
        'matches': {
            m_id: [player.to_dict() for player in match]
            for m_id, match in match_maker.get_matches().items()
        },
        'rounds': match_maker.rounds
    }), 201


@match_blueprint.route('/matches/next', methods=['POST'], strict_slashes=False)
#@jwt_required()
def process_next_round():
    """Process the next round of matches."""
    match_maker = storage.get_match()
    match_maker.next_round()
    storage.save_match(match_maker)

    return jsonify({
        'matches': {
            m_id: [player.to_dict() for player in match]
            for m_id, match in match_maker.get_matches().items()
        },
        'rounds': match_maker.rounds
    }), 200


@match_blueprint.route('/matches/moves_on/<int:m_id>', methods=['POST'], strict_slashes=False)
def moves_on(m_id):
    """Determaine the player which will move on."""
    data = request.get_json()
    username = data.get('username')

    player = is_winner(m_id, username)

    return jsonify(player.to_dict()), 201


@match_blueprint.route('/matches', methods=['GET'], strict_slashes=False)
#@jwt_required()
def get_current_match():
    """Get current match"""
    match_d = storage.get_match()
    if not match_d:
        return jsonify({'error': 'No match found'}), 400

    return jsonify({
        'matches': {
            m_id: [player.to_dict() for player in match]
            for m_id, match in match_d.get_matches().items()
        },
        'rounds': match_d.rounds
    }), 200
