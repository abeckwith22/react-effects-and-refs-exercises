import React, { useState, useEffect } from "react";

// const Timer = () => {
//     const [seconds, setSeconds] = useState(0);
//     useEffect(() => {
//         setInterval(() => {
//             setSeconds(seconds => seconds + 1)
//         }, 1000);
//     }, []);
    
//     return (
//         <h1>{seconds}</h1>
//     )
// };

// export default Timer;

// ChatGPT 4o way

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1);
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <h1>{seconds}</h1>
    )
};

export default Timer;