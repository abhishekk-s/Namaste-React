const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

console.log(heading);  // Returns Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
