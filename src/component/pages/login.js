import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [values, setValues] = useState({
  //   username: "",
  //   email: "",
  //   password: ""
  // })

  const handleChange = (e) => {
    console.log(e.target);
    setUsername(e.target.value);
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
  };

  const values = {
    username: username,
    email: email,
    password: password,
  };
  console.log(values);

  return (
    <div className="log">
      {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
      <h1>LOGIN</h1>
      <form className="form" onSubmit={handleSubmit} method="POST" action="">
        <p>
          <label for="fname">Username: </label>
        </p>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>{" "}
        <br /> <br />
        <p>
          <label for="lname">Email: </label>
        </p>
        <input
          type="email"
          id="lname"
          name="lname"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>{" "}
        <br /> <br />
        <p>
          <label for="pass">Password: </label>
        </p>
        <input
          type="password"
          id="pass"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>{" "}
        <br /> <br />
        <button>Login</button>
      </form>
      <p className="p">
        Don't have an account?{" "}
        <NavLink to="/signUp" className="ctn">
          Sign Up
        </NavLink>{" "}
        here
      </p>
    </div>
  );
};
