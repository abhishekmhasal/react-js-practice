import React, { useState } from "react";

const Navbar = (props) => {
  const [newtheme, setNewtheme] = useState("");

  return (
    <div className="Nav">

      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(newtheme)
        }}
      >
        <input
          type="text"
          placeholder=" enter theme"
          value={newtheme}
          onChange={(e) => {
      setNewtheme(e.target.value)
          }}
        />
        <br />
        <button> set theme</button>
      </form>
    </div>
  );
};

export default Navbar;
