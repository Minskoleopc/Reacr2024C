import React from "react";

function Greet(props){
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} !</h1>
            <p>Welcome to {props.language} class !</p>
        </div>
    );
};

export default Greet