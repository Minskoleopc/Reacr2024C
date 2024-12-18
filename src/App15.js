import React , {useState} from "react";
import ChildComponent2 from "./ChildComponent2";

function App15(){
    const [isToggled,setIsTogged] = useState(false);

    const toggleHandler = ()=>{
        setIsTogged((prev) => !prev);
    }

    return (
        <div>
            <h1>Parent Componet</h1>
            <p>ToggleState:{isToggled?"ON":"OFF"}</p>
            <ChildComponent2 onToggle={toggleHandler}/>
        </div>
    )
}

export default App15