import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("ticketapp_session");
    if (token) setSession(token);
  }, []);

  const login = (token) => {
    localStorage.setItem("ticketapp_session", token);
    setSession(token);
  };

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
