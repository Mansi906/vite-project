import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>Uber Clone</h3>
          <p>Fast • Safe • Reliable Rides</p>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Book Ride</a>
          <a href="#">Help</a>
          <a href="#">About</a>
        </div>

        <div className="footer-social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>

      <p className="footer-copy">© 2025 Uber Clone Application — All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
