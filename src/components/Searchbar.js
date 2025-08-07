import React from "react";


const Searchbar = () => {
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

export default Searchbar;