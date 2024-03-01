import React from "react";
import { GIT_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        login: "",
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
    const {name,login,url} = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4 bg-gray-100">
        <h2>Name : {name}</h2>
        <h2>Location : Kharagpur</h2>
        <h2>Contact : @{login} : {url}</h2>
      </div>
    );
  }
}

export default UserClass;
