import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Searchbar from "./src/components/Searchbar";

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



const AppLayout = () => {
  return (
    <div className="app">
        <div className="background-img"></div>
      <Header />
      <Searchbar/>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
