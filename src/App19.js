import React , {useRef} from "react";
function App19(){
    const inputRef =  useRef(null)
    const focusInput = ()=>{
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref = {inputRef} type="text" placeholder="Type something..."/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )

}
export default App19

// useState()
// useEffect()
// usereducer()
// useRef()
