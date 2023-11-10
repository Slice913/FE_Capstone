import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-main">
      <div className="img-container">
        <img src="" alt="" className="footer-img" />
      </div>
      <div className="footer-nav-text">
        <div className="footer-nav-links">
          <ul>
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
        <div className="footer-nav-contacts">
          <ul>
            <li>
              <a href="/#">Contact</a>
            </li>
            <li>
              <a href="/#">Privacy</a>
            </li>
            <li>
              <a href="/#">Terms</a>
            </li>
          </ul>
        </div>
        <div className="footer-nav-social">
          <ul>
            <li>
              <a href="/#">Facebook</a>
            </li>
            <li>
              <a href="/#">Twitter</a>
            </li>
            <li>
              <a href="/#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
//  TODO: get footer links  correct
