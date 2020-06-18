import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

const Child2 = ()=>{

    let [state, dispatch] = useReducer(CounterReducer, 0);
    console.log(state)
    return(
        <div>
            <h2>Using Counter Reducer </h2>
            <h2>The Value of Reducer is {state}</h2>
            <button onClick = {()=> dispatch ('INCREMENT')}>Increament</button>
            <button onClick = {()=> dispatch ('RESET')}>Reset Value</button>
            <button onClick = {()=> dispatch ('DECREMENT')}>Decreament</button>

        </div>

    );
}

export default Child2;