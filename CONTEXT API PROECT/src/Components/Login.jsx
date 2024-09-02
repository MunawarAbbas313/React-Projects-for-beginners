import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const { SetUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Write SetUser items in an Object format
    SetUser({UserName, Password , Email});
  };

  return (
    <div className="details">
      <h1 className="Dhead">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="int">
          <input
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Enter User Name"
          />
          <input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email Id"
          />
        </div>
        <div className="btns">
          <button type="submit" className="sbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
