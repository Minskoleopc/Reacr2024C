import React from "react";
import useCounter from "./useCounter";

const CounterComponent =()=>{

    const {count,increment,decrement,reset} = useCounter(10)
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}
export default CounterComponent