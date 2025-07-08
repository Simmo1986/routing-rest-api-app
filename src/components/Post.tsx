import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Post() {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")

        .then(response => {
            setPosts(response.data)
            console.log(response.data);
        })
    },[])

    return (
        <div>
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
                    {posts !== null? posts.map(post => (
                        <tr>
                            <td>{post.userID}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                        </tr>
                    )): (<div>...loading</div>)}
                </tbody>
            </table>
        </div>
    )

}