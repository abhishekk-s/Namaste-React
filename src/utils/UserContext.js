import { createContext } from "react";

const UserContext = createContext({
  loggenInUser: "Guest User",
});

export default UserContext;
