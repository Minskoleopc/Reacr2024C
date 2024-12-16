import React from "react";

function App7(){
    let names = ["chinmay","sarika","poorva","shraddha"]
    let namesList = names.map((el,index,arr)=><h2>{el}</h2>)
    return <div>{namesList}</div>
}

export default App7

