import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Women from "./Pages/Women";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path ="/contact" element={<Contact/>}/>
        <Route path = "/women" element={<Women/>}/>
      
      </Routes>
    </div>
  );
};


export default App;
