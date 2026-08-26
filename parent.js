import box from "./text.js";
import cricle from "./app.js";

const parent =()=>{
  return React.createElement('div',{id:"parent"},[box(),cricle()])

}

export default parent


