import ball from "./images/8-ball.png"
import { Link } from "react-router-dom";

const PlayerRow = ({ player }) => {
  return (
    <tr>
      <td>
        <img src={ball} alt="Profile" className="player-photo" width={'50px'} />
      </td>
      <td>{player.name}</td>
      <td>{player.email}</td>
      <td className='status'>
        Active
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
        <button><Link to='/login' className="btn btn-secondary">Login</Link></button>
      </td>
    </tr>
  );
};

export default PlayerRow;
