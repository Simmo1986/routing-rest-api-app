import { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import banner from '../assets/banner.jpg';

function Comments() {
    const [count, setCount] = useState(10000000000);

    function handleCount() {
        setCount(count + 1); // ✅ this correctly updates the state
    }

    function handleCountMinus() {
        setCount(count - 1); // ✅ this correctly updates the state
    }

    function handleCountReset() {
        setCount(0); // ✅ this correctly updates the state
    }

    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img
                    src={banner}
                    alt="Sample image"
                />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
                    <Card.Title className="fw-bold text-uppercase mb-3" as="h1">React App</Card.Title>
                    <Card.Text as="h2" className="mb-4">
                    my name is Judd and i have {count} pounds.
                    </Card.Text>
                    <Button variant="primary" className="mb-2" onClick={handleCount}>Click Me to add one</Button>
                    <Button variant="secondary" className="mb-2" onClick={handleCountMinus}>get rid of me -1</Button>
                     <Button variant="secondary" onClick={handleCountReset}>reset me so im 0 years old</Button>
                </Card.ImgOverlay> 
            </Card>
        </div>
    )
}

export default Comments;