import React, { useState } from "react";
import { registerUser } from "../api";

function SignUp({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="signUp">
      <h1>This is a Sign up page</h1>
      <form
        className="form"
        onSubmit={async (ev) => {
          ev.preventDefault();

          const result = await registerUser(username, password);
          console.log(result);
          localStorage.setItem("token", result.token);
          setToken(result.token);
        }}
      >
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
// personal stretch goal
//  password compar
// if statement comparing password with confirm password
