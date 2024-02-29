import { useState } from "react";

const User = (props) => {
    const [count,setCount] = useState(0);
  return (
    <div className="user-card">
        <h2>Count : {count}</h2>
      <h2>Name : {props.name}</h2>
      <h2>Location : Kharagpur</h2>
      <h2>Contact : @ak101</h2>
    </div>
  );
};

export default User;
