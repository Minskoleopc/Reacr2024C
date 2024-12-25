
// reducer -----> actions -----> dispatch
// increment -----> decrement ----- reset
// reducer
// intialState
// dispatch
import React , {useReducer} from "react";

function reducer(state,action){
    switch(action.type){
        case "increment": 
            return {count:state.count+1};
        case "decrement":
            return {count:state.count-1}
        case 'reset':
            return {count:0}
        default:
            throw new Error("unknow action type")
    }
}

function App20(){
    const [state,dispatch] = useReducer(reducer,{count:0});

    return (
        <div>
            <h1>Count:{state.count}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    )

}
export default App20

// reducer using API 
// state --- loading , error , actual data
// state --- loading , error , actual data






