import React from "react";
import "./Nav.css";
import "./utils.css";

function Nav() {
  return (
    <container className="container">
      <header className="header-nav">
        <img className="logo" src="assets/Logo.svg" alt="little lemon logo" />
        <nav>
          <ul className="nav-links">
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
        {/* <button className="menu-btn">Menu</button> */}
      </header>
    </container>
  );
}

export default Nav;
