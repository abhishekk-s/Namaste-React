import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <div>
    <h1>Hello World from React Element</h1>
  </div>
);

const AComponent = () => {
  return <h1>AKS</h1>
}

const elem = (
  <div>
    {heading}
    <h3>React Element</h3>
    {AComponent()}
    <AComponent />
    <AComponent></AComponent>
  </div>
);

const Title = () => (
  <div>
    <h1>AK</h1>
  </div>
);

const number = 101;

const HeadingComponent = () => (
  <div>
    {elem}
    <h2>{number}</h2>
    <Title />
    <h1>Hello world from React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element rendering

//root.render(heading);

//React Component rendering
root.render(<HeadingComponent />);
