#!/usr/bin/evn python3
"""
Authentication module
"""
from backend import storage


def is_winner(m_id, username):
    """Determine The winner"""
    matches = storage.get_match()
    match = matches.get_matche(f'{m_id}')
    for p in match:
        if p.username == username:
            p.is_winner = True
            winner = p
        else:
            p.is_winner = False
            loser = p

    storage.update_player(winner)
    storage.update_player(loser)
    storage.save_match(matches)

    return winner
