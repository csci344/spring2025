import React from "react";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import { getAccessToken } from "./get-token";
import "./App.css";

export default function App() {
    const [photos, setPhotos] = useState(null);

    async function getPosts() {
        const rootURL = "https://photo-app-secured.herokuapp.com";
        const token = await getAccessToken(rootURL, "sarah", "password");

        // endpoint:
        const endpoint = `${rootURL}/api/posts/`;
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });
        const posts = await response.json();
        setPhotos(posts.map((post) => post.image_url));
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        photos && (
            <div>
                <Carousel gallery={photos} />
            </div>
        )
    );
}
