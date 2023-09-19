import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <header className="header-nav">
      <img
        src="/Users/akeemayoade/Desktop/Coursera/FE_Capstone/little_lemon/public/assets/Logo.png"
        alt="little lemon logo"
      />
      {/* <iframe
        title="logo"
        src="/Users/akeemayoade/Desktop/Coursera/FE_Capstone/little_lemon/public/assets/Logo.svg"
        alt="Little Lemon logo"
      ></iframe> */}
      <nav>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Menu</a>
        <a href="/#">Reservation</a>
        <a href="/#">Order Online</a>
        <a href="/#">Login</a>
      </nav>
    </header>
  );
}

export default Nav;
