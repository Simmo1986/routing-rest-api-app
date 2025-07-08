import { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import banner from '../assets/banner.jpg';

function Comments() {
    const [count, setCount] = useState(0);

    function handleCountPlus() {
        setCount(prev => prev + 1);
    }

    function handleCountMinus() {
        setCount(prev => prev - 1);
    }

    function handleCountReset() {
        setCount(0);
    }

    return (
        <div>
            <Card className="bg-dark text-white rounded-0">
                <Card.Img
                    src={banner}
                    alt="Sample image"
                />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
                    <Card.Title className="fw-bold text-uppercase mb-3" as="h1">React App</Card.Title>
                    <Card.Text as="h2" className="mb-4">
                    {count}
                    </Card.Text>
                    <div className="d-flex gap-2">
                        <Button variant="primary" onClick={handleCountPlus}>Add one</Button>
                        <Button variant="primary" onClick={handleCountMinus}>Minus one</Button>
                        <Button variant="light" onClick={handleCountReset}>Reset me</Button>
                    </div>
                </Card.ImgOverlay> 
            </Card>
        </div>
    )
}

export default Comments;