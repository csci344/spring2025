import React from "react";
import Carousel from "./Carousel";
import Gallery from "./Gallery";
import { useState, useEffect } from "react";
import { getAccessToken } from "./get-token";
import "./App.css";

export default function App() {
    const [photos, setPhotos] = useState(null);
    const [toggle, setToggle] = useState("carousel");

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
        const urls = posts.map((post) => post.image_url);
        console.log(urls);
        setPhotos(urls);
    }

    useEffect(() => {
        getPosts();
    }, []);

    const displayType = toggle[0].toUpperCase() + toggle.substring(1);
    if (photos) {
        return (
            <div
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                }}
            >
                <div class="buttons">
                    <button aria-label="show carousel" onClick={() => setToggle("carousel")}>
                    
                    <i class="fa-solid fa-panorama"></i> Carousel
                    </button>
                    <button onClick={() => setToggle("gallery")}>
                    <i className="fa-regular fa-images"></i> Gallery
                    </button>
                </div>
                <h1>This is a {displayType} of Photos</h1>
                {toggle === "carousel" ? (
                    <Carousel gallery={photos} />
                ) : (
                    <Gallery gallery={photos} />
                )}
            </div>
        );
    } else {
        // Only return photos if the photos are defined.
        return <></>;
    }
}
