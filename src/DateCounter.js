import React, {useState} from "react";

const DateCounter = ()=>{

    const [currentDate,setCurrentDate] = useState(new Date())

    const incrementDate =() =>{
        const newDate = new Date(currentDate) // creating date obj , passing current date
        newDate.setDate(newDate.getDate()+ 1)
        setCurrentDate(newDate)
    }
    const decrementDate =() =>{
        const newDate = new Date(currentDate) // creating date obj , passing current date
        newDate.setDate(newDate.getDate() - 1)
        setCurrentDate(newDate)
        
    }
    const resetDate =() =>{
        setCurrentDate(new Date())
    }


    return(
        <div>
            <h1>{currentDate.toDateString()}</h1>
            <button onClick={incrementDate}>Increment-Date</button>
            <button onClick={decrementDate}>Decrement-Date</button>
            <button onClick={resetDate}>Reset</button>
        </div>
    )

}
export default DateCounter