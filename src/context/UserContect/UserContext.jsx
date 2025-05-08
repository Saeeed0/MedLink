import { createContext, useEffect, useState } from "react";

export const userContext = createContext();
function UserContextProvider({ children }) {
  let [userToken, setUserToken] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userTokenLS = localStorage.getItem("medlinkUserToken");
    if (userTokenLS) setUserToken(userTokenLS);

    setIsLoading(false);
  }, []);

  function logout() {
    localStorage.removeItem("medlinkUserToken");
    setUserToken(null);
  }

  return (
    <userContext.Provider
      value={{ userToken, setUserToken, isLoading, logout }}
    >
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
