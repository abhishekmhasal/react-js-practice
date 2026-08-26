import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [user, setUser] = useState("");

  const [email, setEmail] = useState("");

  const [jobrole, setJobrole] = useState("");

  const [image, setImage] = useState("");

  const [allUser, setallUser] = useState([]);

  const setHandler = (e) => {
    e.preventDefault();

    setallUser([...allUser, { user, email, jobrole, image }]);

    setUser("");
    setEmail("");
    setJobrole("");
    setImage("");
  };

  const deleteHandler = (idx) => {
    const copyUser = [...allUser];
    copyUser.splice(idx, 1);
    setallUser(copyUser);
  };

  return (
    <div className=" min-h-screen bg-gray-400 p-5 ">
      <form
        className="flex flex-col justify-center items-center gap-5 "
        onSubmit={(e) => {
          setHandler(e);
        }}
      >
        <input
          className="w-96 px-5 py-4 focus:border-2 focus:outline-none border-blue-500  rounded-sm  font-bold font-serif bg-sky-100 "
          type="text"
          placeholder="Your Name "
          required
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />

        <input
          className=" w-96 px-5 py-4 focus:border-2  border-blue-500  rounded-sm  font-bold font-serif bg-sky-100 focus:outline-none"
          type="text"
          placeholder="Enter Your Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          className=" w-96 px-5 py-4 focus:border-2 focus:outline-none border-blue-500  rounded-sm  font-bold font-serif bg-sky-100 "
          type="text"
          placeholder="Job Role"
          required
          value={jobrole}
          onChange={(e) => {
            setJobrole(e.target.value);
          }}
        />

        <input
          className=" w-96 px-5 py-4 focus:border-2 border-blue-500 focus:outline-none rounded-sm  font-bold font-serif bg-sky-100"
          type="text"
          placeholder="image url"
          required
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />

        <button className="px-6 py-3 focus:border focus:outline-none rounded-lg  font-bold  text-black font-serif bg-cyan-400 active:scale-95 cursor-pointer">
          Create User
        </button>
      </form>

      <div className=" px-5 py-4 flex  flex-nowrap gap-5">
        {allUser.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="w-[20vw]  rounded-lg  bg-white roundedd-lg shadow-md  text-center flex   flex-col items-center  p-2"
            >
              <img
                className=" object-cover h-30 w-30 rounded-full p-2"
                src={elem.image}
                alt=""
              />
              <h1 className=" font-bold text-xl text-black">{elem.user}</h1>
              <p className="font-medium m-2 text-black">{elem.email}</p>
              <p className=" text-blue-600 font-medium  ">{elem.jobrole}</p>
              <button
                onClick={() => {
                  deleteHandler(idx);
                }}
                className="px-5 py-2 rounded-2xl active:scale-95 cursor-pointer bg-red-500 text-white m-5"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <card />
      </div>
    </div>
  );
};

export default App;
