import React from "react";
import "./Main.css";

function Main() {
  return (
    <main>
      <h2 className="specials-main">Specials</h2>
      <button className="button-main">Online Menu</button>
      {/* possible for loop for special to options dynamic */}
      <div className="cards">
        <article className="card">
          <div>
            <img
              src="little_lemon/public/assets/cardImage_salad.png"
              alt=""
              className="card-img"
            />
          </div>
          <div className="card-pt">
            <h4>Greek Salad</h4>
            <span>$12.99</span>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex. Lorem
            ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit
            amet, consectetur adipisicing.
          </p>
          <div className="card-delivery">
            <h6>Order a delivery</h6>
            <h5>🚚</h5>
          </div>
        </article>
        <article className="card">card2</article>
        <article className="card">card3</article>
      </div>
    </main>
  );
}

export default Main;
