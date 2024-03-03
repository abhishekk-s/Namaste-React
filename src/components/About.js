import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <div className="m-4">
        <h1 className="font-bold px-4">About Us</h1>
        <UserContext.Consumer>
          {({ loggenInUser }) => <h3 className="m-4">USER : {loggenInUser}</h3>}
        </UserContext.Consumer>
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
