import React, { useContext, useRef, useState } from "react";
import { func_signup, func_signin, func_logout, useAuthStatus } from "./Functions_Auth";
import { func_snackbar } from "./Functions_1";

const AuthContext = React.createContext();
export function useAuth(){return useContext(AuthContext)};

export function AuthProvider({children}){
  const reference = useRef();
  const authstatus = useAuthStatus();
  const [persons, setPersons] = useState([]);
  
  return (
    <AuthContext.Provider value={{
      func_signup,
      func_signin,
      func_logout,
      func_snackbar,
      reference,
      authstatus,
      persons,
      setPersons
    }}>
      
      {children}

    </AuthContext.Provider>
  );

};