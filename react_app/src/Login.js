import LandingHeader from "./LandingHeader";
import { Link } from "react-router-dom";
import ball from "./images/8-ball.png";

const Login = () => {
  const LoginForm = () => {
    return (
      <div className="login-form">
        <h2>LOGIN</h2>
        <form>
          <label htmlFor="email-username">Email or Username</label>
          <input
            type="text"
            id="email-username"
            placeholder="Email or Username"
          />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">LOGIN</button>
        </form>
        <p className="to-login">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    );
  };
  return (
    <div>
      <div className="bg-dark text-light p-5 d-flex justify-content-between align-items-center">
        <LandingHeader />
      </div>
      <div className="login">
        <div className="login-container">
          <div className="left-login">
            <div className="logo">
              <img src={ball} alt="" />
            </div>
          </div>
          <div className="right-login">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
