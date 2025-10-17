// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // successful -> go to /home
    } catch (error) {
      // Inspect error codes in browser console if you need to expand cases
      console.log("Login error:", error.code);
      // Show either "Account not registered" for user-not-found or
      // "Invalid email or password" for wrong-password/invalid-email
      if (error.code === "auth/user-not-found" || error.code === "auth/invalid-credential") {
        setError("Account not registered");
      } else if (error.code === "auth/wrong-password" || error.code === "auth/invalid-email") {
        setError("Invalid email or password");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="Login container">
      <form onSubmit={handleLogin} className="LoginForm">
        <Link to="/signup" className="SignupButton">Sign Up</Link>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input"
        />

        <button type="submit" className="LoginButton">Login</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
