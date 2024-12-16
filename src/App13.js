// inline style and styling as object 
import React from "react";
import Greet from "./Greet";
function App13(){
    const headerStyling = {
        color:"red",
        fontSize:"24px"
    }

    return <div>
        <h1 style={headerStyling}>Minksole</h1>
        <p style={{color:"green"}}>I am learning para by para</p>
    </div>


}

export default App13