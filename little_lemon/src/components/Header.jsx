import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="header-main">
      <article className="header-section-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          deleniti possimus. Lorem, ipsum dolor.
        </p>
        <></>
        <button className="button-header">Reserve a Table</button>
      </article>
      <article className="header-section-right">
        <img src="assets/restauranfood.jpg" alt="" className="banner-img" />
      </article>
    </section>
  );
}

export default Header;
