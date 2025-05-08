import { createContext, useEffect, useState } from "react";

export const userContext = createContext();
function UserContextProvider({ children }) {
  let [userToken, setUserToken] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const userTokenLS = localStorage.getItem("medlinkUserToken");
    if (userTokenLS) {
      setUserToken(userTokenLS);
      console.log("userTokenLS", userTokenLS);
    }
    setIsLoading(false);
  }, []);
  return (
    <userContext.Provider value={{ userToken, setUserToken, isLoading }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
