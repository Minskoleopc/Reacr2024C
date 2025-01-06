// prop drilling
import React,{useState} from "react"
import Child from "./Child"

const Parent =()=>{
    const [message,setMessage] = useState("hello from parent!")
    return (
        <div>
            <h1>Parent Component</h1>
            <Child message={message}></Child>
        </div>
    )
}
export default Parent

