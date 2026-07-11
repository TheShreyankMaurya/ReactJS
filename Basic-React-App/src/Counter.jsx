import { useEffect, useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);

    function incCount() {
        setCount((currCount) => {
            return currCount + 1;
        });
    }

    useEffect(function printSomething() {
        console.log("This is a side-effect");
    }, []);

    return (
        <>
            <p>Count = {count}</p>
            <button onClick={incCount}>Click Me!</button>
        </>
    );
}

export default Counter;
