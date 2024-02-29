import React from "react";
import { GIT_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "A",
        login: "A",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(GIT_URL);
    const json = await data.json();

    this.setState({
      userInfo: json,
    })
  }
  render() {
    const {name,login} = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h2>Location : Kharagpur</h2>
        <h2>Contact : @{login}</h2>
      </div>
    );
  }
}

export default UserClass;
