import LandingHeader from "./LandingHeader";
import { Link } from "react-router-dom";
import ball from "./images/8-ball.png";
import { useState } from "react";
import axios from "axios"

const Login = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Retrieve email and password from the form
    const userEmail = event.target.email.value;
    const userPassword = event.target.password.value;

    // Send a POST request to the /login URL
    try {
      const response = await axios.post('http://localhost:5000/api/login', 
      {
        email: userEmail,
        password: userPassword
      });
      console.log(response.data)
      window.location.href = "/dashboard";
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  const LoginForm = () => {
    return (
      <div className="login-form">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email or Username</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email or Username"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" value={"submit"}>
            LOGIN
          </button>
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
