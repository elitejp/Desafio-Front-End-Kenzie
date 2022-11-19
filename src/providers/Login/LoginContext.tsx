import { createContext, useContext, useState } from "react";
import { IcontextProps, ILoginProviderData } from "./types";

const LoginContext = createContext<ILoginProviderData>(
  {} as ILoginProviderData
);

export const LoginProvider = ({ children }: IcontextProps) => {
  const [token, setToken] = useState<string | null>(null);

  const saveToken = (token: string | null) => {
    setToken(token);
  };

  return (
    <LoginContext.Provider value={{ token, saveToken }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
