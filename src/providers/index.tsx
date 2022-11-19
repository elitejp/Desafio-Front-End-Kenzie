import { ReactNode } from "react";
import { LoginProvider } from "./Login/LoginContext";

interface IcontextProps {
  children: ReactNode;
}

const Providers = ({ children }: IcontextProps) => {
  return <LoginProvider>{children}</LoginProvider>;
};

export default Providers;
