// state and logic defined at one place
import { useState } from "react";
const useCounter = (intialialValue = 0) =>{
    // state and logic 
    const [count,setCount] = useState(intialialValue)
    const increment = () => setCount((prev)=> prev+1)
    const decrement= () => setCount((prev)=> prev-1)
    const reset = () => setCount(intialialValue)
    return {count,increment,decrement,reset};

};
export default useCounter;