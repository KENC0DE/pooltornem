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
@jwt_required()
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


@app.route('/matches/<int:round_number>', methods=['POST'])
@jwt_required()
def process_next_round(round_number):
    """Process the next round of matches."""
    data = request.get_json()
    players = [Player(**player_data) for player_data in data.get('players', [])]
    matches = data.get('matches', [])

    if not players or not matches:
        return jsonify({'error': 'Players and matches are required'}), 400

    match_maker = Makematch(players=players, rounds=round_number)

    for match in matches:
        winner = match[0] if match[0]['is_winner'] else match[1]
        match_maker.players.append(winner)

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
