'use client'
import { useState } from "react";

export function Counter(){
    const [count,setCount] = useState(0);
    return(
        <div className="text-amber-50">
            <p> Count: {count} </p>
            <button onClick={() => setCount(count+1)}> Increment</button>
        </div>
    )
}