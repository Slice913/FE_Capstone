import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <span className="testimonials-title">Testimonials</span>
      <aside className="testimonial-rating-container">
        <h4>Ratings</h4>
        <div className="testimonial-img-container">
          <img className="testimonial-img" src="" alt="" />
          <p className="testimonial-img-name">Name</p>
        </div>
        <h6>Review rest</h6>
      </aside>
    </section>
  );
}

export default Testimonials;
