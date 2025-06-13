import React from "react";
import { AuthContext } from "./AuthContext";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase_Config";

const AuthContextProvider = ({ children }) => {
    // sing Up method
  const signUpByGoogle = (auth, provider) => {
    return signInWithPopup(auth, provider).then(res);
  };




  const handleUser = { signUpByGoogle };
  return (
    <AuthContext.Provider value={handleUser}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
