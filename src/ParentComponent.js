// Parent Component : Manages the shared state

import { useState } from "react";

function ParentComponent(){
    const [sharedValue, setSharedValue] = useState("");
    return (
        <div>
            <h1>State Uplifiting example</h1>
            <InputComponent onInputChange={setSharedValue}/>
            <DisplayComponent value = {sharedValue}/>
        </div>
    )

}
export default ParentComponent

// useContext()  
// basic ways ----> to pass value and methods to another component