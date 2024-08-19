import { createContext, useEffect, useState } from "react";


const contextProviderContext = createContext();


const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const localToken = (newToken) => {
    if (newToken == null) {
      localStorage.removeItem("token");
      setToken(null);
      return;
    } else {
      localStorage.setItem("token", newToken);
      setToken(newToken);
    }
  };

  useEffect(() => {
    if (token == null && window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token]);
  return (
    <contextProviderContext.Provider value={{ token, localToken }}>
      {children}
    </contextProviderContext.Provider>
  );
};

export { contextProviderContext, ContextProvider };
