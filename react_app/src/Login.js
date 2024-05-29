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
      </div>
    );
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="left-login">
          <div className="logo">
            <h1>COMPANY</h1>
            <h2>LOGO</h2>
            <h3>NAME</h3>
          </div>
        </div>
        <div className="right-login">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
