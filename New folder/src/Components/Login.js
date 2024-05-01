import React from "react";

function Login() {
  return (
    <div className="FormContainer">
      <div className="signup-box">
        <h2>Login</h2>
        <form action="" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="signUpButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
