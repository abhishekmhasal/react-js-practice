import React from "react";

const User = (props) => {
  // data accespted  in props
  console.log(props);

  return (
    // data print using props
    <div>
      <h1>{props.arr.name}</h1>
      <h2>{props.arr.age}</h2>
      <p>{props.arr.role}</p>
    </div>
  );
};

export default User;
