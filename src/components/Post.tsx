import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Post() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setPosts(response.data);
                console.log(response.data);
            });
    }, []);

    if (posts === null) {
        return (
            <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    return (
        <div className="p-4">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Post ID</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>–</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
