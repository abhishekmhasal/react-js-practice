import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./component/User";
const App = () => {
 const [api, setApi] = useState([])
 
 useEffect(function(){
  getData()
 },[])
  const getData = async () => {


    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log(responce.data);
    setApi(responce.data)
  };
  return (
    <div>
     
      {api.map(( elem,idx )=>{
        return <div key={idx}>
           <h2><User elem = {elem}/></h2>
        </div>  
      })}
   
    </div>
  );
};

export default App;
