import LandingHeader from "./LandingHeader";
import { Link } from "react-router-dom";
import ball from "./images/8-ball.png";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the /login URL
    const userEmail = event.target.email.value;
    const userPassword = event.target.password.value;
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid name or password");
        }
        return response.json();
      })
      .then((data) => {
        // Redirect the user to the home page after successful login
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Invalid username or password");
      });
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
          {error && (
            <div className="alert-message">
              <p style={{ color: "red" }}>{error}</p>
            </div>
          )}
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
