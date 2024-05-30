#!/usr/bin/env python3
"""
Match making module for pool Tornament
"""
import random


class Makematch:
    """Make match for pool game"""
    players = None
    matches = None
    rounds = 0

    def __init__(self, **kwargs):
        if kwargs:
            self.matches = kwargs.get('matches', {})
            self.rounds = kwargs.get('rounds', 1)
            self.players = kwargs.get('players')

            if round == 1:
                random.shuffle(self.players)

    def __str__(self):
        return f'players: {self.players}\nmatches: {self.matches}\nrounds: {self.rounds}'

    def init_matches(self):
        """initialize match"""
        if len(self.players) <= 1:
            return

        id = 0
        matches = {}
        for i in range(0, len(self.players) - 1, 2):
            ids = f'{id}'
            matches[ids] = [self.players[i], self.players[i + 1]]
            id += 1
        self.matches = matches

    def next_round(self):
        """Process the next round match"""
        winners = []
        for player in self.players:
            if player.is_winner:
                winners.append(player)
        self.players = winners

        self.rounds += 1
        self.init_matches()

    def get_matches(self):
        """return match list"""
        return self.matches

    def get_matche(self, m_id):
        """Get match by id"""
        return self.matches.get(m_id)

    def to_dict(self):
        """Convert Makematch object to a dictionary"""
        match_dict = {
            'players': [player.username for player in self.players],
            'matches': {
                m_id: [player.username for player in match]
                for m_id, match in self.matches.items()
            },
            'rounds': self.rounds
        }
        return match_dict
