import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">🎬 MovieApp</Link> {/* Logo */}
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/add-movie">Add Movie</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
