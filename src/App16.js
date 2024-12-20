import React, { useState, useEffect } from "react";

// API , async await  , reponse

function App16() {

    const [users, setUsers] = useState([]);// State to store user data
    const [loading, setLoading] = useState(true) // State to track loading state
    const [error, setError] = useState(null) // State to track errors

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://reqres.in/api/users?page=2`)
                if(!response.ok){
                    throw new Error("API call failed")
                }
                let data = await response.json()
                setUsers(data.data)

            }
            catch (err) {
                setError(err.message);
            }
            finally{
                setLoading(false)
            }
        };
        fetchUser();
    },[]);
    if(loading) return <p>Loading .........</p>
    if(error) return <p>Error: {error}</p>
    return(
        <div>
            <h1>User list</h1>
            <ul>
                {
                    users.map((user)=>(
                        <li>
                            <p>{user.id}</p>
                            <p>{user.email}</p>
                        </li>
                    ))

                }
            </ul>
        </div>
    )
}
export default App16