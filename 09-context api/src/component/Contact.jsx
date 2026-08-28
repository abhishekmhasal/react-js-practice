import React, { useContext } from "react";
import { ProductData } from "../context/DataContext";

const Contact = () => {
  const [theme, setTheme] = useContext(ProductData);
  return (
    <div>
      <h1>abhi is softdev--{[theme, setTheme]}</h1>
    </div>
  );
};

export default Contact;
