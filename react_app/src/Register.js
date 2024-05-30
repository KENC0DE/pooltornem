import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashheader from "./Dashheader";
import LandingHeader from "./LandingHeader";
import ball from "./images/8-ball.png";

const Register = () => {
  const navigate = useNavigate(); // Access the history object to navigate programmatically

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameValue = event.target.name.value;
    const usernameValue = event.target.username.value;
    const emailValue = event.target.email.value;
    const passwordValue = event.target.password.value;
    const confirmPasswordVal = event.target.confirmPassword.value;
    // Send a POST request to the /signup URL
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameValue,
        name: nameValue,
        email: emailValue,
        password: passwordValue,
        confirmPassword: confirmPasswordVal,
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
        navigate("/login");
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
            name="name"
            placeholder="Your full name"
            required
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
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

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
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
