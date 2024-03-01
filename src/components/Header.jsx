import { Link } from "react-router-dom";
import LOGO_URL from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus= useOnlineStatus();

  return (
    <div className="flex justify-between bg-slate-200">
      <div className="logo-container">
        <img className="w-[12rem]" src={LOGO_URL} />
      </div>
      <div className="flex items-cente">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="px-4 py-1 bg-blue-300 m-4 rounded-md"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
