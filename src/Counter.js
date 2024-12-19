import React , {useState} from "react";

const Counter = ()=>{
    const [count,setCount] = useState(1);
    // increment()
    const increment =()=> setCount(count + 1)
    // decrement()
    const decrement =() => setCount(count -1)
    // reset()
    const reset =() => setCount(0)

    return (
        <>
         <h1>Counter:</h1>
         <h2>{count}</h2>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <button onClick={reset}>Reset</button>
        </>
      
    )

}

export default Counter