#!/usr/bin/env python3
"""
Player Modul
"""
import re


class Player:
    """Play class describing all user detail"""
    def __init__(self, **kwargs):
        """construct or load player"""
        self.name = kwargs.get('name', '')
        self.email = kwargs.get('email', '')
        self.username = kwargs.get('username', '')
        self.password = kwargs.get('password', '')
        self.valid_to_participate = kwargs.get('valid_to_participate', False)
        self.is_winner = False

    def to_dict(self):
        """change instance to dict"""
        return {
            'name': self.name,
            'email': self.email,
            'username': self.username,
            'password': self.password,
            'valid_to_participate': self.valid_to_participate
        }

    def validate_email(self):
        """Validate email format"""
        email_regex = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        return bool(re.match(email_regex, self.email))

    def validate_password(self):
        """Validate password format"""
        password_regex = r'^.{6,}$'  # Minimum length of 6 characters
        return bool(re.match(password_regex, self.password))

    def __str__(self) -> str:
        """String representation of the instance"""
        return f'''name: {self.name}
username: {self.username}
email: {self.email}
valid to participate: {self.valid_to_participate}'''
