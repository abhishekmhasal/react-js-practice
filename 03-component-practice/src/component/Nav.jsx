import React from "react";

const Nav = (props) => {

  return (
  
      <div className=" flex  justify-between items-center gap-8 h-23 w-full bg-sky-600 text-black px-8 mb-3">
        <h1 className="font-bold text-2xl px-2">{props.title}</h1>
        <div className="flex gap-8 text-amber-200 cursor-pointer">
         { props.links}
          
        </div>
      </div>
    
  );
};

export default Nav;
