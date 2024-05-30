import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [players, setPlayers] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/players/all');
      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', loginData);
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/players', signupData);
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleDeletePlayer = async (username) => {
    try {
      const response = await axios.delete(`http://localhost:5000/players/${username}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('Player deleted:', response.data);
      fetchPlayers();
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div>
      <h1>Players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.username}>
            {player.name} ({player.username})
            <button onClick={() => handleDeletePlayer(player.username)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={loginData.username}
        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>

      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Name"
        value={signupData.name}
        onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={signupData.email}
        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Username"
        value={signupData.username}
        onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={signupData.password}
        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default App;
