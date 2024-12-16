import React  from "react";

function App5(){
    let isLoggedIn = true

    // JSX 
    // if-else-approach
    // if(isLoggedIn){
    //     return <h1>Welcome chinmay !</h1>
    // }
    // else {
    //     return <h1>Welcome Guest !</h1>
    // }

    // element-varaible approach

    // let message ;
    // if(isLoggedIn){
    //     message = <h1>Welcome chinmay !</h1>
    // }
    // else {
    //     message = <h1>Welcome guest !</h1>
    // }
    // return <div>{message}</div>

    // tenaray operator approach
    // condition ? jsx1 statemenet will render:jsx2 statement will render

    //  return (
    //     <div>
    //         {isLoggedIn ?<h1>Welcome chinmay !</h1>:<h1>Welcome Guest !</h1>}
    //     </div>
    //      )

    // short circuit operator approach
     //return isLoggedIn && <h1>Welcome chinmay !</h1>


}

export default App5