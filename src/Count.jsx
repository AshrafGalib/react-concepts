import { useState } from "react"

export default function(){
    const CountStyle={
        border :'2px solid orange'
    }
    const[count,setCount] =useState(0)
    const handleCount =()=>{
        const updateCount =count+1
        setCount(updateCount)
    }
    const handleReset =()=>{
        const resetReaction = count*0
        setCount(resetReaction)
    }
    return(
        <div>
            <h2>Online Tasbih Counter</h2>
            <div style={CountStyle}>
                <ol>
                    <li>La ilaha illallah(50 times)</li>
                    <li>Subhan Allah(50 times)</li>
                    <li>Alhamdulillah(50 times)</li>
                    <li>Allahu Akbar(50 times)</li>
                    <li>Astagfirullah(50 times)</li>
                    <li>La hawla wa la quwwata illa billah(50 times)</li>
                </ol>
            </div>
            <h1>{count}</h1>
            {
                count==50 && <p>Ma sha Allah ! You said La ilaha illallah 50 times!  </p>
            }
            <button onClick={handleCount}>Count</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}