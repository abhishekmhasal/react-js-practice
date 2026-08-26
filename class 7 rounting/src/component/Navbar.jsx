import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full px-6 py-3 flex items-center justify-end bg-pink-400">
  
      <div className="flex items-center justify-between gap-10">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;