import React, { createContext, useState } from "react";
export const ProductData = createContext()

const DataContext = (props) => {
  const [theme, setTheme] = useState("dark")
  
const data = "Tushar"

  return <div>
 <ProductData.Provider value={[theme, setTheme]}>
  {props.children}
 </ProductData.Provider>

 <button  value={theme} onClick={()=>{
setTheme(theme ==="light" ?"dark ":"light")
 }}>Change theme</button>
    </div>
};

export default DataContext;
