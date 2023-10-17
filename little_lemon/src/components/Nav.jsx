import React from "react";
import "./Nav.css";
import "./utils.css";

function Nav() {
  return (
    <container className="container">
      <header className="header-nav">
        <img
          className="logo"
          src="little_lemon/public/assets/Logo.svg"
          alt="little lemon logo"
        />
        {/* <iframe
        title="logo"
        src="/Users/akeemayoade/Desktop/Coursera/FE_Capstone/little_lemon/public/assets/Logo.svg"
        alt="Little Lemon logo"
      ></iframe> */}
        <nav>
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
        </nav>
        <button className="menu-btn">Menu</button>
      </header>
    </container>
  );
}

export default Nav;
