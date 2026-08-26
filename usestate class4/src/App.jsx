import React, { useState } from "react";
import Usestste from "./assets/Usestste";

const App = () => {
  // const [marks, setMarks] = useState([45, 67, 3, 98, 12, 29]);
  // function gracestudent() {
  //   const newMarks = marks.map(function (elem) {
  
  //     if (elem > 95) {
  //       return elem;
  //     } else {
  //       return elem + 5;
  //     }
  //   });
  //   setMarks(newMarks);\
  const arr =['chaitali',"tushar",'sail',"sudip"]

  const [count, setCount] = useState(0)
 
  // }
   const btn = ()=>{
    if( count < arr.length -1)
  {
    setCount( count+1 )
  }
  else{
    setCount(0)
  }
   
   }
 
  return (
    <div>
      <h1>{arr[count]}</h1>
      <button onClick={()=>{
       btn()
      }}>change it</button>
     {/* {marks.map(function (elem, idx) {
        return (
          <h1 key={idx}>
            student {idx + 1} marks is {elem}({elem >= 34 ? "pass" : "fail"})
          </h1>
        );
      })}

      <button onClick={gracestudent}> Add 5 grace</button> */}
    </div>
  );
};

export default App;
