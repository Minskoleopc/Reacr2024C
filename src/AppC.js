import React from "react";
import { UserProvider } from "./UserContext";
import LoginC from "./LoginC";
import DashboardC from "./DashboardC";

function AppC(){
    return(
        <UserProvider>
            <div>
                <h1>React Context API example</h1>
                <LoginC/>
                <DashboardC/>
            </div>
        </UserProvider>
    )
}
export default AppC
