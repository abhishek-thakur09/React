import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", {id: "Parent"}, 
  React.createElement("div", {id:"child"}, "Hey this is my name", 
    React.createElement("h4", {}, "hey my name is abhsihek")
  )   
)
console.log(heading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);