import React from "react";
import User from "./component/User";
import Data from "./component/Data";
import { arr } from "./component/Data";
const App = () => {
  const btn = () => {
    console.log(" btn is clicked");
  };
  return (
    <div>
      <button
        onClick={() => {
          btn(); // function calling in react
        }}
      >
        clicked mee
      </button>

      {arr.map((elem, idx) => {
        return (
          <User
            key={idx}
            arr={elem} // props ke through ke data bhejana
          />
        );
      })}
      <Data />
    </div>
  );
};

export default App;
