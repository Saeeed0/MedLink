import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../../context/UserContect/UserContext";

function ProtectedRoute({ children }) {
  // const userToken = localStorage.getItem("medlinkUserToken");

  const { userToken, isLoading } = useContext(userContext);

  if (isLoading) return <div className="text-center mt-5">Loading...</div>;

  return userToken ? children : <Navigate to="/Login" />;
}

export default ProtectedRoute;
