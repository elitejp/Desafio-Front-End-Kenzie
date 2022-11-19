import { ReactNode } from "react";

export interface IcontextProps {
  children: ReactNode;
}

export interface ILoginProviderData {
  token: string | null;
  saveToken: (token: string | null) => void;
}
