import React from "react";
import {useState} from "react";
function Hook(){
    const [count,setCount]=useState(0);
        const increment=()=>{
            setCount(count+2);
        }
        const decrement=()=>{
            if(count>0){
                setCount(count-2);
            }
            else{
                return count;
            }
        }
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
}
export default Hook;