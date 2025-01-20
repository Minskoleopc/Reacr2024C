// useMemo
// Optimize performance --
// calculation 
// depency chnage

import React , {useState,useMemo} from "react";

function App22(){

    const [count,setCount] = useState(0)
    const [input , setInput]  = useState('')

    // Memorized value : only recalculates when count changes

    const expensiveValue = useMemo(()=>{
        console.log("calculating .......")
        return count * 2
    },[count])



    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
            <h2>Expensive value:{expensiveValue}</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type here something"
            />
        </div>

    )
}

export default App22