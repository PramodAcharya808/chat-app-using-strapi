// src/components/Signup.js

import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:1337/auth/local/register",
        {
          username: username,
          password: password,
        }
      );
      console.log("Signup success:", response.data);
      // Handle successful signup (e.g., redirect to login)
    } catch (error) {
      console.error("Signup error:", error);
      // Handle signup error (e.g., show error message)
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
