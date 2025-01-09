import React, { useState } from "react";
import { userContext } from ".UserContect.js";


// userContext = {
//     user,
//     login,
//     logout
// }


function LoginC(){
    const {login}= userContext(userContext)
    const [name ,setName] = useState("")

    const handleLogin =()=>{
        if(name.trim()){
            login(name)
        }
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Enter yur name"
                value={value}
                onChange={(e) => setName(e.target.value)}
            >
            </input>
            <button onClick={handleLogin}></button>
        </div>
    )



}
export default LoginC