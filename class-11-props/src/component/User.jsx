import React, { useState } from "react";

const User = (props) => {
  const [follow, setFollow] = useState("Follow");

  const btn = () => {
    setFollow("Follwed");
  };

  return (
    <div className=" relative text-center  w-64   p-5 bg-white rounded m-4 overflow-hidden">
      <img
        src={props.users.image}
        alt=""
        className=" h-20 w-20 object-cover  rounded-full mx-auto mb-4 "
      />

      <h1 className="text-2xl font-semibold">{props.users.fullName}</h1>

      <p className="text-xl font-black">{props.users.age}</p>

      <p className="text-xl text-blue-700 font-extrabold font-mono">
        {props.users.role}
      </p>

      <p className="text-sm m-2 font-bold text-blue-500">
        {props.users.description}
      </p>
      <p>{props.users.isFollow}</p>

      <button
        onClick={() => {
          btn();
        }}
        className="px-2 py-2 absolute top-3 right-3"
      >{follow}
      </button>
    </div>
  );
};

export default User;
