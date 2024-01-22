import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-main">
      <div className="img-container">
        <img
          src="/Users/akeemayoade/Desktop/Coursera/FE_Capstone/little_lemon/public/assets/TESTERLL.jpg"
          alt=""
          className="footer-img"
        />
      </div>
      <div className="footer-nav-text">
        <div className="footer-nav-links">
          <h5 className="footer-link-titles">Doormat</h5>
          <h5 className="footer-link-titles">Navigation</h5>
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
            <h5 className="footer-link-titles">Contact</h5>
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
          <h5 className="footer-link-titles">Social Media Links</h5>
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
