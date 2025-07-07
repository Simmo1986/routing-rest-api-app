import { useState } from "react";
import { Button } from 'react-bootstrap';

function Comments() {
    const [count, setCount] = useState(0);

    function handleCount() {
        setCount(count + 1);
    }

    return (
        <>
            <p>Number {count}</p>
            <Button variant="primary" onClick={handleCount}>Click Me</Button>
        </>
    )

}

export default Comments;
