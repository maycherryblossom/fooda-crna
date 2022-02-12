import React, {useContext, createContext, useState} from "react";

const SignUpDataContext = createContext(null);

export function SignUpDataContextProvider({children}) {
  const [SignUpData, setSignUpData] = userState(null);
  return (
    <SignUpDataContext.Provider
      children={children}
      value={{
        SignUpData, 
        setSignUpData,
      }}
    />
  );
}

export function useSignUpDataContext() {
    
}