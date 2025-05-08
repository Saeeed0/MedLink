import "./App.css";
import UserContextProvider from "./context/UserContect/UserContext";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  );
}

export default App;
