import React from "react";

const User = (props) => {
  const clr1 = Math.floor(Math.random() * 256);
  const clr2 = Math.floor(Math.random() * 256);
  const clr3 = Math.floor(Math.random() * 256);

  return (
    <div
      style={{ backgroundColor: `rgb(${clr1},${clr2},${clr3})` }}
      className="user-card"
    >
      {props.elem.name} <br />
      {props.elem.email}
    </div>
  );
};

export default User;
