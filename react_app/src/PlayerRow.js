const PlayerRow = ({ player }) => {
  return (
    <tr>
      <td>
        <img src={player.photo} alt="Profile" className="player-photo" />
      </td>
      <td>{player.name}</td>
      <td>{player.mobile}</td>
      <td>{player.email}</td>
      <td className={`status ${player.status.toLowerCase()}`}>
        {player.status}
      </td>
      <td>
        <button className="btn btn-link">
          <i className="fas fa-edit"></i>
        </button>
        <button className="btn btn-link">
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
      <td>
        <button className="btn btn-secondary">Login</button>
      </td>
    </tr>
  );
};

export default PlayerRow;
