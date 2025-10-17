// src/pages/SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      // Create a user document in Firestore using UID
      await setDoc(doc(db, "users", userCred.user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date().toISOString()
      });
      navigate("/login");
    } catch (err) {
      console.log("Signup error:", err.code);
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered");
      } else {
        setError("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="SignUp container">
      <form onSubmit={handleSignUp} className="SubmitForm">
        <h2>Create a DEV@Deakin Account</h2>

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="input"
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="input"
        />

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

        <button type="submit" className="Signup-Button">Create</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
