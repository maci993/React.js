import React, { useState } from "react";
import { useAuth } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleChange = (value, name) => {
    setData({ ...data, [name]: value.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = data;
    if (username === "user" && password === "password") {
      setAuth(true);
      alert("Welcome!");
    } else {
      console.log("Error");
      alert("Invalid username or password!");
    }
  };

  const handleSignupClick = () => {
    navigate("/sign-up");
  };

  return (
    <div className="login-container">
      <div>
        <h3>Login</h3>
        <p>
          Please insert your informations in the fields and then click "Login",
          or click "Create Account" to create an account.
        </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form">
          <label className="label-form" htmlFor="username">
            Username:
          </label>
          <input
            className="input-form"
            value={data.username}
            type="text"
            name= "username"
            onChange={(e) => handleChange(e, "username")}
          />
        </div>
        <div className="form">
        <label className="label-form" htmlFor="password">
            Password:
          </label>
          <input
            className="input-form1"
            value={data.password}
            type="text"
            name="password"
            onChange={(e) => handleChange(e, "password")}
          />

        </div>
        <div className="button">
            <button type="submit" className="button-login">Login</button>
            <button type="submit" className="button-create-account" onClick={() => handleSignupClick()}>Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;