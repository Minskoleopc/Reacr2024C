// child component 2 : Displays data received from the parent

import React ,{useState} from "react";
function DisplayComponent({value}){

    return (
        <div>
            <p>Value from Input:{value}</p>
        </div>
    )

}
export default DisplayComponent
