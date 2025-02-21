import { ReactNode, createContext, useState } from "react";

interface LoginContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const LoginContext = createContext<LoginContextType | undefined>(undefined);

interface LoginProviderProps {
  children: ReactNode;
};

export const LoginProvider: React.FC<{ children: ReactNode }> = ({ children }: LoginProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  return (
    <LoginContext.Provider value={{ token, setToken }}>
      {children}
    </LoginContext.Provider>
  );
};
