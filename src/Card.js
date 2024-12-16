import React from "react";


let Card = (props)=>{
    //{title:"Minskole"}
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.children}</h3>
        </div>
    )
}
export default Card