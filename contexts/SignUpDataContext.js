import React, {useContext, createContext, useState} from "react";

const SignUpDataContext = createContext(null);

export function SignUpDataContextProvider({children}) {
  const [SignUpData, setSignUpData] = useState(null);
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
  const signUpDataContext = useContext(SignUpDataContext);
  if (!signUpDataContext) {
    throw new Error('SignUpDataContext.Provider is not found')
  }
  return signUpDataContext;
}