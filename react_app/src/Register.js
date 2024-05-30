import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashheader from "./Dashheader";
import LandingHeader from "./LandingHeader";
import ball from "./images/8-ball.png";

const Register = () => {
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // Access the history object to navigate programmatically

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the /signup URL
    fetch("http://localhost:5000/api/players", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        name,
        email,
        password,
        confirmPassword,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response from server:", data);
        // Redirect the user to the welcome page after successful signup
        navigate("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const RegisterForm = () => {
    return (
      <div className="register-form">
        <h2>REGISTER</h2>
        <p>IT'S COMPLETELY FREE</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
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
