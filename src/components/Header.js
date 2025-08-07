import React from "react";
import Searchbar from "./Searchbar";


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-text-top">
          <span className="logo-text-main">Knit</span>
          <span className="logo-text-highlight">wear</span>
        </div>
        <div className="logo-text-sub">House</div>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <img
            className="cart-img"
            src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
            alt="cart"
          />
        <li>
        Profile
        <div className="bg-amber-600">welcome ,{"Abhishek"}</div>
        </li>
        </ul>
      </div>
    </div>
  );
};


export default Header