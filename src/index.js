import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./Welcome";
import "./styles.css";

const App = () => (
  <div>
    <h1>Hello, React!</h1>
    <Welcome />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
