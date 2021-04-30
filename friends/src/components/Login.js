import axios from "axios";
import React, { useState } from "react";
import { Button } from "reactstrap";


const Login = (props) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const newLogin = {
      ...loginData,
      [e.target.name]: e.target.value,
    };

    setLoginData(newLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", loginData)
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch((err) => {});
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <br />
      <br />
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        value={loginData.username}
        onChange={handleChange}
      />{" "}
      <br />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={loginData.password}
        onChange={handleChange}
      />{" "}
      <br />
      <br />
      <Button>Login</Button>
    </form>
  );
};

export default Login;
