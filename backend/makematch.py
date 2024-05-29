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
            self.matchs = kwargs.get('matchs', [])
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

        matches = []
        for i in range(0, len(self.players) - 1, 2):
            matches.append([self.players[i], self.players[i + 1]])
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

    def to_dict(self):
        """Convert Makematch object to a dictionary"""
        match_dict = {
            'players': [player.to_dict() for player in self.players],
            'matches': [
                [player.to_dict() for player in match]
                for match in self.matches
            ],
            'rounds': self.rounds
        }
        return match_dict
