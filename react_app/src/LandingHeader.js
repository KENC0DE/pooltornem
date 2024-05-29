import { Outlet, Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <div className="landing-header">
      <nav className="bg-dark p-3 fixed-top d-flex justify-content-between">
        <ul className="d-flex justify-content-center container list-unstyled">
          <li className="list-style-none">
            <Link to="/" className="btn text-light">
              Home
            </Link>
          </li>
          <li>
            <Link to="/match" className="btn text-light">
              Match
            </Link>
          </li>
          <li className="text-light">
            <Link to="/players" className="btn text-light">
              Players
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="btn text-light">
              Contact
            </Link>
          </li>
        </ul>
        <div className="auth column">
          <Link
            to="/register"
            className="text-decoration-none btn bg-light me-3"
          >
            Register
          </Link>
          <Link to="/login" className="text-decoration-none btn text-light">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default LandingHeader;
