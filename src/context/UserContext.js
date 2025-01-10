import React , {createContext,useState} from React

// create a context for userdata 

const UserContext  = createContext()

export const UserProvide =({children}) =>{

    const [user,setUser]= useState(null) ;

    return(
        <UserContext.Provider value = {{user,setUser}}>
            {children}
        </UserContext.Provider>
    );


}
export default UserContext;