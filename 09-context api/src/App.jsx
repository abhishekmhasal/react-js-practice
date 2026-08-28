import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>

      <Home/>
      <Contact/>
    </div>
  );
};

export default App;
