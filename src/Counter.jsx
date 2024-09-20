import React, { useState, useEffect } from "react";

const Counter = () => {
    const [num, setNums] = useState(0);

    // setInterval(() => {
    //     setSeconds(seconds => seconds + 1);
    // }, 1000);

    const increment = () => {
        setNums(n => n + 1);
    };

    useEffect(() => {
        document.title = `Hi${'!'.repeat(num)}`;
    })
    

    return (
        <div>
            Let's get excited.
            <button onClick={increment}>Get more excited.</button>
            <p>Counter: {num}</p>
        </div>
    )
}

export default Counter;
