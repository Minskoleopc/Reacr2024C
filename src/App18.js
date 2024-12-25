// import React, { useState, useEffect } from "react";

// function App18() {
//     const [page, setPage] = useState(1)
//     const [users, setUsers] = useState([])
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {

//         const fetchUsers = async () => {
//             try {
//                 setLoading(true)
//                 const reponse = await fetch(`https://reqres.in/api/users?page=${page}`)
//                 if (!reponse.ok) {
//                     throw new Error('Api call failed to reponse')
//                 }
//                 const data = await reponse.json()
//                 setUsers(data.data)
//             }
//             catch (err) {
//                 setError(err.message);
//             }
//             finally {
//                 setLoading(false)
//             }
//         }

//         fetchUsers()

//     }, [page])

// }
// if (loading) return <p>Loading....</p>
// if (error) return <p>Error...{error}</p>
// return (
//     <div>
//         <h1>Users</h1>
//         <ul>
//             {
//                 users.map((user) => (
//                     <li>
//                         <h2>{user.first_name}{user.last_name}</h2>
//                         <p>{user.email}</p>
//                     </li>
//                 ))
//             }
//         </ul>
//         <button onClick={setPage(page+1)}>NextPage</button>
//     </div>
// )

// export default App18
