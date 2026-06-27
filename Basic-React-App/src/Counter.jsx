import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);

    function incCount() {
        setCount((count += 1));
    }
    return (
        <>
            <p>Count = {count}</p>
            <button onClick={incCount}>Click Me!</button>
        </>
    );
}

export default Counter;
