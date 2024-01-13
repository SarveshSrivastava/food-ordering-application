import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Restaurants from "./Components/Restaurants";

const App = () => (
  <h1>
    <Header />
    <Restaurants/>
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
