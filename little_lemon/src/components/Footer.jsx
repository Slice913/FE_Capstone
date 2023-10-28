import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-main">
      <img src="" alt="" className="img-footer" />
      <div className="footer-nav">
        <ul className="footer-nav-links">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Menu</a>
          </li>
          <li>
            <a href="/#">Reservation</a>
          </li>
          <li>
            <a href="/#">Order Online</a>
          </li>
          <li>
            <a href="/#">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact"></div>
      <div className="footer-social-media"></div>
    </footer>
  );
}

export default Footer;
