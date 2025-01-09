import React , {Children, createContext,useState} from "react";
// data -----multiple components
// Crete a context
export const userContext = createContext()

// create a provider component

export function UserProvider({children}){

    const [user, setUser] = useState(null);

    const login = (name) => {
        setUser({name})
    }
    const logout =()=>{
        setUser(null)
    }

    return (
        <userContext.Provider value={{user,login,logout}}>
            {children}
        </userContext.Provider>
    )


}



