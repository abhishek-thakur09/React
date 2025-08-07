import React from "react";

const Card = () => {
  return (
   <div class="res-container">
  <div class="card">
    <img src="https://media.istockphoto.com/id/2172640648/photo/knitting-with-wool.jpg?s=612x612&w=0&k=20&c=l_nosbTbm03Cswl3FUzojxmUJxZqtUBGOMiBMu4yUUU=" alt="product" class="card-img" />
    <div class="card-content">
      <div class="card-title">Stylish Knit Sweater</div>
      <div class="card-desc">Warm, cozy, and perfect for winter wear.</div>
      <div class="card-price">₹1,499</div>
      <button class="card-btn">Add to Cart</button>
    </div>
  </div>
</div>

  );
};

export default Card;
