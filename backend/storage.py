#!/usr/bin/env python3
"""
Storage Module
"""
from pymongo import MongoClient
from backend.player import Player
from backend.makematch import Makematch


class Storage:
    """
    Storage Class for MongoDB
    """

    mongo_uri = 'mongodb://localhost:27017/'
    database_name = 'pooltornem-test'

    def __init__(self, collection_name='players'):
        """Initialize"""
        self.client = MongoClient(self.mongo_uri)
        self.database = self.client[self.database_name]
        self.collection = self.database[collection_name]

    def set_collection(self, collection_name):
        """Set the collection to be used"""
        self.collection = self.database[collection_name]

    def save(self, player):
        """Save instance"""
        self.set_collection('players')
        player_dict = player.to_dict()
        self.collection.insert_one(player_dict)

    def save_match(self, match):
        """Save match instance"""
        self.set_collection('matches')
        match_dict = match.to_dict()
        filter = {}

        self.collection.replace_one(filter, match_dict, upsert=True)

    def get_match(self):
        """Get Ongoing match"""
        self.set_collection('matches')
        match_dict = self.collection.find_one()
        del match_dict['_id']
        return self._create_match_instance(match_dict)

    def _create_match_instance(self, match_dict):
        """Create match instance from the fetched dict"""
        match_dict['players'] = [self.get_player_by_username(username)
                                 for username in match_dict['players']]
        match_dict['matches'] = [
            [self.get_player_by_username(username) for username in match]
            for match in match_dict['matches']
        ]
        match = Makematch(**match_dict)
        return match

    def get_player_by_email(self, email):
        """Fetch player instance by email"""
        self.set_collection('players')
        player_dict = self.collection.find_one({'email': email})
        if player_dict:
            return self._create_player_instance(player_dict)
        return None

    def get_player_by_username(self, username):
        """Fetch player instance by username"""
        self.set_collection('players')
        player_dict = self.collection.find_one({'username': username})
        if player_dict:
            return self._create_player_instance(player_dict)
        return None

    def _create_player_instance(self, player_dict):
        """Create player instance from the fetchec dict"""
        return Player(**player_dict)

    def check_save(self, player):
        """Check for existing instance before saving"""
        email = player.email
        username = player.username

        if self.get_player_by_email(email):
            raise ValueError(f"Email '{email}' is already registered.")

        if self.get_player_by_username(username):
            raise ValueError(f"Username '{username}' is already registered.")

        self.save(player)

    def get_all_players(self):
        """Fetch all player instances from the database"""
        player_dicts = self.collection.find()
        players = []
        for player_dict in player_dicts:
            player = self._create_player_instance(player_dict)
            players.append(player)
        return players

    def delete_player_by_email(self, email):
        """Delete a player instance from the database by email"""
        result = self.collection.delete_one({'email': email})
        return result.deleted_count > 0

    def close_connection(self):
        """Close mongoDB connection"""
        self.client.close()
