import React from "react";
import "./Main.css";

function Main() {
  return (
    <main className="order-menu-cards-container">
      <div className="specials-title order-online-button">
        {/* rename order button and specicals title and put  cards container in seperate div */}
        <h2 className="specials-main">Specials</h2>
        <button className="button-main">Online Menu</button>
      </div>
      {/* possible for loop for special to options dynamic */}
      <div className="cards">
        <article className="card">
          <div>
            <img src="assets/cardImage_salad.png" alt="" className="card-img" />
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

        <article className="card">
          <div>
            <img src="assets/BrushTam.jpg" alt="" className="card-img" />
          </div>
          <div className="card-pt">
            <h4>Bruchetta</h4>
            <span>$5.99</span>
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

        <article className="card">
          <div>
            <img src="assets/Lemon_Des.jpg" alt="" className="card-img" />
          </div>
          <div className="card-pt">
            <h4>Lemon Dessert</h4>
            <span>$5.00</span>
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
      </div>
    </main>
  );
}

export default Main;
