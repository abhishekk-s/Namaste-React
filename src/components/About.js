import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="m-4">
        <h1 className="font-bold px-4">About Us</h1>
        <UserClass name={"AKS"} />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <UserClass name={"AKS"}/>
//     </div>
//   );
// };

export default About;
