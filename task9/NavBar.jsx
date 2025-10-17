// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="Nav-left">
        <h2 className="Logo">DEV@Deakin</h2>
      </div>

      <div className="Nav-center">
        <input type="text" placeholder="🔍 Search..." className="SearchBar" />
      </div>

      <div className="Nav-right">
        <Link className="Nav-link" to="/post">Post</Link>
        <Link className="Nav-link" to="/login">Login</Link>
      </div>
    </nav>
  );
}
