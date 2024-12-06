import React from "react";

// simple html jsx

function App4() {

    // program 1
    // simple html jsx
    // return <h1>Hello, world</h1>


    // program 2
    // nesting elements
    //    const nestedElements = (
    //     <div>
    //         <h1>Welcome ..</h1>
    //         <p>I am learning para wise</p>
    //     </div>
    //    )
    //    return nestedElements


    // program 3
    // return (
    //     <div>
    //         <h1>Welcome ..</h1>
    //         <p>I am learning para wise</p>
    //     </div>
    // )

    // program 4
    // Embedding Javascript Expressions
    // const user = "Chinmay"
    // return <h1>Hello {user}!</h1>


    // program 5
    const isLoggedIn = false
    
    // if(isLoggedIn){
    //     return <h1>Welcome back again !</h1>
    // }
    // else {
    //     return <h1>Welcome to new place !</h1>
    // }

    // program 5

    // return (
    //     <div>
    //         {isLoggedIn ?
    //             <h1>Welcome back again !</h1> :
    //             <h1>Welcome new place !</h1>
    //         }
    //     </div>
    // )

    // program 6
    return (
        <div>
            {isLoggedIn &&  <h1>Welcome to new place..</h1>}
        </div>
    )




}
export default App4