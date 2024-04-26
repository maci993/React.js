import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (value, name) => {
    setData({ ...data, [name]: value.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submited", data);
    setData({
      username: "",
      email: "",
      password: "",
    });
    alert("Welcome! You created your account succesfully!");
  };

  return (
    <div className="signUp-container">
      <h3>Sign Up</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form">
          <label className="label-form" htmlFor="username">
            Username:
          </label>
          <input
            className="input-form"
            value={data.username}
            type="text"
            name="username"
            onChange={(e) => handleChange(e, "username")}
            required
          />
        </div>
        <div className="form">
          <label className="label-form" htmlFor="email">
            Email:
          </label>
          <input
            className="input-form"
            value={data.email}
            type="email"
            name="email"
            onChange={(e) => handleChange(e, "email")}
            required
          />
          <div className="form">
            <label className="label-form" htmlFor="password">
              Password:
            </label>
            <input
              className="input-form"
              value={data.password}
              type="password"
              name="password"
              onChange={(e) => handleChange(e, "password")}
              required
            />
          </div>
        </div>
        <div className="button">
          <button type="submit" className="button-signup">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
