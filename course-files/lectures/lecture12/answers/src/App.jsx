import React from "react";
import Carousel from "./Carousel";
import Galleries from "./Galleries";
import { useState } from "react";
import "./App.css";

export default function App() {
    const [galleryIdx, setGalleryIdx] = useState(0);

    const galleries = [
        {
            name: "Gallery 1",
            images: [
                "https://picsum.photos/400/300?id=1",
                "https://picsum.photos/400/300?id=2",
                "https://picsum.photos/400/300?id=3",
            ],
        },
        {
            name: "Gallery 2",
            images: [
                "https://picsum.photos/400/300?id=4",
                "https://picsum.photos/400/300?id=5",
                "https://picsum.photos/400/300?id=6",
                "https://picsum.photos/400/300?id=7",
                "https://picsum.photos/400/300?id=8",
                "https://picsum.photos/400/300?id=9",
            ],
        },
        {
            name: "Gallery 3",
            images: [
                "https://picsum.photos/400/300?id=10",
                "https://picsum.photos/400/300?id=11",
                "https://picsum.photos/400/300?id=12",
                "https://picsum.photos/400/300?id=13",
                "https://picsum.photos/400/300?id=14",
            ],
        },
    ];
    return (
        <div className="page-layout">
            <Galleries
                galleries={galleries}
                galleryIdx={galleryIdx}
                setGalleryIdx={setGalleryIdx}
            />
            <Carousel gallery={galleries[galleryIdx]} />
        </div>
    );
}
