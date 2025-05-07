import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "@fontsource/source-sans-pro"; // default weight 400
import "@fontsource/source-sans-pro/700.css"; // optional for bold
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
