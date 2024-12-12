import React , {useState} from "react";

function App8(){

    // incorrect way 
    //let message = "welcome to js class"
    // function changeMessage(){
    //     message = "Thank you subcribing"
    //     console.log(message)
    // }

    // correct way 

    let [message,setCurrectMessage] = useState("welcome to js class")
    
    function changeMessage(){
        setCurrectMessage("Thank you for subscribing!")
    }

    //  JSX
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={changeMessage}>Click to subcribe!</button>
        </div>
    )
}

export default App8