import React from "react";
import ChildComponent from "./ChildComponent";
function App14(){
    const handleButton =()=>{
        alert('Button click in child component')
    }

    return (
        <div>
            <h1>Click below button to open alert!</h1>
            <ChildComponent onButtonClick = {handleButton}/>
        </div>
    )
}
export default App14