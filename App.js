
// const parent = React.createElement("div", {id: "parent"}, 
//     React.createElement("div", {id: "child"}, 
//         React.createElement("h1", {}, "hey i am h1 tag"),
//         React.createElement("h2", {}, "hey i am sibling"),
//         React.createElement("h3", {}, "hey i am sibling"),
//         React.createElement("h4", {}, "hey i am sibling"),
//     )
// )


// const heading = React.createElement(
//   "h1",
//   { id: "heading" , xyz:"uuh" },
//   "hello, My name is Abhishek"
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
const heading = React.createElement("div", {id: "Parent"}, 
  React.createElement("div", {id:"child"}, 
    React.createElement("h4", {}, "hey my name is abhsihek")
  )
)
console.log(heading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);