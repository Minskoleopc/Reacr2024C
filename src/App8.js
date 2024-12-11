import React from "react";
import Person from "./Person";

function App8(){

    const Persons = [
        {   
            id:1,
            fullName:"chinmay deshpande",
            age:35,
            skill:"react"

        },
        {
            id:2,
            fullName:"poorva vyas",
            age:33,
            skill:"django"

        },
        {
            id:3,
            fullName:"sarika pansare",
            age:29,
            skill:"java"

        },
        {
            id:3,
            fullName:"ninad dani",
            age:32,
            skill:"java"

        }
    ]

    let persons = Persons.map((person)=><Person obj={person}/>)
    return <div>{persons}</div>


}

export default App8