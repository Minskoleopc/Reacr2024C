import React from "react";
function ChildComponent2({onToggle}){
    return(
        <div>
            <h2>Child component</h2>
            <button onClick={onToggle}>change</button>
        </div>
    )

}
export default ChildComponent2