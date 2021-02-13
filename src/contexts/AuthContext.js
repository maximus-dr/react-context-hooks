import React, { useState } from 'react';
const { createContext } = require("react");


export const AuthContext = createContext();


export default function AuthContextProvider({children}) {

  const [isAuthenticated, setIsAuthenticatied] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticatied(!isAuthenticated);
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
      {children}
    </AuthContext.Provider>
  )
}
