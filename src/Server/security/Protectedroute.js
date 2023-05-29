import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../context/Authcontext";

function Protectedroute({ children }) {
  const { currentUser } = useContext(Authcontext);
  return currentUser ? children : <Navigate to="/login" />;
}

export default Protectedroute;
