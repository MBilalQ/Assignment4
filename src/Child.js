import React, { useContext, useState } from "react";
import CounterContext from "./CounterContext";

function Child() {
    let counterValue = useContext(CounterContext);
    console.log(counterValue);
    return (
        <div>
            <h2>Using Counter Context </h2>
            <h2>Counter Value : {counterValue[0]}</h2>

            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Update Value</button>
            
            
        </div>
    );
}

export default Child;