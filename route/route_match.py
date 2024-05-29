#!/usr/bin/env python3
"""
Match route module
"""
from flask_jwt_extended import JWTManager, jwt_required
from flask import Flask, request, jsonify
from backend.makematch import Makematch
from backend.player import Player
from backend import storage


app = Flask(__name__)

# Set up JWT
app.config['JWT_SECRET_KEY'] = 'This is my alx final graduation project I hope I will do good.'
jwt = JWTManager(app)


@app.route('/matches', methods=['POST'], strict_slashes=False)
#@jwt_required()
def create_matches():
    """Create matches for a new round."""
    players = storage.get_all_players()
    if not players:
        return jsonify({'error': 'Players list is required'}), 400

    match_maker = Makematch(players=players)
    match_maker.init_matches()

    return jsonify({
        'matches': [
            [player.to_dict() for player in match]
            for match in match_maker.get_matches()
        ],
        'rounds': match_maker.rounds
    }), 201


@app.route('/matches/next', methods=['POST'], strict_slashes=False)
#@jwt_required()
def process_next_round():
    """Process the next round of matches."""
    match_maker = storage.get_match()
    match_maker.next_round()

    return jsonify({
        'matches': [
            [player.to_dict() for player in match]
            for match in match_maker.get_matches()
        ],
        'rounds': match_maker.rounds
    }), 200


if __name__ == '__main__':
    app.run(debug=True)
