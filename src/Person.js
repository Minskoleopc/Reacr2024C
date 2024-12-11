import React from "react";

function Person({obj}){
    console.log(obj)
    return(
        <div>
            <h1>I am {obj.fullName}, age:{obj.age} and skill:{obj.skill}</h1>
        </div>
    )

}
export default Person