import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (user) => {
    console.log("user====",user);
    setIsLoggedIn(true);
    setUser(user);
  }
  const logout = () => {
    
    setIsLoggedIn(false);
    setUser(null);
  }

  const value = {
    user,
    isLoggedIn,
    login,
    logout
  }
  

  return(
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}
