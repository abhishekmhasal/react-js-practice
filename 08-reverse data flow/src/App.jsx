import React, { useState } from "react";
import Navbar from "./component/Navbar";

const App = () => {
  const [theme, setTheme] = useState("white");

  const changeTheme = (newtheme) => {
    setTheme(newtheme);

  };
  return (
    <div>
      <h1> Theme is {theme}</h1>
      <Navbar changeTheme={changeTheme} />
    </div>
  );
};

export default App;
