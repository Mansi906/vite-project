import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="uber-header">
      <div className="logo">Uber</div>

      <nav className="nav-links">
        <a href="/Home">Home</a>
        <a href="/RidePage">Ride</a>
        <a href="/drive">Drive</a>
        <a href="/help">Help</a>.
      </nav>


      <div className="search-container">
        <input
          type="text"
          placeholder="Pickup Location"
          className="search-input"
        />
        <input
          type="text"
          placeholder="Where to?"
          className="search-input"
        />
      </div>


      <div className="auth-buttons">

        <button className="login-btn"
          onClick={() => window.location.href = "/login"}
>Login</button>
        <button className="signup-btn"
          onClick={() => window.location.href = "/"}
>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
