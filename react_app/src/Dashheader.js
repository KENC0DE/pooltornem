import { useLocation } from 'react-router-dom';
import ball from './images/8-ball.png'
import { Link } from 'react-router-dom';
const Dashheader = () => {
  const location = useLocation();
  const userData = location.state;
  return (
    <div className="dashheader">
      <div className="bg-dark text-light p-3 d-flex justify-content-between">
        <div>
          <Link to='/'>
            <img src={ball} alt="Profile" className="player-photo" width={'50px'} />
          </Link>
        </div>
        <span className="name bg-secondary rounded text-center btn">{userData.name}</span>
        <button className="user-btn btn btn-dark">{userData.username}</button>
      </div>
    </div>
  );
};

export default Dashheader;
