import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *    - Logo
 *    - Nav items
 * Body
 *    - search
 *    - Restaurant Container
 *    - Crads
 * Footer
 *    - Copyright
 *    - Link
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="logo"
          className="logo"
        ></img>
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
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search for restaurant, item or more" />
      <img
        className="search"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&s"
        alt="search"
      />
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search">
        <Navbar />
      </div>
      <div className="res-container"></div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* Header */}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
