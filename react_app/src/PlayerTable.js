import Dashheader from "./Dashheader";
import LandingHeader from "./LandingHeader";
import PlayerRow from "./PlayerRow";
import { useState, useEffect } from "react";
import axios from "axios";

const PlayerTable = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/players/all');
      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };
  return (
    <div>
      <div className="bg-dark text-light p-5 d-flex justify-content-between align-items-center">
        <LandingHeader />
      </div>
      <div className="players-list">
        <div className="member-table-container">
          <div className="member-table-header d-flex justify-content-center">
            <h2>Players</h2>
          </div>
          <table className="member-table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Member name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Operation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <PlayerRow key={index} player={player} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayerTable;
