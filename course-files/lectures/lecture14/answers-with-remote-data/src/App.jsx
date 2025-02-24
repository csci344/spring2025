import React from "react";
import Carousel from "./Carousel";
// import { useState, useEffect } from "react";
// import { getAccessToken } from "./get-token";
import "./App.css";

export default function App() {
    const photos = [
        "https://picsum.photos/id/164/600/430",
        "https://picsum.photos/id/116/600/430",
        "https://picsum.photos/id/182/600/430",
        "https://picsum.photos/id/127/600/430",
        "https://picsum.photos/id/140/600/430",
        "https://picsum.photos/id/141/600/430",
        "https://picsum.photos/id/122/600/430",
        "https://picsum.photos/id/176/600/430",
        "https://picsum.photos/id/196/600/430",
        "https://picsum.photos/id/190/600/430",
    ];
    // const [photos, setPhotos] = useState(null);

    // async function getPosts() {
    //     const rootURL = "https://photo-app-secured.herokuapp.com";
    //     const token = await getAccessToken(rootURL, "sarah", "password");

    //     // endpoint:
    //     const endpoint = `${rootURL}/api/posts/`;
    //     const response = await fetch(endpoint, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + token,
    //         },
    //     });
    //     const posts = await response.json();
    //     const urls = posts.map((post) => post.image_url);
    //     console.log(urls);
    //     setPhotos(urls);
    // }

    // useEffect(() => {
    //     getPosts();
    // }, []);

    return (
        photos && (
            <div>
                <h1>This is a Gallery of Photos</h1>
                <Carousel gallery={photos} />
            </div>
        )
    );
}
