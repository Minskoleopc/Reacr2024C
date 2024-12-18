import React from "react";

function ChildComponent({onButtonClick}){
    return (
    <div>
        <h2>Child component heading</h2>
        <button onClick={onButtonClick}>ChildCButton</button>
    </div>
    )

}

export default ChildComponent