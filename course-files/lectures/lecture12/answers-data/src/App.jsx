import React from "react";
import Carousel from "./Carousel";
import Galleries from "./Galleries";
import { useState, useEffect } from "react";
import { getAccessToken } from "./get-token";
import "./App.css";

export default function App() {
    const [galleryIdx, setGalleryIdx] = useState(0);
    const [galleries, setGalleries] = useState(null);

    async function getPosts() {
        console.log("fetching posts...");
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
        setGalleries([
            {
                name: "Sarah's Gallery",
                images: posts.map((post) => post.image_url),
            },
        ]);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return galleries ? (
        <div className="page-layout">
            <Galleries
                galleries={galleries}
                galleryIdx={galleryIdx}
                setGalleryIdx={setGalleryIdx}
            />
            <Carousel gallery={galleries[galleryIdx]} />
        </div>
    ) : (
        ""
    );
}
