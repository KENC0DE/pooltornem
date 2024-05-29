import { Link } from "react-router-dom";
import Dashheader from "./Dashheader";
import LandingHeader from "./LandingHeader";
import ball from "./images/8-ball.png"

const Register = () => {
  const RegisterForm = () => {
    return (
      <div className="register-form">
        <h2>REGISTER</h2>
        <p>IT'S COMPLETELY FREE</p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your full name" />

          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Username" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email address" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
          />

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>

          <button type="submit">CREATE ACCOUNT</button>
        </form>
        <p className="to-login">
          Already a member? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-dark text-light p-5 d-flex justify-content-between align-items-center">
        <LandingHeader />
      </div>
      <div className="register">
        <div className="reg-container">
          <div className="reg-left">
            <div className="logo">
            <img src={ball} alt="" />
            </div>
          </div>
          <div className="reg-right container">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
