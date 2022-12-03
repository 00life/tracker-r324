import React, { useContext, useRef } from "react";
import { func_signup, func_signin, func_authstatus, func_logout } from "./Functions_Auth";
import { func_snackbar, func_savedata, func_loaddata } from "./Functions_1";

const AuthContext = React.createContext();
export function useAuth(){return useContext(AuthContext)};

export function AuthProvider({children}){
  const reference = useRef();

  return (
    <AuthContext.Provider value={{
      func_signup,
      func_signin,
      func_authstatus,
      func_logout,
      func_snackbar,
      func_savedata,
      func_loaddata,
      reference,
    }}>
      
      {children}

    </AuthContext.Provider>
  );

};